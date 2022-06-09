/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-09 09:35:14
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-09 09:40:30
 * @FilePath: /javascriptCode/03_this/03_例子.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var name = "window";
function Person(name) {
  this.name = name;
  this.foo1 = function () {
    console.log(this.name);
  };
  this.foo2 = () => console.log(this.name);
  this.foo3 = function () {
    return function () {
      console.log(this.name);
    };
  };
  this.foo4 = function () {
    return () => {
      console.log(this.name);
    };
  };
}

var person1 = new Person("person1");
var person2 = new Person("person2");

person1.foo1();//person1
person1.foo1.call(person2);//person2
person1.foo2();//person1
person1.foo2.call(person2);//person1
person1.foo3()();//window
person1.foo3.call(person2)();//window
person1.foo3().call(person2);//person2
person1.foo4()();//person1
person1.foo4.call(person2)();//person2
person1.foo4().call(person2);//person1
