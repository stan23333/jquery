$.fn.fgAndBg=function(fg,bg){
	//this代表当前使用该方法的jQuery对象
	console.log(this);
	this.css({
		color:fg,
		backgroundColor:bg
	});
	/*$(this).css({
		color:'red',
		backgroundColor:'#ccc'
	});*/
}