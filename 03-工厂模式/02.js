/**
 * 工厂模式：由一个工厂模式决定创建某一种产品对象类的实例。主要用来创建同一类对象。
 * 适用范围：创建的对象数量较少，对象的创建逻辑不复杂时使用。
 */

class User {
    constructor(role, pages) {
        this.role = role;
        this.pages = pages;
    }

    static UserFactory(role) {
        switch (role) {
            case "superadmin":
                return new User("superadmin", ["home", "user-manage", "right-manage", "news-manage"]);
            case "admin":
                return new User("admin", ["home", "user-manage", "news-manage"]);
            case "editor":
                return new User("editor", ["home", "news-manage"]);
            default:
                throw new Error("Invalid role");
        }
    }
}

let user = User.UserFactory("admin");