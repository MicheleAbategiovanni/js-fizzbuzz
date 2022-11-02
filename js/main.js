const containerEl = document.querySelector( ".container-fizz" );

for (let i = 1; i <= 100; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) {

        containerEl.innerHTML += `<div class="card-fizz bg-danger">FIZZBUZZ</div>`;

        console.log("FizzBuzz");

    } else if (i % 5 === 0) {

        containerEl.innerHTML += `<div class="card-fizz bg-fz-buzz">BUZZ</div>`;

        console.log("Buzz")

    } else if (i % 3 === 0) {
        containerEl.innerHTML += `<div class="card-fizz bg-fz-secondary">FIZZ</div>`;

        console.log("Fizz")

    } else {
        containerEl.innerHTML += `<div class="card-fizz bg-fz-primary">${ i }</div>`;

        console.log(i)

    }

}