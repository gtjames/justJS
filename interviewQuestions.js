let howHigh = 4;
let limbs = 'x';
for ( let layer = 0; layer < howHigh; layer++) {        
    console.log("-".repeat(howHigh-layer-1) + limbs);
    limbs += 'xx';
}

// this tree is 5 tall
//0 1  ----x        4 spaces 1 x
//1 3  ---xxx       3 spaces 3 x  
//2 5  --xxxxx      2 space  5 x
//3 7  -xxxxxxx     1 spaces 7 x
//4 9  xxxxxxxxx    0 spaces 9 x

// this tree is 3 tall
// 1  --x
// 3  -xxx
// 5  xxxxx 

// --------x
// -------xxx
// ------xxxxx
// -----xxxxxxx
// ----xxxxxxxxx
// ---xxxxxxxxxxx
// --xxxxxxxxxxxxx
// -xxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxx