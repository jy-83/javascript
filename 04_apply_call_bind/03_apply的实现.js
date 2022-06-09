/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-09 10:43:10
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-09 10:53:26
 * @FilePath: /javascriptCode/04_apply_call_bind/03_apply的实现.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Function.prototype.jyapply = function (thisArg, arg) {
  var fn = this;
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  thisArg.fn = fn;
  var result;
  if (arg) {
    result = thisArg.fn(...arg);
  } else {
    result = thisArg.fn();
  }
  delete thisArg.fn;
  return result;
};
function foo() {
  console.log(this);
}
var obj = {
  name: "蒋轶",
};
foo.jyapply(obj);
var num = 1;
var obj1 = {
  num: 100,
};
function add(num1, num2) {
  return num1 + num2 + this.num;
}
console.log(add(1, 2));
console.log(add.apply(obj1, [1, 2]));
