/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-09 10:56:32
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-09 11:08:33
 * @FilePath: /javascriptCode/04_apply_call_bind/04_bind的实现.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Function.prototype.jybind = function (thisArg, ...argArray) {
  var fn = this;
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  function proxyFn(...arg) {
    thisArg.fn = fn;
    var result = thisArg.fn(...argArray, ...arg);
    delete thisArg.fn;
    return result;
  }
  return proxyFn;
};
var num = 10;
function add(num1, num2, num3) {
  return num1 + num2 + num3 + this.num;
}

var obj = {
  num: 100,
};
console.log(add(1, 2, 3));
var bar = add.jybind(obj, 2);
console.log(bar(1, 2, 3));
