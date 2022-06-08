/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-08 10:03:09
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-08 10:26:22
 * @FilePath: /javascriptCode/01_learn_scope/02_全局代码执行顺序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var name = "why";

console.log(num1);

var num1 = 20;
var num2 = 30;
var result = num1 + num2;

console.log(result);

// var Global = {
//   String: "类",
//   Date: "类",
//   ...,
//   num1,
//   num2,
//   result
// };
