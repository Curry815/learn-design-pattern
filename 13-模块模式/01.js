/**
 * 模块模式：模块化模式最初被定义为在传统软件工程中为类提供私有和公共封装的一种方法。
            能够使一个单独的对象拥有公共/私有的方法和变量，从而屏蔽来自全局作用域的特殊部分。
            这可以减少我们的函数名与在页面中其他脚本区域内定义的函数名冲突的可能性。
    ES5: 闭包
    ES6: 模块化
 */

// class Person {
//     #name = '张三';
// }
// console.log(new Person().#name); // 报错，私有属性不能被访问


const obj = (function () {
    var count = 0;
    return {
        increse() {
            return ++count;
        },

        reset: function () {
            count = 0;
        },

        decrese() {
            return --count;
        }
    }
})();


