/***
 * 观察者模式：观察者模式包含观察目标和观察者两类对象，
             其中一个目标可以有任意数目的与之相依赖的观察者
            一旦观察目标的状态发生改变，所有的观察者都将得到通知。
            当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新，
            解决了主体对象与观察者之间功能的耦合，即一个对象状态改变给其他对象通知的问题。
    优势：目标者与观察者，功能耦合度降低，专注自身功能逻辑；
        观察者被动接收更新，时间上解耦，实时接收目标者更新状态。
    缺点：观察者模式虽然实现了对象间依赖关系的低耦合，但却不能对事件通知进行细分管控，
        如 “筛选通知”，“指定主题事件通知” 。
 */

class Subject {
    constructor() {
        this.observers = [];
    }

    add(observer) {
        this.observers.push(observer);
    }
}

class Observer {

}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.add(observer1);
subject.add(observer2);