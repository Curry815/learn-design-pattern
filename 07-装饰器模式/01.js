/**
 * 装饰器模式：对已有功能进行拓展，不会更改原有的代码，对其他的业务产生影响，
 * 这方便我们在较少的改动下对软件功能进行拓展。
 * 动态注入某些功能
 */
Function.prototype.before = function(beforeFn) {
    var _self = this; // 保存原函数的引用
    return function() {
        // 先进行前置函数调用
        beforeFn.apply(this, arguments); // 传入this和参数

        // 执行原来的函数
        _self.apply(this, arguments);
    }
}

Function.prototype.after = function(afterFn) {
    var _self = this; // 保存原函数的引用
    return function() {
        var result = _self.apply(this, arguments); // 传入this和参数
        // 先进行前置函数调用
        afterFn.apply(this, arguments);

        // 执行原来的函数
        return result
    }
}

function log() { 
    console.log("上传uv, pv数据");
}

function render() {
    console.log("页面处理逻辑");
}

render = render.before(log);

filmbtn.onclick = (function() {
    // ...
    render();
    // ...
})

function ajax(url, method, params) {
    console.log(url, method, params);
}

ajax1 = ajax.before((url, method, params) => {
    params.token = "token"; // 添加token
})

// 需要传token
ajax1("/api", "post", { name: "ellie" });

// 不需要传token
// ajax("/api", "post", { name: "ellie" });