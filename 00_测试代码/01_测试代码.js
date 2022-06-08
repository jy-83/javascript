/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-08 09:39:54
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-08 09:51:54
 * @FilePath: /javascriptCode/00_测试代码/01_测试代码.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function foo(el) {
  console.log(el, this.id);
}
var obj = {
  id: 111,
};

// var num = [1, 2, 3];

[1, 2, 3].forEach((item) => {
  console.log(item);
});
