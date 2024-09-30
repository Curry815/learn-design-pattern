/**
 * 抽象工厂模式：抽象工厂模式并不直接生成实例， 而是用于对产品类簇的创建。
 * 例如都有首页home，但是每个角色的home首页的页面实现不一样，那么就可以使用抽象工厂模式。
 */
class User {
    constructor(name, role, pages) {
        this.name = name; // 用户名
        this.role = role; // 角色
        this.pages = pages; // 页面
    }

    welcome() {
        console.log("欢迎回来", this.name);
    }

    dataShow() {
        throw new Error("抽象方法需要被实现");
    }
}

class SuperAdmin extends User {
    constructor(name) {
        super(name, "superadmin", ["home", "user-manage", "right-manage", "news-manage"]); // 超级管理员
    }

    dataShow() {
        console.log("我是超级管理员，superadmin-datashow");
    }

    addRight() {

    }

    addUser() {

    }
}

class Admin extends User {
    constructor(name) {
        super(name, "admin", ["home", "user-manage", "news-manage"]); // 管理员
    }

    dataShow() {
        console.log("我是管理员, admin-datashow");
    }

    addUser() {
        
    }
}

class Editor extends User {
    constructor(name) {
        super(name, "editor", ["home", "news-manage"]); // 普通用户
    }

    dataShow() {
        console.log("我是普通用户, editor-datashow");
    }
}

function getAbstractFactory(role) {
    switch (role) {
        case "superadmin":
            return SuperAdmin;
        case "admin":
            return Admin;
        case "editor":
            return Editor;
        default:
            throw new Error("Invalid role");
    }
}

let userClass = getAbstractFactory("superadmin");
console.log(userClass);

let user = new userClass("ellie");
console.log(user);