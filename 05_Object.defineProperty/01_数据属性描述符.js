/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-09 13:24:14
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-09 13:40:29
 * @FilePath: /javascriptCode/05_Object.defineProperty/01_数据属性描述符.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

var obj = new Object();
Object.defineProperty(obj, "name", {
  writable: true, //是否可以修改
  configurable: true, //是否可以删除
  enumerable: true, //是否可以获取到key通过for in 和Object.keys
  value: "蒋轶",
});
obj.name = "周正雨";
console.log(Object.keys(obj));
for (let i in obj) {
  console.log(i);
}
// delete obj.name;
console.log(obj);
