for (var i = 0; i < 5; i++) {
  debugger;
  setTimeout(() => {
    console.log(i++);
  }, 200);
}
debugger;
console.log(i);

// 作用域变量提升
//
// --------------------------------------------
console.log(a); //undefined

var a = "hey I am now hoisting";

// 看起来，我们在a被声明前调用a，没有报错，反而是返回一个undefined值，
// 原因是：a其实已经在调用前被声明了，只是没有被初始化。
// JavaScript会把作用域里的所有变量和函数提到函数的顶部声明，相当于：

var b;
console.log(b); //undefined

b = "hey I am now hoisting";
// JavaScript会使用undefined缺省值创建变量a，
// 注意，事实上浏览器并没有把声明语句放到作用域的顶部，
// 在编译阶段，控制流进入域，该域所有的变量和函数的声明先进入内存，文中代码的相对位置不会变动的。

// 由此可以知道，变量提升指的是变量声明的提升，不会提升变量的初始化和赋值。
// --------------------------------------------

console.log(c); //Uncaught ReferenceError: a is not defined

let c = "hey I am now hoisting";


let d = "hey I am outside";
if (true) {
  console.log(d); //Uncaught ReferenceError: a is not defined
  let d = "hey I am inside";
}