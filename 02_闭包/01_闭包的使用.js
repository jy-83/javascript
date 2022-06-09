/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-08 15:59:35
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-08 16:39:13
 * @FilePath: /javascriptCode/02_闭包/01_闭包的使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// function foo() {
//   var a = 10;
//   function bar() {
//     return a * 10;
//   }
//   return bar;
// }

// var fn = foo();
// console.log(fn());
function foo() {
  var a = "测试";
  var b = "哈哈";
  return function () {
    // debugger;
    console.log(a);
  };
}
var fn = foo();
fn();
