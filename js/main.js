

for (let i = 1; i <= 100; i++) {

    // STAMPA NUMERI DA 0 A 100 CONTROLLATO

    if ((i % 3 === 0) && (i % 5 === 0)) {

        console.log("FizzBuzz")

    } else if (i % 5 === 0) {

        console.log("Buzz")

    } else if (i % 3 === 0) {
        console.log("Fizz")

    } else {
        console.log(i)
    }

}