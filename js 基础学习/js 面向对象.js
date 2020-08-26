var person = {};

Object.defineProperty(person, "name", {
    writable: false,
    value: "yang"
})
console.log(person.name); // ""
person.name = "Greg"
console.log(person.name);
// configurable 设置为false, 表示不能从对象中删除属性
Object.defineProperty(person, "name", {
    configurable: false,
    value: "yang"
})
delete person.name
console.log(person.name);

// geter setter
var book = {
    _year: 2004,
    edition: 1
}
Object.defineProperty(book, "year", {
    get: function () {
        return this._year;
    },
    set: function (newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
})
book.year = 2005;
console.log(book.edition);

// ECMAScript5  的 Objec.getOwnPropertyDescriptor(), 可以获取取得给定属性的描述符 返回的对象属性有 congfigurable、enumerable、get、set

var book0 = {};

Object.defineProperties(book0, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004
            }
        }
    }
})

var descriptor = Object.getOwnPropertyDescriptor(book0, "year");
console.log(descriptor);
console.log(typeof descriptor.get);

// 自定义构造函数
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    }
}
// 当做构造函数使用
var person1 = new Person("yang", 11, "iOS Engineer")
person1.sayName(); // yang
// 作为普通函数调用
Person("yang0", 11, "Vue Engineer")
// window.sayName(); // yang0
// 在另一个对象的作用中调用
var o = new Object();
Person.call(o, "yang1", 27, "Doctor");
o.sayName(); // yang1

// 原型模式
/**我们创建的每个函数都有一个 prototype 原型属性，这个属性是一个指针，指向一个对象， 这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法
 * 
 * 
 */
function Person0() {

}

Person0.prototype.name = "yang"
Person0.prototype.age = 29
Person0.prototype.job = "Software Engineer"
Person0.prototype.sName = function () {
    console.log(this.name);
}

var person11 = new Person0()
var person22 = new Person0()

console.log(person11.sayName == person22.sayName); // true

/**
 *无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个 prototype
属性，这个属性指向函数的原型对象。在默认情况下，所有原型对象都会自动获得一个 constructor
（构造函数）属性，这个属性包含一个指向 prototype 属性所在函数的指针。就拿前面的例子来说，
Person.prototype. constructor 指向 Person。而通过这个构造函数，我们还可继续为原型对象
添加其他属性和方法。
 */

console.log(Person0.prototype.isPrototypeOf(person11)); // true
console.log(Person0.prototype.isPrototypeOf(person22)); // true
console.log(Object.getPrototypeOf(person11).name);
person11.name = "yang11"
//使用 hasOwnProperty()方法可以检测一个属性是存在于实例中，还是存在于原型中。

console.log(person11.hasOwnProperty("name")); // true
console.log(person22.hasOwnProperty("name")); // false
