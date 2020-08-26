// js 变量 内存 作用域问题

// js 变量松散类型的本质，决定了它只是在特定时间 用于保存特定值的一个名字而已
/**
 * ECMAScript 变量 包含两种不同数据类型的值： 基本类型和引用类型值。
 * 基本类型值： 指的是简单的数据段， 引用类型： 可能有很多只组成的对象。
 * 引用类型的值是保存在内存中的对象。 js不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。 在操作对象时，实际上是在操作对象的引用而不是实际的对象。 为此，引用类型 是按照引用访问的。
 */

/**
 *  动态属性
 *  对于引用的值，我们可以为其添加属性和方法， 也可以改变删除其属性方法。
 */
var person = new Object()
person.name = "yang"
console.log(person.name) // "yang"

// 不能给基本类型的值添加属性
var name = "add"
name.age = 27
console.log(name.age) // undefined

// 变量复制
/**
 * 如果从一个变量想另一个变量复制基本类型的值，会在变量对象上创建一个新值，然后半该值复制到为新变量分配的位置上
 */
var num1 = 5;
var num2 = num1; // 5
// num2 与 num1 都是完全独立，这两个变量可以参与任何操作而不会影响

/**
 *当从一个变量向另一个变量复制引用类型的值时，同样也会将存储在变量对象中的值复制一份放到
    为新变量分配的空间中。不同的是，这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一
    个对象。复制操作结束后，两个变量实际上将引用同一个对象。因此，改变其中一个变量，就会影响另
    一个变量，
 */

var obj1 = new Object();
var obj2 = obj1;
obj1.name = "yang"
console.log(obj2.name) // "yang"
// 变量 obj1 保存了一个对象的新实例。然后，这个值被复制到了 obj2 中；换句话说，obj1
// 和 obj2 都指向同一个对象

// 3 传递参数
/**
 * ECMAScript 中所有函数的参数都是按值传递的。也就是说，把函数外部的值复制给函数内部的参
    数，就和把值从一个变量复制到另一个变量一样。
 */

var count = 20;
var result = addTen(count);
function addTen(count) {
    count += 1
}
console.log(result);
/**
 * 在这个函数内部，obj 和 person 引用的是同一个对象。换句话说，即
 * 使这个变量是按值传递的，obj 也会按引用来访问同一个对象。
 * @param {*} obj 
 */
function setName(obj) {
    obj.name = "yang1"
}

setName(person);
console.log(person.name)
/**
 * 有很多开发人员错误地认为：在局部作用域中修改的对象会在全局作用域中反映出来，就说明
    参数是按引用传递的。为了证明对象是按值传递的，
 */
function setName0(obj) {
    obj.name = "yang0"
    obj = new Object()
    obj.name = "Greg"
}
setName0(person)
console.log(person); // "yang0"
//，当在函数内部重写 obj 时，这
//个变量引用的就是一个局部对象了。而这个局部对象会在函数执行完毕后立即被销毁。

// 从逻辑上讲， null 值表示一个空对象指针，所以使用 typeOf 操作符检测 null 值会返回 “object”

var car = null;
console.log(typeof car);

// 关于 NaN not a  number
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN("10")); // false 可以转换 数值

console.log(isNaN("blue")); // true
console.log(isNaN(true)); // false 可以转换数值1


console.log(Number("hello world")); // NaN
console.log(Number("")); // 0
console.log(Number("0000011")) // 11
console.log(Number(true)); // 1

console.log(parseInt("10", 2)); // 2 (按照二进制解析)
console.log(parseInt("10", 8)); // 8 按照八进制 解析
console.log(parseInt("10", 10)) // 10 10进制解析
console.log(parseInt("10", 10)); // 16 16进制解析



// 作用域
/**
 * 执行环境 exection context
 * 当代码在一个环境中执行是，会创建变量对象的一个作用域链
 * 
 * 延长作用域链
 * try-catch 和with 语句
 * 
 * js 没有块状作用域
 * 
 */
if (true) {
    var color = "blue"
}
console.log(color)

/**
 * js 是一门具有垃圾回收 机制的编程语言
 *  离开作用域的值将被自动标记为 可以回收，将在 垃圾收集期间被删除
 * “标记清除” 是目前主流 的垃圾收集算法，主要思想是 个当前不使用的值加上标记。然后* 在回收其内存
 * 解除变量引用有助于 消除循环引用状态，和垃圾收集
 */