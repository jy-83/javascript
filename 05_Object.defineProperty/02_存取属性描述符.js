/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-09 13:42:49
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-09 14:07:57
 * @FilePath: /javascriptCode/05_Object.defineProperty/02_存取属性描述符.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var obj = {
  _name: "测试",
};

var obj1 = {
  name: "蒋轶",
  _age: 26,
  get age() {
    return this._age;
  },
  set age(value) {
    this._age = value;
  },
};

Object.defineProperty(obj, "name", {
  enumerable: true,
  configurable: true,
  get: function () {
    // console.log(this.name);
    console.log(this);
    return this._name;
  },
  set: function (value) {
    this._name = value;
  },
});
console.log(obj.name);
obj1.age = 27;
console.log(obj1);
