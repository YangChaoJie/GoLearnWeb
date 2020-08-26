var myObject = {
    foo: "bar",
    func: function () {
        var self = this;  // this指的是 myObject
        console.log(this);
        console.log(typeof this)
        console.log(this instanceof Object)
        console.log(this.foo);
        console.log(self.foo);// 这里self 指的也是 this
        (function () {
            // console.log(this); // this 是指全局对象 // IIFE(立即执行函数表达式)中的this指向window。
            console.log(self); // self 值 myObject 
            // console.log(this.foo); // undefine
            // console.log(self.foo);
        }());
    }
};
myObject.func();

// 匿名函数具有全局作用域


// instanceof  运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上


var a = 4399 < 0 || typeof (4399 + '')
console.log(a); // string

console.log(typeof (4399 + ''));
console.log(4399 > 0 || typeof (4399 + ''));

// 短路或  如果第一项是true 则结果为true 如果第一项为false 结果 为第二项（第二项不做计算直接返回）


var x = 10
function cals(myNum) {
    return x + myNum
}

console.log(cals(7))

var str = "Hellllo world";
str = str.replace(/(l)\1/g, '$1');
let myRe = /(l)/g
var myArray = myRe.exec("Hellllo world")
console.log(myArray)
console.log(str)

// 将 K 中所有的属性的值转化为 T 类型
// type Type1 = Record<Number, String | Number>

var F = function () { };
Object.prototype.a = function () { };
Function.prototype.b = function () { };
var f = new F();

console.log(f.a);
console.log(f.b)

setTimeout
