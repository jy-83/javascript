/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-08 10:43:56
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-08 10:44:00
 * @FilePath: /javascriptCode/01_learn_scope/03_全局代码执行顺序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var name = "why";

foo(123);
function foo(num) {
  console.log(m);
  var m = 10;
  var n = 20;

  console.log(name);
}

console.log(aaaaaaa);
