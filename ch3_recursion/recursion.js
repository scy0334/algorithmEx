const countdown = (num) => {
    if (num === 1) {
        return num;
    } else {
        return num * countdown(num - 1);
    }
}

const greet2 = (name) => {
    console.log(`how are you, ${name}?`)
}

const buy = () => {
    console.log("ok bye!")
}

const greet = (name) => {
    console.log(`hello, ${name}!`)
    greet2(name);
    buy();
}