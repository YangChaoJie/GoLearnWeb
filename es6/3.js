var a = 1
var a = 2
console.log(a)

// var 没有块级作用域
// let 不允许 重复声明
// IE6(ES2015) - IE10+ 、 chrome、Firefox、移动端、NodeJs

// 编译、转换
//  在线转换
// 提前编译
// babel == browser.js
if (true) {
    var b = 12
}
console.log(b)

const c = 1
// const c = 2
let d = 2
d = 3

if (true) {
    let f = 12
}
// console.log(f)

