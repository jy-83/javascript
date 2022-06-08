/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-08 11:36:00
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-08 11:36:05
 * @FilePath: /javascriptCode/01_learn_scope/05_全局代码执行顺序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var message = "Hello Global";

function foo() {
  console.log(message);
}

function bar() {
  var message = "Hello Bar";
  foo();
}

bar();
