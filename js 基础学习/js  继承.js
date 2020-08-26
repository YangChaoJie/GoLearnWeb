function SuperType() {
    this.property = true
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SuberType() {
    this.subproperty = false;
}

// 继承了SuperType
SuberType.prototype = new SuperType();
SuberType.prototype.getSubValue = function () {
    return this.subproperty
}

var instance = new SuberType()
console.log(instance.getSuperValue());

// 实现的本质是重写原型对象，代之以一个新类型的实例
// intance.constructor 现在指向的是SuperType ,原来的Subtype.prototype 中的 constructor 被重写的缘故

// 所有函数的默认原型都是 Object 的实例

// 原型和实例 的关系
console.log(instance instanceof Object)
console.log(instance instanceof SuperType);

// 给原型的添加方法的代码一定要放在替换原型的语句之后

// 4. 原型链的问题
// 在创建子类型的实例时，不能向超类型的构造函数中传递参数。

// 借用构造函数

function SuperType0(name) {
    this.colors = ["red", "blue", "green"]
    this.name = name
}

function SuberType0() {
    // 继承了 SuperType
    SuperType0.call(this, "yang");
    this.age = 27
}
var instance1 = new SuberType0()
instance1.colors.push("black")
console.log(instance1.colors);

var instance2 = new SuberType0()
console.log(instance2.colors);

console.log(instance1.name);

console.log(instance2.age);
// 借用构造函数问题， 可复用性查


// 组合继承： 有时候也叫为经典继承，指的是将原型链和借用构造函数的技术组合到一块

function SuperType1(name) {
    this.name = name
    this.colors = ["red", "bule"]
}

SuperType1.prototype.sayName = function () {
    console.log(this.name);
}

function SuberType1(name, age) {
    // 继承属性
    SuperType1.call(this, name);
    this.age = age;
}
// 继承方法
SuberType1.prototype = new SuperType1()
SuberType1.prototype.constructor = SuberType1

SuberType1.prototype.sayAge = function () {
    console.log(this.age)
}

var instance3 = new SuberType1("yang", 27)
instance3.colors.push("black")
console.log(instance3.colors);

instance3.sayName()
instance3.sayAge()

var instance4 = new SuberType1("yang0", 27)
instance4.colors.push("black")
console.log(instance4.colors);

instance4.sayName()
instance4.sayAge()


// 组合继承避免了原型链和借用构造函数的缺陷，融合了他们的优点，成为了 js 最常用的继承当时。 而且，instanceof 和 isPrototypeOf()也能够用于识别基于组合继承创建的对象。


// 四， 原型式 继承

// 在内部创建一盒临时性的构造函数
function object(o) {
    function F() { }
    F.prototype = o
    return new F()
}

// ES 5 通过新增 Object.create() 规范化了原型式继承

var person = {
    name: "yang",
    friends: ["Shelby", "Court", "Van"]
}

var anotherPerson = Object.create(person, {
    name: {
        value: "yang0"
    }
})

console.log(anotherPerson.name);

// 寄生式 继承


// 组合式继承 都会调用两次 超类的构造函数

// 组合继承问题的解决方法

function inheritPrototype(subType, superType) {
    var prototype = Object(superType.prototype) // 创建对象
    prototype.constructor = subType // 增强对象
    subType.prototype = prototype // 指定对象
}

var msg = 'hello';
for (var i = 0; i < 10; i++) {
    var msg = 'hello' + i * 2 + i;
}

console.log(msg)


var val = 12;
function fun1() {
    console.log(val);
    var val = 20; // var val; val = 20
    console.log(val);
}
fun1();