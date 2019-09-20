The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest `prime` factor of the given number?

```js
unction largestPrimeFactorOf(number) {
    let factor = 2;

    while (factor <= number) {
        if (number % factor === 0) {
            number /= factor;
        } else {
            factor++;
        }
    }

    return factor;
}
