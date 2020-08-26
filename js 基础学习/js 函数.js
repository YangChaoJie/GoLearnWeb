sayHi();
function sayHi() {
    console.log("hi");

}
// function 后面没有标识符，称为匿名函数
// 闭包是指有权限访问另一个函数作用域的变量的函数

function createComparisonFunction(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1
        } else if (value1 > value2) {
            return 1
        } else {
            return 0
        }
    }
}
// 创建函数 
var compareNames = createComparisonFunction("name")

// 调用函数
var reslut = compareNames({ name: 'yang' }, { name: 'yang0' })

// 解除 对匿名函数的引用（以便释放内存）
compareNames = null;
console.log(reslut);

// 由于闭包会携带包含她的函数的作用域，因此会比其他函数占用更多内存
// 即闭包只能取得包含函数中任何变量的最后一个值。
// ，把外部作用域中的 this 对象保存在一个闭包能够访问到的变量里，就可以让闭包访问该对象了

// 防止内存泄露
function assignHandle() {
    var element = document.getElementById("someElemnt")
    var id = element.id
    element.onclick = function () {
        console.log(id);
    };
    element = null;
}

// js 没有块状作用域 
function outputNumbers(count) {
    for (var i = 0; i < count; i++) {

        console.log('i :>> ', i);
    }
    console.log('i :>>--- ', i);

    var i;
    console.log('i :>>--- ', i);
}

outputNumbers(5)

    (function () {
        // 块状作用域
    })()
// 以上代码立即调用了一个匿名函数。

var someFunction = function () {
    // 这里是块状作用域
};
someFunction()

// function outputNumbers0(count) {
//     (function () {
//         for (var i = 0; i < count; i++) {
//             console.log(i);
//         }
//     })()
//     // console.log(i); // 
// }
// function outputNumbers0(count) {
//     (function () {
//         for (var i = 0; i < count; i++) {
//             console.log(i);
//         }
//     })();
//     console.log(i); //导致一个错误！
// }
// outputNumbers0(2);  

// 在匿名函数中定义任何变量，都会在执行结束时被销毁