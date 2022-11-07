export const getRandomObject = (array: Array<any>) => {
    let value = Math.floor(Math.random() * array.length);
    return array[value];
};
