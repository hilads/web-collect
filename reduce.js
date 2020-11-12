let m = [{
        a: '一年级',
        b: '小红'
    },
    {
        a: '二年级',
        b: '小黑'
    },
    {
        a: '一年级',
        b: '小绿'
    },
    {
        a: '三年级',
        b: '小资'
    },
    {
        a: '二年级',
        b: '小冯'
    },
    {
        a: '四年级',
        b: 'tony'
    },
]
// 一
m.reduce(
    (arr, {
        a,
        b
    }) =>
    ((arr[a] || (arr[a] = [])).push(b), arr), {})
console.log(m);

// 二
m.reduce(
    (arr, {
        a,
        b
    }) => {
        (arr[a] ? arr[a] : arr[a] = []).push(b), arr
    }, {})
// 三
m.reduce(
    (arr, {
        a,
        b
    }) => {
        (arr[a] ? arr[a] : arr[a] = []).push(b)
        return arr;
    }, {})

    // 一年级: (2) ["小红", "小绿"]
    // 三年级: ["小资"]
    // 二年级: (2) ["小黑", "小冯"]
    // 四年级: ["tony"]
    // __proto__: Object

// 逗号操作符
function myFunc() {
    var x = 0;
    console.log((x += 1, x))
    return (x += 1, x); // the same of return ++x;

}