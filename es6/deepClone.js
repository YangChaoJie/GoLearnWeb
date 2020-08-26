Object.prototype.deepClone = function clone(object) {
    return JSON.parse(JSON.stringify(object))
}

Object.prototype.deepClone0 = function clone0(object) {
    var reslut = {};
    for (var key in object) {
        if (typeof object[key] === 'object') {
            reslut[key] = deepClone(object[key])
        } else {
            reslut[key] = object[key]
        }
    }
    return reslut
}

function test() {
    let a = {
        name: '121'
    }
    let b = a
    b.name = '123'
    console.log('a===', a, 'b===', b);

    let c = Object.deepClone(a)
    c.name = '456'
    console.log('a===', a, 'c===', c);

    let d = Object.deepClone0(a)
    d.name = '789'
    console.log('a===', a, 'd===', d);
}

test()