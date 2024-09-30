/**
 * 工厂模式：由一个工厂模式决定创建某一种产品对象类的实例。主要用来创建同一类对象。
 * 适用范围：创建的对象数量较少，对象的创建逻辑不复杂时使用。
 */

function User(role, pages) {
    this.role = role;
    this.pages = pages;
}

function UserFactory(role) {
    switch (role) {
        case "superadmin":
            new User(role, ["home", "user-manage", "right-manage", "news-manage"]);
            break;
        case "admin":
            new User(role, ["home", "user-manage", "news-manage"]);
            break;
        case "editor":
            new User(role, ["home", "news-manage"]);
            break;
        default:
            throw new Error("Invalid role");
    }
}

let user = UserFactory("admin");
