require.config({
   paths:{
       jquery:'jquery-2.2.3'
   } 
});
/*
require(['jquery'],function($) {
    alert($().jquery);
});

require(['selector'],function($){
   var els=$('#wrapper');
   console.info(els); 
});
*/
require(['selector', 'event'], function($, E) {
	var els = $('p');
	for (var i=0; i<els.length; i++) {
		E.bind(els[i], 'click', function() {
			alert(this.innerHTML);
		});
	}
});