/**
 * Created by feshfans on 2016/12/22.
 *
 * 字典
 */
var Map=function () {
    var keys=[];
    var values={};

    return {
        add:function (key,value) {
            if(values[key]==null){
                keys.push(key);
            }
            values[key]=value;
        },
        remove:function (key) {
            //keys.remove(key);
            for(var index in keys){
                if(keys[index]==key){
                    keys.splice(index);
                }
            }
            values[key]=null;
        },
        get:function (key) {
            return values[key];
        },
        contains:function (key) {
            var value=values[key];
            if(value==null||value==undefined){
                return false;
            }else {
                return true;
            }
        },
        size:function () {
            return keys.length;
        },
        each:function (fn) {
            if (typeof fn!='function'){
                throw "fn must be a Function Object";
            }
            var size=this.size();
            for(var i=0;i<size;i++){
                var k=keys[i];
                fn(k,values[k],i);
            }
        },
        entrys:function () {
            var size=this.size();
            var entrys=new Array(size);
            for(var i=0;i<size;i++){
                entrys[i]={
                    key:keys[i],
                    value:values[keys[i]]
                };
            }
            return entrys;
        },
        isEmpty:function () {
            return this.size()==0;
        },
        toString:function () {
            var str="Map [ ";
            var entrys=this.entrys();
            for(var i=0;i<entrys.length;i++){
                str+="{"+entrys[i].key+":"+entrys[i].value+"},";
            }
            str=str.substr(0,str.length-1);
            str=str.concat(" ]");
            return str;
        }
        
    }
}