let arr = [
    [1, 2],
    [1, 2],
    [2, 4]
];
console.log(doExchange(arr));
// let results = [];

// doExchange(arr, 0);
// console.log(results);
// function doExchange(arr, index) {
//     let result = new Array();
//     for (var i = 0; i < arr[index].length; i++) {
//         result[index] = arr[index][i];
//         if (index != arr.length - 1) {
//             doExchange(arr, index + 1);
//         } else {
//             console.log('result---', result, '--11', arr[index][i])
//             results.push(result);
//             console.log('results---', results)
//         }
//     }
// }

//每次运算都是联合前两个数组，这样逐步递归调用
// function gerArray(dArray) {
//     var len = dArray.length;
//     if (len > 1) {
//         var len1 = dArray[0].length, len2 = dArray[1].length, newArray = [], tempArray = [];
//         for (var i = 0; i < len1; i++) {
//             for (var j = 0; j < len2; j++) {
//                 newArray.push(dArray[0][i] + "," + dArray[1][j]);
//                 console.log('newArray===', newArray);
//             };
//         };
//         tempArray.push(newArray);
//         if (len > 2) {
//             for (var i = 2; i < len; i++) {
//                 //已经形成的新数组和剩下的数组
//                 tempArray.push(dArray[i]);
//             }
//         };
//         return gerArray(tempArray);//递归重复调用
//     } else {
//         return dArray[0];//len<=1是递归的出口
//     }
// }

/*返回组合的数组*/
function doExchange(arr) {
    var len = arr.length;
    // 当数组大于等于2个的时候
    if (len >= 2) {
        // 第一个数组的长度
        var len1 = arr[0].length;
        // 第二个数组的长度
        var len2 = arr[1].length;
        // 2个数组产生的组合数
        var lenBoth = len1 * len2;
        //  申明一个新数组
        var items = new Array(lenBoth);
        // 申明新数组的索引
        var index = 0;
        for (var i = 0; i < len1; i++) {
            for (var j = 0; j < len2; j++) {
                if (arr[0][i] instanceof Array) {
                    items[index] = arr[0][i].concat(arr[1][j]);
                } else {
                    items[index] = [arr[0][i]].concat(arr[1][j]);
                }
                index++;
            }
        }
        var newArr = new Array(len - 1);
        for (var i = 2; i < arr.length; i++) {
            newArr[i - 1] = arr[i];
        }
        newArr[0] = items;
        return doExchange(newArr);
    } else {
        return arr[0];
    }
}
