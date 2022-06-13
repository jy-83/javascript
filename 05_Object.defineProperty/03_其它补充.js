/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-09 14:09:53
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-09 14:17:01
 * @FilePath: /javascriptCode/05_Object.defineProperty/03_其它补充.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var obj = {
  _age: 26,
};
//创建多个属性
Object.defineProperties(obj, {
  name: {
    value: "蒋轶",
  },
  age: {
    get: function () {
      return this._age;
    },
    set: function (value) {
      this._age = value;
    },
  },
});
console.log(obj);

//获取描述符
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
console.log(Object.getOwnPropertyDescriptors(obj));
