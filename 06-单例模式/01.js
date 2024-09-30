/**
 * 单例模式：1. 保证一个类仅有一个实例，并提供一个访问它的全局访问点。
 *          2. 主要解决一个全局使用的类频繁地创建和销毁，占用内存。
 *          3. 避免对资源的多重占用。
 * 适用范围：初始化阶段第一次创建新的实例对象，之后每次获取该类的实例时，都返回第一次所创建的实例。
 * ES5: 使用闭包函数 实现单例模式
 * ES6: 使用Symbol 实现单例模式
 */

var Singleton = (function () {
    var instance;

    function User(name, age) {
        this.name = name;
        this.age = age;
    }

    return function (name, age) {
        if (!instance) {
            // 创建实例
            instance = new User(name, age);
        }
        return instance;
    }
})();
