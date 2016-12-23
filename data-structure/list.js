/**
 * 列表，可重复、保持元素添加顺序
 * equalFun是Function对象，用于判断两个对象是否相等,必须返回boolean类型
 */
var List=function(equalFun){
	
	var data=[];
	var size=0;
	var equalFunction=undefined;
	
	if(arguments.length==1){
		if(equalFun instanceof Function){
			equalFunction=equalFun;
		}else{
			throw "equalFun must be a Function Object";
		}
	}
	
	/**
	 * 判断两个元素对象是否相等
	 * @param {Object} $this 当前元素
	 * @param {Object} other 其它元素
	 */
	function isEqual($this,other){
		if(equalFunction==undefined){
			return $this==other;
		}else{
			return equalFunction($this,other);
		}
	}
	
	//var pos=0;
	return {
		/**
		 * 获取当前列表的大小
		 */
		size:function(){
			return size;
		},
		/**
		 * 在列表未尾添加一个元素
		 * @param {Object} element
		 */
		add:function(element){
			data[size]=element;
			size++;
		},
        /**
		 * 获取指定索引位置的元素
         * @param index
		 * @return
         */
		get:function (index) {
            if(index<0||index>=size){
                throw "index out of range : "+index;
            }
            return data[index];
        },
		/**
		 * 删除指定索引的元素，从0开始，返回要删除的元素
		 * @param {Object} index
		 */
		remove:function(index){
			if(index<0||index>=size){
				throw "index out of range : "+index;
			}
			var temp=data[index];
			//按顺序前移1位
			for(var i=index;i<size-1;i++){
				data[i]=data[i+1];
			}
			//最后一位清空，大小减1
			data[size-1]=undefined;
			size--;
			
			return temp;
		},
		/**
		 * 在列表中查找某一无素。如果找到，就返回该元素在列表中的位置，否则返回-1.
		 * @param {Object} item
		 */
		find:function(item){
			for(var i=0;i<size;i++){
				if(data[i]==item){
					return i;
				}
			}
			return -1;
		},
		/**
		 * 查看指定的元素在列表中是否存在,
		 * @param {Object} item
		 */
		contains:function(item){
			//for循环是索引
			for(var index in data){
				if(isEqual(data[index],item)){
					return true;
				}
			}
			return false;
		},
        /**
		 * 清空所有元素
         */
		clear:function(){
			delete data;
			size=0;
			data.length=0;	
		},
        /**
		 *删除指定的元素
         * @param item   要删除的对象
		 * @return index 对象在列表中的索引位置
         */
		removeItem:function (item) {
			var index=this.find(item);
			if(index>=0){
                this.remove(index);
            }
            return index;
        },
		toString:function () {
			var str="List (";
			for(var index in data){
				str+=" "+data[index].toString()+",";
			}
			str=str.substring(0,str.length-1);
			return str+" )";
		}
		
	}
	
};
