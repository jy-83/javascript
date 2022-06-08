/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-08 13:36:15
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-08 15:20:05
 * @FilePath: /javascriptCode/01_learn_scope/06_面试题.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// var n = 100;
// 1.
// function foo() {
//   n = 200;
// }
// foo();
// console.log(n); //200

// function foo() {
//   console.log(n); //undefined
//   var n = 200;
//   console.log(n); //200
// }

// 2
// var n = 100;
// foo();

// 3
// var n = 100;
// function foo1() {
//   console.log(n); //100
// }
// function foo2() {
//   var n = 200;
//   console.log(n); //200
//   foo1();
// }

// foo2();
// console.log(n); //100

// 4
// var a = 100;
// function foo() {
//   console.log(a);
//   return;
//   var a = 200;
// }

// foo();

// 5

function foo() {
  var a = (b = 100);
}

foo();

console.log(a); //报错
console.log(b); //100
