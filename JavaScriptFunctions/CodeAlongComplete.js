function drawBunny() {
    console.log(`
 () ()
>(^ ^)<
 (___)`);
}

function drawChefHat() {
    console.log(`
 _____
(     )
 |   |
 |___|`)
}

function repeat(fn, numTimes) {
    for (let i = 0; i < numTimes; i++) {
        fn();
    }
}

repeat(drawChefHat, 3);
repeat(drawBunny, 2)