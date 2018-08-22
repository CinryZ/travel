/*
* @Author: Kalama
* @Date:   2018-06-11 09:14:54
* @Last Modified by:   Kalama
* @Last Modified time: 2018-06-19 10:50:51
*/
/*
 *头部
 */
//鼠标移到nav,背景变化
$('.nav-wrap').hover(function(){
	$(this).css('background','white');
//	$('.header .nav .left>li a').css('color','#333');
	$('.header .left .first>a').css('color','#fff');
},function(){
	$(this).css('background','transparent');;
//	$('.header .nav .left>li a').css('color','#fff');
})
//header右下角第一个图标
$('.head-rb .l-span').hover(function(){
	$('.l-span-hover').fadeIn();
},function(){
	$('.l-span-hover').fadeOut();
})
//header右下角第三个图标.head-rb .r-span
$('.head-rb .r-span').hover(function(){
	$(this).children('.r-span-hover').show();
},function(){
	$(this).children('.r-span-hover').hide();
})
//头部向下箭头
$('.header .head-down').click(function(){
	var top=$('.con>.common>h2').eq(0).offset().top;
	$(window).scrollTop(top);
})

//关闭广告
$('.ad span').click(function(){
	$(this).parent().hide();
})

//热门目的地切换
$('.hot-des li').mouseenter(function(){
	var index=$(this).index();
	$(this).siblings('li').children('a').removeClass('con-current');
	$(this).children().addClass('con-current');
	$('.con-lr').eq(index).stop().show();
	$('.con-lr').eq(index).siblings('.con-lr').stop().hide();
})
//当季推荐
$('.now li').mouseenter(function(){
	var index=$(this).index();
	$(this).siblings('li').children('a').removeClass('con-current');
	$(this).children().addClass('con-current');
	$('.con-advise1 .images').eq(index).stop().show();
	$('.con-advise1 .images').eq(index).siblings('.images').stop().hide();
})
//主题精选
$('.topic .con-nav li').mouseenter(function(){
	var index=$(this).index();
	$(this).siblings('li').children('a').removeClass('con-current');
	$(this).children().addClass('con-current');
	$('.topic .images').eq(index).stop().show();
	$('.topic .images').eq(index).siblings('.images').stop().hide();
})