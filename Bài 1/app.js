const a = Number(prompt("Input a: "))
const b = Number(prompt("Input b: "))

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

const prime_numbers = []
for (let n = a; n <= b; n++) {
    if (isPrime(n)) {
        prime_numbers.push(n);
    }
}

document.getElementById("prime-numbers").textContent = "Các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + prime_numbers;
document.getElementById("output").textContent = "Output = " + prime_numbers.reduce((a, b) => a + b, 0);
