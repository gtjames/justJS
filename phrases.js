let lines;					//	will hold every line of the Book of Mormon
let allWords = {};			//	Object to hold word and reference array
let localStorage = [];

//	load the Book of Mormon from disk
const fs = require('fs');
let howMany = 5;
let logFile = './phraseSize'+howMany+'csv"';
fs.readFile('TheBookOfMormon.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    lines = data.split("\r\n");
    readTheBook(data)

    try {
        fs.truncateSync(logFile, 1);
    } catch (error) { console.error(error); }
    let commonPhrases = findPhrases();
    let bigPhrases = Object.entries(commonPhrases).filter(p => p[1].count > 20);
    for (const [ref, phrase] of Object.entries(bigPhrases)) {
        let output = `${phrase[0]}~${phrase[1].count}~${phrase[1].ref}\n`;
        fs.appendFileSync(logFile, output); // Write the string to a file
    }
});

function findPhrases() {
    let pCount = 0, loops = 0;
    let commonPhrases = [];
    for (const [ref, verse] of Object.entries(localStorage)) {
        console.log(`${ref}`);
        let text = verse.substring(verse.indexOf("  ")+2);
        text = text.substring(text.indexOf(" ")+1);
        let words = text.split(/\W/).filter(w => w.length>0);		//	just the words, no punc
        for (let i = 0; i < words.length - howMany; i++) {
            let phrase = "";
            for ( let p = i; p < i+howMany; p++)
                phrase += ` ${words[p]}`
            phrase = phrase.substring(1);
//            let phrase = `${words[i]} ${words[i+1]} ${words[i+2]} ${words[i+3]} ${words[i+4]}`;
            if (typeof commonPhrases[phrase] !== 'undefined') continue;     //  if it has already been searched go to next phrase
            loops += findPhrase(phrase, commonPhrases);
            pCount++;
            //if (pCount > 1000) break done;
        }
    }
    return commonPhrases;
}
function findPhrase(phrase, commonPhrases) {
    let count = 0;
    for (const [ref, verseText] of Object.entries(localStorage)) {
//			let count = (verseText.match(new RegExp("\\b" + phrase + "\\b","gi")) || []).length;
        count++;
        if (verseText.indexOf(phrase) >= 0)	{
            //	is there a reference to this word in the allWords list
            if (typeof commonPhrases[phrase] !== 'undefined') {
                commonPhrases[phrase].count += 1;
            }
            else {		//	new word in list
                commonPhrases[phrase] = { "count": 1, "ref":ref};
            }
        }
    }
    return count;
}

//	we have the book loaded
//	split all of the text into separate lines
//	analyze each verse to extract all words and tally them
function readTheBook(theBook) {
    allWords = {};

    lines = theBook.split("\r\n");
    /*
    THE BOOK OF MORMON
    1 Nephi THE FIRST BOOK OF NEPHI HIS REIGN AND MINISTRY An account of Lehi and his wife Sariah and his four sons, being called, (beginning at the eldest) Laman, Lemuel, Sam, and Nephi. The Lord warns Lehi to depart out of the land of Jerusalem, because he prophesieth unto the people concerning their iniquity and they seek to destroy his life. He taketh three days' journey into the wilderness with his family. Nephi taketh his brethren and returneth to the land of Jerusalem after the record of the Jews. The account of their sufferings. They take the daughters of Ishmael to wife. They take their families and depart into the wilderness. Their sufferings and afflictions in the wilderness. The course of their travels. They come to the large waters. Nephi's brethren rebel against him. He confoundeth them, and buildeth a ship. They call the name of the place Bountiful. They cross the large waters into the promised land, and so forth. This is according to the account of Nephi; or in other words, I, Nephi, wrote this record.
    1 Nephi 1 Chapter 1
    1 Nephi 1:1  1 I, Nephi, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father; and having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days; yea, having had a great knowledge of the goodness and the mysteries of God, therefore I make a record of my proceedings in my days.
    */
    for (let l = 0; l < lines.length; l++) {
        if (startOfBook(lines[l])) {
            for (l++; l < lines.length && !startOfBook(lines[l]); l++) {
                if (lines[l].search('Chapter') >= 0)
                    l++;
                let wordsAndRef = removeChapterRef(lines[l], lines[l]);
                localStorage[wordsAndRef.chapter] = lines[l];
            }
            if (l < lines.length && startOfBook(lines[l])) l--;
            //    	if (l > 50 ) break;
        }
    }
}

//	eliminate the leading verse reference on each line
//	return JSON with list of words and the reference
function removeChapterRef(line, chapter) {
    let book;
    let reference = line.split(":");
    let words;
    line = line.toLowerCase();
    book = reference[0];
    line = line.slice(reference[0].length + 1, -1);
    words = line.split(/\W/);
    book += ':' + words[0];
    words = words.slice(3);

    return {"words": words, "chapter":book};
}

//	this is the only way to know that we have moved from one book to the next
function startOfBook(line) {
    return (line.search('BOOK OF') >= 0 || line.search('WORDS OF') >= 0);
}
