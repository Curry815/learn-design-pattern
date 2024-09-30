/**
 * 桥接模式：将抽象部分与它的实现部分分离，使它们都可以独立地变化。
 * 使用场景：一个类存在两个或多个独立变化的维度，且这两个维度都需要进行扩展。
 * 例子：车企 V6 V8 V12, 平台 A B C, 几个平台任意组合。
 * 优点：把抽象与实现隔离开，有助于独立地管理各组成部分。
 * 缺点：每使用一个桥接元素都要增加一次函数调用，这对应用程序的性能会有一些负面影响——提高了系统的复杂程度。
 */

function Aodi1(engine) {
    this.engine = engine;
}

Aodi1.prototype.platform = function() {
    console.log("aodi1 平台");
}

Aodi1.prototype.loadEngine = function() {
    this.engine.run();
}

function V6() {
    this.run = function() {
        console.log("V6发动机");
    }
}

function V8() {
    this.run = function() {
        console.log("V8发动机");
    }
}

function V12() {
    this.run = function() {
        console.log("V12发动机");
    }
}

let aodi1 = new Aodi1(new V6());
let aodi2 = new Aodi1(new V8());
aodi1.loadEngine();
aodi2.loadEngine();