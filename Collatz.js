for (let i = 1; i < 1000; i++)
    console.log ( `${i} ${collatz(i)}`);

function collatz(n) {
    let counter = 0;
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = (n * 3) + 1;
        }
        counter++;
    }
    return counter;
}