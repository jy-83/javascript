/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-06-09 10:26:56
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-09 10:32:41
 * @FilePath: /javascriptCode/04_apply_call_bind/01.基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var message = "window";
function foo(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.message);
}
foo("蒋轶", 26); //蒋轶,26,window
var obj = {
  message: "obj",
};
foo.call(obj, "周正雨", 25); //周正雨,25,obj

foo.apply(obj, ["周正雨", 25]); //周正雨,25,obj

var bar = foo.bind(obj);
bar("周正雨", 25); //周正雨,25,obj
