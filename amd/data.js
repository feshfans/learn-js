define(function() {
    var idSeed=0;
    var cache={};
    var id="_guid_";
    
    function guid(el) {
        return el[id] || (el[id]=++idSeed);
    }
    
    
    return {
        set:function(el,key,val){
            if(!el){
                throw new Error('Setting failed, invalid element');
            }
            var id=guid(el);
            var c=cache[id] || (cache[id]={});
            if(key){
                c[key]=val;
            }
            
            return c;
        },
        get: function(el, key, create) {
			if (!el) {
				throw new Error('getting failed, invalid element');
			}

			var id = guid(el),
				elCache = cache[id] || (create && (cache[id] = {}));

			if (!elCache) return null;

			return key !== undefined ? elCache[key] || null : elCache;
		},

		has: function(el, key) {
			return this.get(el, key) !== null;
		},

		remove: function(el, key) {
			var id = typeof el === 'object' ? guid(el) : el,
				elCache = cache[id];

			if (!elCache) return false;

			if (key !== undefined) {
				delete elCache[key];
			} else {
				delete cache[id];
			}

			return true;
		}
    }
});