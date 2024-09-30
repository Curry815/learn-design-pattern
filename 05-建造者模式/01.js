/**
 * 建造者模式：属于创建型模式的一种，提供一种创建复杂对象的方式。
 * 他关注的是过程，而不是结果，与工厂模式相反。
 * 它将一个复杂的对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。
   适用范围：相似的步骤，可以抽象出一个 Builder 类，该类封装了创建过程，让子类实现具体的步骤。
   例子：创建一个汽车工厂，可以生产不同类型的汽车，如轿车、SUV、跑车等，这些汽车都有相同的步骤，如添加引擎、添加轮胎、添加座椅等，
   优点：建造者模式将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示。
    工厂模式主要是为了创建对象实例或者类簇（抽象工厂），关心的是最终产出(创建)的是什么，而不关心创建的过程。
    而建造者模式关心的是创建这个对象的整个过程，甚至于创建对象的每一个细节。
 */

class Navbar {
    init() {
        console.log('navbar-init');
    }

    getData() {
        console.log("navbar-getData");
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve('navbar-1111');
        //     }, 1000);
        // });
        return "navbar-1111"
    }

    render() {
        console.log("navbar-render");
    }
}

class List {
    init() {
        console.log('list-init');
    }

    getData() {
        console.log("list-getData");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('list-1111');
            }, 1000);
        });
    }

    render() {
        console.log("list-render");
    }
}

class Creator {
    async startBuild(builder) {
        await builder.init();
        let res = await builder.getData();
        console.log(res);
        
        await builder.render();
    }
}
const op = new Creator();
op.startBuild(new Navbar());
op.startBuild(new List());
