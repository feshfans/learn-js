
//使用define定义一个函数类型模型，RequireJS的模块可以是JS对象，函数或其它任何类型
//(CommonJS/SeaJS则只能是JS对象)
define(function() {
    function query(selector,context) {
        var s=selector,
            doc=document,
            regId=/^#[\w\-]+/,
            regCls = /^([\w\-]+)?\.([\w\-]+)/,
            regTag = /^([\w\*]+)$/,
            regNodeAttr = /^([\w\-]+)?\[([\w]+)(=(\w+))?\]/;
            
        
        var context=
            context==undefined?
            document:
            typeof context=='string'?
            doc.getElementById(context.substr(1,context.length)):
            context;
            
        if(regId.test(s)) {
            return doc.getElementById(s.substr(1,s.length));
        }
        if(regTag.test(s)) {
            return doc.getElementsByTagName(s);
        }
    }
    return query;
});