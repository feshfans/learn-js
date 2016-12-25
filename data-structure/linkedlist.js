/**
 * Created by feshfans on 2016/12/25.
 */

/**
 * 链表
 * @constructor
 */
var LinkedList=function () {
    function Node(element) {
        this.element=element;
        this.next=null;
    }

    var headNode=new Node("head");
    var tail=headNode;

    return {
        head:headNode,
        find:function (item) {
            var currNode=this.head;
            while (currNode.element!=item){
                currNode=currNode.next;
            }
            return currNode;
        },
        /**
         * 插入无素
         * @param newItem
         * @param item
         */
        insert:function (newItem,item) {
            var newNode=new Node(newItem);
            var current=null;
            if(item==null||item==undefined||item=="head"){
                current=tail;
                tail=newNode;
            }else{
                current=this.find(item);
            }
            newNode.next=current.next;
            current.next=newNode;
        },
        toString:function () {
            var str="LinkedList [";
            var node=this.head;
            while (!(node.next==null)){
                str+=node.next.element+"=>";
                node=node.next;
            }
            if(str.length>12){
                return str.substr(0,str.length-2)+"]";
            }
            return str+" ]";
        }
        
    }
}