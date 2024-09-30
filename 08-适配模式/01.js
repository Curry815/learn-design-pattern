/**
 * 适配模式：将一个类的接口转换成客户希望的另一个接口。适配器模式让那些接口不兼容的类可以一起工作。
 * 适配器不会去改变实现层，那不属于它的职责范围，它干涉了抽象的过程。
 * 外部接口的适配能够让同一个方法适用于多种系统。
 */

class TencentMap {
    show() {
        console.log('腾讯地图');
    }
}

class BaiduMap {
    display() {
        console.log('百度地图');
    }
}

class TencentMapAdapter extends TencentMap {
    constructor() {
        super();
    }

    display() {
        this.show();
    }
}

function renderMap(map) {
    map.display(); 
}

renderMap(new TencentMap()); // 腾讯地图
renderMap(new BaiduMap()); // 百度地图