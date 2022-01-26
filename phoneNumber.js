function makePhoneNumber(arr) {
    let number = []
    for (let i = 0; i < 11; i++) {
        const index = Math.floor(Math.random() * arr.length);
        number.push(arr[index])

    }
    return (`(${number[0]}${number[1]}${number[2]}) ${number[3]}${number[4]}${number[5]}-${number[6]}${number[7]}${number[8]}${number[9]}`)
};

console.log(makePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]))