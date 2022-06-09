/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-08 17:25:11
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-08 17:28:10
 * @FilePath: /javascriptCode/03_this/01_例子.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 1
var name = "window";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  },
};
function sayName() {
  var sss = person.sayName;
  sss(); //window
  person.sayName(); //person
  person.sayName(); //person
  (b = person.sayName)(); //window
}
sayName();
