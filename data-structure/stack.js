/**
 * Created by feshfans on 2016/12/24.
 */

/**
 * 先入后出的栈实现
 * @constructor
 */
var Stack=function () {
    var data=[];
    var top=0;
    return {
        /**
         * 添加元素
         * @param element
         */
        push:function (element) {
            data[top++]=element;
        },
        /**
         * 取出并删除栈顶元素
         * @return {*}
         */
        pop:function () {
            return data[--top];
        },
        /**
         * 取出但不删除栈顶元素
         * @return {*}
         */
        peek:function () {
            return data[top-1];
        },
        size:function () {
            return top;
        },
        clear:function () {
            top=0;
        }
    }
}