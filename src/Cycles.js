export function rangeSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

export function iterationCount(a) {
    let count = 0;
    while (a > 0.1) {
        a /= 2;
        count += 1;
    }
    return count;
}

export function symbolsReplace(message) {
    let result = '';
    let i = 0;

    if (message.length === 0) {
        return result;
    }

    do {
        result += (i + 1) % 3 === 0 ? '_' : message[i];
        i += 1;
    } while (i < message.length);

    return result;
}
