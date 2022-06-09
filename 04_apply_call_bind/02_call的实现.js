/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-09 10:32:57
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-09 10:41:39
 * @FilePath: /javascriptCode/04_apply_call_bind/02_apply的实现.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Function.prototype.jycall = function (thisArg, ...arg) {
  var fn = this;
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  thisArg.fn = fn;
  var result = thisArg.fn(...arg);
  delete thisArg.fn;
  return result;
};
function foo() {
  console.log(this);
}
var obj = {
  name: "蒋轶",
};
foo.jycall(obj);
