/*
* @Author: admin
* @Date:   2018-06-19 14:44:26
* @Last Modified by:   admin
* @Last Modified time: 2018-06-28 15:44:49
*/
// [更多下拉框]
$('.top-nav .more').hover(function(){
	$('.top-nav .more .ex-more').show();
},function(){
	$('.top-nav .more .ex-more').hide();
});
$('.top-nav .more .ex-more').mouseenter(function(){
	return false;
})
//固定条
var index;
$('.myfix li').hover(function(){
	index=$(this).index();
	if($(this).hasClass('three')){
		$('.myfix .three img').show();
	}
	$(this).children('.after').show();
},function(){
	if($(this).hasClass('three')){
		$('.myfix .three img').hide();
	}
	$(this).children('.after').hide();
})
//回到顶部
$('.myfix .one').click(function(){
//	$(window).scrollTop(0);
	$('html,body').animate({'scrollTop':'0'},600);
})
//出现回到顶部
$(window).scroll(function(){
	if($(window).scrollTop()>600){
		$('.myfix .one').show();
	}
	else{
		$('.myfix .one').hide();
	}
//固定条滚到底部时，变为不固定
	var top=$('.footer').offset().top-$(window).height();
		console.log("top:"+$('.footer').offset().top);
		console.log("left:"+$('.footer').offset().left);
	if($(window).scrollTop()>=top){
		$('.myfix').css({'position':'absolute','top':$('.footer').offset().top-160});
	}else{
		$('.myfix').css({'position':'fixed','top':'74%'});
	}
})