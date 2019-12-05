let arr = [4, 7, 4, 3, 7, 9, 56, 34, 3, 6, 8, 87, 5, 34, 5, 7, 9];
let val = [];
let val1 = arr.forEach((ele) => {
    if (ele % 2 === 0) {
        val.push(ele)
    }
})

let val2 =
    arr.map((ele) => {
        if ((ele % 2) === 0) {
            return true
        }
        else {
            return false
        }
    })


let val3 =
    arr.filter((ele) => {
        if (ele % 2 === 0) {
            return ele;
        }
    })


let val4 =
    arr.reduce((a, b) => {
        return a + b

    })
let sum = 0;
let val5 = arr.forEach((ele) => {
    sum += ele
})


console.log('arr', arr);
console.log('val', val);
console.log('val2', val2);
console.log('val3', val3);
console.log('val4', val4);
console.log('sum', sum);
