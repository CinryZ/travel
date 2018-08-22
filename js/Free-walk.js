/*
* @Author: Hesia
* @Date:   2018-06-18 19:20:30
* @Last Modified by:   acer
* @Last Modified time: 2018-06-24 19:17:52
*/
$('.category .item').hover(function(){
	console.log(1);

	$(this).children('.category-pannel').show();

},function(){
	$(this).children('.category-pannel').hide();
	// $(this).css('border','none')
})







