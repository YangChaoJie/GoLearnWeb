// 参数扩展
// 1. 收集剩余的参数 （必须是最后一个）
// 2. 默认参数

function show(a, b, ...args) {
    console.log(a)
    console.log(b)
    console.log(args)
}
console.log(show(1, 2, 3, 4, 5))

// 展开一个数组


let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
console.log("==", arr3)

function show2(a, b = 5, c = 8) {
    console.log(a, b, c)
}
show2(88, 12)
// 数组的深拷贝
// ES6 新语法
var array = [1, 2, 3, 4, 5]
var [...array2] = array
array[2] = 5
console.log(array, array2)