/**
 * 原型模式：通过new关键字创建对象，并且可以传递参数，初始化对象，调用对象的方法，访问对象的属性。
 * 适用范围：同一个对象，多次出现。（构造器模式的升级版）
 * 缺点是：1. 函数不能复用。
 *         2.重复new创建，比较繁琐。
 * 优点是：1.减少内存占用。
 * @param {*} name 
 * @param {*} age 
 */
function Employee(name, age) {
    this.name = name;
    this.age = age;
}

// 挂载在原型上
Employee.prototype.say = function() {
    console.log(this.name+"-"+this.age);
}

let emp = new Employee("Kim", 30);
let emp2 = new Employee("Lee", 40);

emp.say(); // Kim-30
emp2.say(); // Lee-40
console.log(emp, emp2); // Employee { name: 'Kim', age: 30 } Employee { name: 'Lee', age: 40 }
 