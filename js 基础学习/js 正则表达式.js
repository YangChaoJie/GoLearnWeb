// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

// var expression = / pattern/ flags

// pattern 部分可以是任何 简单或复杂的正则表达式， 可以包含字符类、限定符、分组、向前查找以及反向引用。
// 每个正则表达式都可带有一个或多个标志（flags）,可以标明正则表达式的行为


/**
 *  g: 表示全局（global） 模式，即 模式将被应用于所有字符串，而非发现第一个匹配 项 是立即停止
 *
 *  i: 表示不区分大小写 模式，即在确定匹配项时忽略模式与字符串的大小写
 *
 *  m: 表示多行 （multiline）模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。
 */

/**
 *  匹配字符串中 所有的 ”at“ 的实例
 */
var pattern1 = /at/g;
/**
 * 匹配第一个”bat“ 或 ”cat“,不区分大小写
 */
var pattern2 = /[bc]at/i;

// ( [ { \ ^ $ | ) ? * + .]}
// 与其他语言中的正则表达式类似，模式中使用 元字符都必须转义


//正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 RegExp 的 exec 和 test 方法, 以及 String 的 match、matchAll、replace、search 和 split 方法

// ^ 匹配 输入的开始。如果多行标志被设置为 tru,那么也匹配换行符后紧跟随的位置
// /^A/   // - Ane
// $ 匹配输入的结束。如果多行标志被设置为true,那么匹配换行符前的位置
// / t$ / // eat

// * 匹配前一个表达式 0次或多次。等价于 {0,}

// /bo*/  //会匹配 "A ghost boooooed" 中的 'booooo' 和 "A bird warbled" 中的 'b'，但是在 "A goat grunted" 中不会匹配任何内容。


/**
 *  + 匹配前面一个表达式 1 次或者多次。等价于 {1,}。
 */


/**
 *  ? 匹配前面一个表达式 0 次或者 1 次。等价于 {0,1}。
 */

/**
 * （小数点）默认匹配除换行符之外的任何单个字符。
 */


var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbbrdbsbzdbbbbd')

console.log(myArray);
console.log("The value of lastIndex is " + myRe.lastIndex);

/**
 *  \w 匹配一个单子字符 （字母、数字或者下划线）。等价于 [A-Za-z0-9_]
 */

/**
 *  \s 匹配一个空白字符
 */

var re = /(\w+)\s(\w+)/;
var str = 'John Smith'
var newStr = str.replace(re, "$2, $1")
console.log(newStr)


const camelizeRE = /-(\w)/g
// 转成驼峰的 方法 
function cacheStringFunction(str) {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
}
function ff(str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
}

let a = cacheStringFunction('aS-fad-FfM')
console.log(a);

const hyphenateRE = /\B([A-Z])/g

var myArray0 = hyphenateRE.exec("dayMy")
console.log(myArray0);

console.log(ff("dayMy"))