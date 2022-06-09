/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-08 16:04:53
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-08 16:26:09
 * @FilePath: /javascriptCode/02_闭包/02_内存泄漏.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function createArray() {
  var arr = new Array(1024 * 1024).fill(1);
  return function () {
    console.log(arr);
  };
}
var arrFns = [];

for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrFns.push(createArray());
  }, 100 * i);
}

setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      arrFns.pop();
    }, 100 * i);
  }
}, 10000);
