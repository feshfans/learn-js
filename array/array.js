//创建数组
var num1=[];
//多个参数，则参数为数组元素
var num2=new Array(1,2,3,4,5);
//一个参数，表示数组大小
var num3=new Array(10);
//数组允许存放不同类型的数据
var num4=[1,"Joe",true,null];

//通过isArray用来判断对象是否是数组
console.info(Array.isArray(num4));

//print array length
console.info(num4.length);

//写数组
for(var i=0;i<10;i++){
  num1[i]=i+1;
}
console.info(num1);

//浅复制
var num1_copy=num1;
//更新引用复本中元素的值，原引用也会感知到这个变化
num1_copy[1]=0;
console.info(num1[1]);

//深复制
var num1_deep_copy=[];
for(var i=0;i<num1.length;i++){
  num1_deep_copy[i]=num1[i];
}
//深复制输入的值就不一样了
num1_deep_copy[1]=1;
console.info(num1_deep_copy[1]);
console.info(num1[1]);

//join()和toString()方法均会将数组转化为字符串，各元素之间用逗号分隔开
console.info(num1_deep_copy.toString());
console.info(num1_deep_copy.join());


//concat()函数可以用于数组拼接
console.info(num4.concat(num1_deep_copy));

//splice()函数可以用来截取一个新数组，即切片
console.info(num1_deep_copy.splice(2));
//被截取的数组也随之改变
console.info(num1_deep_copy);

//为数组添加元素
//有两种方法可以将元素添加了数组未尾
console.info(num1.push(1))
num1[num1.length]=2
//unshift方法可以将元素添加的数组头部，并可一次添加多个
num1.unshift(3,4);
console.info(num1);
