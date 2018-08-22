/*
* @Author: Hesia
* @Date:   2018-06-19 20:34:16
* @Last Modified by:   acer
* @Last Modified time: 2018-06-24 19:45:37
*/
$('.bc-wrap input').click(function(){
	
	$(this).parent().siblings('.bc-hide').toggle();
	$(this).parent().parent().siblings('.bc-item').children('.bc-hide').hide();
	$(this).parent().parent().siblings('.bc-item').children().children('#calendar').hide();
	console.log($(this).parent().parent().siblings('.bc-item').children('.bc-hide'));
	return false;
})
// $('.bc-wtwo').click(function(){
// 	$(this).parent().siblings('.bc-hide').eq(0).toggle();
// 	return false;
// })
$(document).click(function(e){
	$('.bc-hide').hide();
	$('#calendar').hide();
	// return false;
	e.stopPropagation();
})
$('.time').click(function(){
	$('#calendar').toggle();
	return false;
})