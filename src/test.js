var gameArr = [
    [2, 0, 3, 0, 0, 8, 6, 0, 7],
    [1, 4, 0, 7, 2, 6, 0, 0, 9],
    [5, 0, 7, 1, 3, 9, 4, 2, 8],
    [0, 2, 5, 0, 8, 1, 9, 0, 4],
    [4, 1, 0, 9, 0, 3, 2, 0, 5],
    [0, 7, 9, 2, 0, 5, 0, 3, 6],
    [6, 0, 2, 0, 1, 0, 0, 9, 3],
    [7, 0, 0, 5, 0, 2, 0, 0, 1],
    [0, 8, 1, 3, 6, 7, 0, 4, 0]
];
const str = '123456789';


var array = [[], [], []]
var current = 0
for (var i = 0; i < str.length; i++) {
    if (array[current].length < 3) {
        array[current].push(parseInt(str.charAt(i)))
    } else {
        current = current += 1
        array[current].push(parseInt(str.charAt(i)))
    }
}

console.log(gameArr)
console.log(array)