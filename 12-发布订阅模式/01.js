/**
 * 发布订阅模式：1.观察者和目标要相互知道
                2.发布者和订阅者不用互相知道，通过第三方实现调度，属于经过解耦合的观察者模式
 */
const PubSub = {
    message: {},
    publish(type, data) {
        if (!this.message[type]) return;

        this.message[type].forEach(item => item(data));
    },

    subscribe(type, cb) {
        if (!this.message[type]) {
            this.message[type] = [cb];
        } else {
            this.message[type].push(cb);
        }
    },

    unsubscribe(type, cb) {
        if (!this.message[type]) return;

        if (!cb) {
            //取消所有当前type事件
            this.message[type] && (this.message[type].length = 0);
        } else {
            this.message[type] = this.message[type].filter(item => item !== cb);
        }
    }
}

PubSub.subscribe("UpdateBread", function (data) {
    console.log("我是订阅者", data);
    document.querySelector(".bread").innerHTML = data;
})

let oli = document.querySelectorAll(".left li");
for (let i = 0; i < oli.length; i++) {
    oli[i].onclick = function () {
        PubSub.publish("UpdateBread", this.innerHTML);
    }
}

//PubSub.publish("aaaa",this.innerHTML)
//PubSub.subscribe("aaaa",()=>{})
