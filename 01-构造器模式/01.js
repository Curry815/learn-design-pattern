/**
 * 构造器模式：通过new关键字创建对象，并且可以传递参数，初始化对象，调用对象的方法，访问对象的属性。
 * 适用范围：同一个对象，多次出现。
 * 缺点是：1.构造器函数中不能使用箭头函数，否则this指向window；
 *        2.构造器中的方法和属性每次new一次都要开辟新的存储空间，造成内存浪费。
 * @param {*} name 
 * @param {*} age 
 */
function Employee(name, age) {
    this.name = name;
    this.age = age;

    this.say = function() {
        console.log(this.name+"-"+this.age);
    }
}

let emp = new Employee("Kim", 30);
let emp2 = new Employee("Lee", 40);

emp.say(); // Kim-30
console.log(emp, emp2); // Employee { name: 'Kim', age: 30, say: [Function (anonymous)] } Employee { name: 'Lee', age: 40, say: [Function (anonymous)] }
 