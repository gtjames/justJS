let fs = require('fs');

let fileLines = readFile('c:/projects/csv/list.txt');

if (fileLines.length > 0) {
    showColumn("zip", fileLines);
}

/**
 * readFile
 *      use the file system package to read a file
 *      split the results on the carriage return line feed
 *      return an array of lines to the caller
 * @param name          file name to read
 * @returns {Array}     file text by line
 */
function readFile(name) {
    let data = fs.readFileSync(name).toString();
    let lines = data.split("\r\n");
    return lines;
//    return fs.readFileSync(name).toString().split("\r\n");
}

/**
 * showColumn
 *      given the data from a tab delimited file
 *      find the column desired and list the contents of that column for the whole file
 * @param name
 * @param file
 */
function showColumn(name, file) {
    let titles = file[0].split("\t");
    let colNum = titles.indexOf(name);
    if (colNum >= 0) {
        console.log(name);
        for (var i = 1; i < file.length; i++) {
            let tokens = file[i].split("\t");
            if (tokens.length-1 >= colNum)
                console.log(tokens[colNum]);
        }
    }
    //file.forEach(function (line) {console.log(line.split('\t')[colNum])});
}
