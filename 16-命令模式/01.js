/**
 * 命令模式：有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是什么。
 *          需要一种松耦合的方式来设计程序，使得发送者和接收者能够消除彼此之间的耦合关系。
 * 命令模式由三种角色构成：
    1. 发布者 `invoker`（发出命令，调用命令对象，不知道如何执行与谁执行）；
    2. 接收者 `receiver` (提供对应接口处理请求，不知道谁发起请求）；
    3. 命令对象 `command`（接收命令，调用接收者对应接口处理发布者的请求）。

    例子：多线程、宏命令
 */
class Receiver { // 接收者类
    execute() {
        console.log('接收者执行请求');
    }
}

class Command { // 命令对象类
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() { // 调用接收者对应接口执行
        console.log('命令对象->接收者->对应接口执行');
        this.receiver.execute();
    }
}

class Invoker { // 发布者类
    constructor(command) {
        this.command = command;
    }
    invoke() { // 发布请求，调用命令对象
        console.log('发布者发布请求');
        this.command.execute();
    }
}

const storehouse = new Receiver(); // 仓库
const order = new Command(storehouse); // 订单
const client = new Invoker(order); // 客户
client.invoke();