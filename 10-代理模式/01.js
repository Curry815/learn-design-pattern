/**
 * 代理模式：为其他对象提供一种代理以控制对这个对象的访问。
 * 代理模式使得代理对象控制具体对象的引用。
 * 代理几乎可以是任何对象：文件，资源，内存中的对象，或者是一些难以复制的东西。
 */

class Star {
    play() {
        console.log('开始演戏');
    }
}

class StarProxy {
    constructor() {
        this.superStar = new Star();
    }

    talk(price) {
        if (price >= 10000) {
            this.superStar.play();
        } else {
           throw new Error('价格不合适');
        }
    }
}

let jr = new StarProxy();
jr.talk(10000);