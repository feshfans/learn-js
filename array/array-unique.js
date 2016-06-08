/**
 * Created by kang on 16-5-13.
 */

/***
 * 数组唯一性的两种方式，扩展Array
 */

Array.prototype.unique=function () {
    var n=[];
    for(var i=0;i<this.length;i++){
        if(n.indexOf(this[i])==-1){
            n.push(this[i]);
        }
    }
    return n;
}

Array.prototype.unique2=function () {
    var n={};
    var tmp=[];

    for(var i=0;i<this.length;i++){
        if(!n[this[i]]){
            n[this[i]]=true;
            tmp.push(this[i]);
        }
    }
    return tmp;
}