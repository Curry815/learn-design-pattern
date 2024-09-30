/**
 * 职责链模式：使多个对象都有机会处理请求，从而避免了请求的发送者与多个接收者直接的耦合关系，
 * 将这些接收者连接成一条链，顺着这条链传递该请求，直到找到能处理该请求的对象。
 * 
 * 有原型链的影子
 * 例子：处理表单验证的例子，例如注册的表单输入框的校验
 * 
 * 优点：
    1. 符合单一职责，使每个方法中都只有一个职责。
    2. 符合开放封闭原则，在需求增加时可以很方便的扩充新的责任。
    3. 使用时候不需要知道谁才是真正处理方法，减少大量的 `if` 或 `switch` 语法。

   缺点：
    1. 团队成员需要对责任链存在共识，否则当看到一个方法莫名其妙的返回一个 next 时一定会很奇怪。
    2. 出错时不好排查问题，因为不知道到底在哪个责任中出的错，需要从链头开始往后找。
 */

btn.addEventListener("click", function () {
    checks.check(); 
});

function checkEmpty() {
    if (input.value.length == 0) {
        console.log("这里不能为空");
        return;
    }
    return "next";
}

function checkNumber() {
    if (Number.isNaN(+input.value)) {
        console.log("这里必须是数字");
        return;
    }
    return "next";
}

function checkLength() {
    if (input.value.length < 6) {
        console.log("这里要大于6个数字");
        return;
    }
    return "next";
}

class Chain {
    constructor(fn) {
        this.checkRule = fn || (() => "next");
        this.nextRule = null;
    }
    addRule(nextRule) {
        this.nextRule = new Chain(nextRule);
        return this.nextRule;
    }
    end() {
        this.nextRule = {
            check: () => "end"
        };
    }
    check() {
        this.checkRule() == "next" ? this.nextRule.check() : null;
    }
}

const checks = new Chain();
checks.addRule(checkEmpty).addRule(checkNumber).addRule(checkLength).end();
