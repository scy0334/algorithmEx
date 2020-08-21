const sumForLoop = (arr) => {
    let total = 0;

    for (i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

const sumRecursion = (...args) => {
    let newArr = [...args];
    const head = newArr[0]
    const tail = newArr.slice(1);
    if (args.length < 1) {
        return 0;
    }
    return head + sumRecursion(...tail)
}

const lengthRecursion = (arr) => {
    const head = arr[0];
    const tail = arr.slice(1);
    if (arr.length === 0) {
        return 0;
    }
    return 1 + lengthRecursion(tail);
}

const findMaxRecursion = (arr) => {
    const head = arr[0]
    const tail = arr.slice(1);
    if (arr.length === 1) {
        return arr[0];
    }
    if (head > findMaxRecursion(tail)) {
        return head;
    } else {
        return findMaxRecursion(tail);
    }
}