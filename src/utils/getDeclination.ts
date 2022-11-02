export const getDeclination = (number: number, decl: Array<string>) => {
    number = Math.abs(number) % 100;
    let newNumber = number % 10;

    if (number > 10 && number < 20) {
        return decl[2];
    }
    if (newNumber > 1 && newNumber < 5) {
        return decl[1];
    }
    if (newNumber === 1) {
        return decl[0];
    }
    return decl[2]
};
