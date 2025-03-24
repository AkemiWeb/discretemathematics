function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function primeFactors(n) {
    let factors = [];
    let divisor = 2;
    while (divisor <= Math.sqrt(n)) {
        while (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        }
        divisor++;
    }
    if (n > 1) factors.push(n);
    return factors;
}

function findDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) divisors.push(i);
    }
    return divisors;
}

function primeNumbersUpTo(n) {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }
    return primes;
}

function mod(a, b) {
    return a % b;
}

function performCalculations() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const gcdResult = gcd(a, b);
    const lcmResult = lcm(a, b);
    const primeFactorsA = primeFactors(a);
    const primeFactorsB = primeFactors(b);
    const divisorsA = findDivisors(a);
    const divisorsB = findDivisors(b);
    const primesUpToA = primeNumbersUpTo(a);
    const primesUpToB = primeNumbersUpTo(b);
    const modResult = mod(a, b);

    let result = `
        <h3>Результати обчислень:</h3>
        <p>НСК(a, b): ${lcmResult}</p>
        <p>НСД(a, b): ${gcdResult}</p>
        <p>Прості множники a: ${primeFactorsA.join(', ')}</p>
        <p>Прості множники b: ${primeFactorsB.join(', ')}</p>
        <p>Дільники a: ${divisorsA.join(', ')}</p>
        <p>Дільники b: ${divisorsB.join(', ')}</p>
        <br>
        <p>Прості числа до a: ${primesUpToA.join(', ')}</p>
        <br>
        <p>Прості числа до b: ${primesUpToB.join(', ')}</p>
        <br>
        <p>Модуль a і b: ${modResult}</p>
    `;

    document.getElementById("result").innerHTML = result;
}