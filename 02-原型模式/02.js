/**
 * ES6的类模式构造器,实例化对象，是构造器模式+原型模式组成的升级版
 */
class Employee {
    // 构造函数的属性放在这个constructor函数
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // 公共方法可以写在这里
    say() {
        console.log(this.name+"-"+this.age);
    }
}

let e1 = new Employee('小明', 18); 
console.log(e1); // Employee { name: '小明', age: 18 }
e1.say(); // 小明-18