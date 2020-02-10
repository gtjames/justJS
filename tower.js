let max = 10;
let rndAr = uniqueRandomArray(max, 1);
console.log(rndAr)
for (let i = 0; i < rndAr.length; i++) {
    console.log(layer(rndAr[i], max - rndAr[i]));
}

let newAr = [];
while(rndAr.length > 0) {
    for (let i = 0; i < rndAr.length - 1; i++) {
        if (rndAr[i] > rndAr[i + 1]) {
            let tmp = rndAr[i];
            rndAr[i] = rndAr[i + 1];
            rndAr[i + 1] = tmp;
        }
    }
    newAr.unshift(rndAr.pop());
}
console.log(newAr);
rndAr = newAr
//rndAr.sort((e, b) => e - b)

for (let i = 0; i < rndAr.length; i++) {
    console.log(layer(rndAr[i], rndAr[rndAr.length - 1] - rndAr[i]));
}

newAr = uniqueRandomArray(max, 1);
console.log(newAr);
let sorted = [];
while (newAr.length > 0) {
    let min = Math.min(...newAr);
    let indx = newAr.findIndex(m => m == min);
    sorted.push(newAr.splice(indx,1)[0]);
}
console.log(sorted);


function layer(size, offset) {
    let str = ' '.repeat(offset);
    str += '*'.repeat(size * 2 - 1);
    return str
}

function uniqueRandomArray(max, offset = 0) {
    return randomArray(max * 2, max, offset, true, true);
}

function randomArray(size, max, offset = 0, random = true, unique = false) {
    let ar = new Array(size);
    for (let i = 0; i < size; i++) {
        ar[i] = ((random) ? Math.floor(Math.random() * max) : i) + offset;
    }
    if (unique)
        ar = Array.from(new Set(ar));

    return ar;
}