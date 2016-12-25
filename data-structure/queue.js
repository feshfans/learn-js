/**
 * Created by feshfans on 2016/12/25.
 */

/**
 * 队列是一种先进先出的数据结构，
 * 只能在列尾插入元素，在队首删除元素
 * @constructor
 */
var Queue=function () {
    var data=[];
    return {
        /**
         * 向队尾添加一个元素
         * @param element
         */
        enqueue:function (element) {
            data.push(element);
        },
        /**
         * 删除队首的元素
         * @return {*}
         */
        dequeue:function () {
            return data.shift();
        },
        /**
         * 取队首元素
         */
        front:function () {
            return data[0];
        },
        /**
         * 取队尾元素
         * @return {*}
         */
        back:function () {
            return data[data.length-1];
        },
        /**
         * 是否为空
         * @return {boolean}
         */
        isEmpty:function () {
            return data.length==0;
        },
        size:function () {
            return data.length;
        },
        toString:function () {
            var str="Queue (";
            for(var i=0;i<data.length;i++){
                str+=data[i]+",";
            }
            return str.substr(0,str.length-1)+" )";
        }

    }
}
