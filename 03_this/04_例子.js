/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-09 09:46:27
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-09 09:55:22
 * @FilePath: /javascriptCode/03_this/04_例子.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var name = "window";
function Person(name) {
  this.name = name;
  this.obj = {
    name: "obj",
    foo1: function () {
      return function () {
        console.log(this.name);
      };
    },
    foo2: function () {
      return () => {
        console.log(this.name);
      };
    },
  };
}
var person1 = new Person("person1");
var person2 = new Person("person2");

person1.obj.foo1()(); //window
person1.obj.foo1.call(person2)(); //window
person1.obj.foo1().call(person2); //person2

person1.obj.foo2()(); //obj
person1.obj.foo2.call(person2)(); //person2
person1.obj.foo2().call(person2); //obj
