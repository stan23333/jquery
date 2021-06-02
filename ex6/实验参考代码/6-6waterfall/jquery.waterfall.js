;(function($){
	$.fn.extend({
	   "waterfall":function(options){
		   options=$.extend({
			 column:6,
			 gap:10,
			 tgap:10    
			},options);
		   var contains=this;
	var cWidth=contains.width();
	var items=contains.children();
	var column=options.column;   //列的个数
	var gap=options.gap;      //列与列之间的缝隙
	var tgap=options.tgap;
	// var width=(cWidth-(column-1)*gap)/column;   //每一列的宽度
	var width=(cWidth-(column+1)*gap)/column;   //每一列的宽度
	var h=[];    //数组来存储每一列的高度
	items.each(function(index,val){
		//console.log(index,val);
		$(val).css({
			"width":width,
			"position":"absolute"
			})
		if(index<column)
		{
			$(val).css({
				"top":0,
				// "left":index*(width+gap)
				"left":index*(width+gap)+gap
				})
			h.push($(val).height()+tgap);
			}
		else{
			var min_index=0;
			var min_val=h[0];
			for(var i=0;i<h.length;i++)
			   if(h[i]<min_val) 
			   {min_val=h[i];
			    min_index=i; 
			   }
			 $(val).css({
				 "top":min_val,
				// "left":min_index*(width+gap)
				"left":min_index*(width+gap)+gap
				 })
			 h[min_index]+=($(val).height()+tgap);
		}
	})
	var max_val=h[0];
	for(var i=0;i<h.length;i++)
	  if(h[i]>max_val)   max_val=h[i];
	contains.height(max_val);	
	return this;	      
	 }	 
  })	
})(jQuery);