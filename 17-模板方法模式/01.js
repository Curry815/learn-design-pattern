/**
 * 模版方法模式：模板方法模式由两部分组成，第一部分是抽象父类，第二部分是具体的实现子类。
 *              通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺序。
 *              子类通过继承这个抽象类，也继承了整个算结构，并且可以选择重写父类的方法。
 * 
 * 模板方法模式时一种典型的通过封装变化提高系统扩展性的设计模式。
 * 运用了模板方法模式的程序中，子类方法种类和执行顺序都是不变的，但是子类的方法具体实现则是可变的。
 * 父类是个模板，子类可以添加，就增加了不同的功能。
 * 
 * 例子：烧水的例子=>冲柠檬？冲咖啡？冲奶茶？
 */

var Container = function (param) {
    var render = function (list) {
        console.log("render-list", list) 
    }
    var getData = param.getData || function () {
        throw new Error('必须传递getData方法');
    }

    var F = function () { }; //对象 类
    F.prototype.init = async function () {
        let list = await getData()
        render(list)
    };
    return F;
}

// 传对象
var Nowplaying = Container({
    getData() {
        console.log("nowplaying")
        return [1, 2, 3]
    }
})
var nowplaying = new Nowplaying();
nowplaying.init();


var Comingsoon = Container({
    getData() {
        console.log("comingsoon")
        return [4, 5, 6]
    }
})
var comingsoon = new Comingsoon();
comingsoon.init();