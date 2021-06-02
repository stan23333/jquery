;(function($){
  $.fn.extend({
     "color":function(value){
        if(value==undefined)   return this.css("color");
        else  return this.css("color",value);
     },
     "bgColor":function(value){
     	if(value==undefined)   return this.css("backgroundColor");
        else  return this.css("backgroundColor",value);
     }
  }) 
  // $.fn.color = function(value){
  // 	if(value==undefined)   return this.css("color");
  //   else  return this.css("color",value);}
})(jQuery);