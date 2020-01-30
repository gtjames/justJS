/**
 * Created by gjames on 6/21/2017.
 */
fs = require ("fs");
//createTau();
//createTau1B();

let piBuffer  = fs.readFileSync( 'C:/Projects/csv/Pi-10 Million.txt',  'utf8' );
let tauBuffer = fs.readFileSync( 'C:/Projects/csv/Tau-10 Million.txt', 'utf8' );

findMeInBoth('Gary',   '042854');
findMeInBoth('Tari',   '122353');
findMeInBoth('Shiloh', '050579');
findMeInBoth('Chris',  '031381');
findMeInBoth('Megan',  '050586');
findMeInBoth('Pi',     '3141592');

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    findMeInBoth(d.toString().trim(), d.toString().trim());
});

function findMeInBoth(you, when) {
	findMeInPi (you, when);
	findMeInTau(you, when);
}

function findMeInPi(you, when) {
	findMe(piBuffer, 'Pi ', you, when);
}
function findMeInTau(you, when) {
	findMe(tauBuffer, 'Tau', you, when);
}

function findMe(data, what, you, when) {
	let where = data.search(when);

	if (where < 0)
		console.log('Sorry ' + you + '. ' + what + ' has never heard of you');
	else
		console.log(what + ' found ' + you + ' at: ' + where);
}

// function createTau() {
// 	fs.readFile('C:/Projects/csv/pi-10 Million.txt', 'utf8', function (err, pi1M) {
// 		if (err) {
// 			return console.log(err);
// 		}
//
// 		let tau = '6.';
//
// 		for ( let i = 2; i <= 1000000001; i++) {
// 			let d  = ((pi1M[i]   - '0') << 1) % 10;
// 			let d2 =   pi1M[i+1] - '0';
// 			if ( d2 >= 5 )
// 				d++;
// 			tau += d;
// 			if ( i % 100000 == 0) {
//                 fs.appendFileSync('C:/Projects/csv/Tau-1 Billion.txt', tau);
//                 console.log("at " + i);
//                 tau = '';
//             }
// 		}
//         fs.appendFileSync('C:/Projects/csv/Tau-1 Billion.txt', tau);
// 	});
// }
//
// function createTau1B () {
//     var fd = fs.openSync('C:/Projects/csv/pi-billion.txt', 'r');
//     var bufferSize = 1024 * 1024;
//     var buffer = new Buffer(bufferSize);
//
//     var tau = '';
//     var read;
//     while ((read = fs.readSync(fd, buffer, 0, bufferSize, null)) !== 0) {
//         tau = buffer.toString('utf8', 0, read);
//         fs.appendFileSync('C:/Projects/csv/Tau-1 Billion.txt', tau);
//     }
// }