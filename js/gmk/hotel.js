/*
* @Author: Kalama
* @Date:   2018-06-19 01:08:36
* @Last Modified by:   admin
* @Last Modified time: 2018-06-19 15:59:18
*/
/*$('.inputs .inp2 .ck-date').click(function(){
//	alert(1);
//	console.log(1);
	$(this).siblings('div').toggle();
})*/
//出行目的地输入框
$('.hotel .inputs .inp1').click(function(){
	change(0);
	return false;
})
//入住日期
$('.hotel .inputs .inp2').click(function(){
	change(1);
	return false;
})
//离店日期
$('.hotel .inputs .inp3').click(function(){
	change(2);
	return false;
})
//人数
$('.hotel .inputs .inp4').click(function(){
	change(3);
	return false;
})
//选择人数
$('.hotel .inputs .inp4 b').click(function(){
	$(this).children().toggle();
})
$(window).click(function(){
	$('.hotel .inputs').children('div').removeClass('focus1');
	$('.hotel .inputs').children('div').children('div').hide();
})
function change(a){
	$('.hotel .inputs').children('div').removeClass('focus1');
	$('.hotel .inputs').children('div').children('div').hide();
	$('.hotel .inputs').children('div').eq(a).addClass('focus1');
	$('.hotel .inputs').children('div').eq(a).children('div').show();
}
//主题酒店
$('.topic .one li').click(function(){
	var index=$(this).index();
	$(this).addClass('current').siblings().removeClass('current');
	$('.topic .two').eq(index).show();
	$('.topic .two').eq(index).siblings('.two').hide();
})
//移动上方的文字和图片
$('.topic-move .two a').mousemove(function(){
	var move= parseInt(Math.random()*10+10);
	var move1= parseInt(Math.random()*12);
	$(this).children('.shadow').children('.up').stop().animate({'margin-left':(-20+move)+'px','margin-top':(-23+move)+'px'});
//	$(this).children('.shadow').children('.up').stop().animate({'margin-left':(5+move)+'px','margin-top':(-23+move)+'px'});
	$(this).children('.shadow').children('.down').stop().animate({'margin-left':(-14+move)+'px','margin-top':(8+move)+'px'});
//	$(this).children('.shadow').children('.down').stop().animate({'margin-left':move+'px','margin-top':(8+move)+'px'});
	$(this).children('img').css({'transform':'rotateX('+move1+'deg) '+'rotateY('+move1+'deg)'});
});
//transform: rotateX(12deg) rotateY(12deg);
$('.topic-move .two a').mouseleave(function(){
	$(this).children('.shadow').children('.up').stop().animate({'margin-left':'-20px','margin-top':'-23px'});
	$(this).children('.shadow').children('.down').stop().animate({'margin-left':'-14px','margin-top':'8px'});
	$(this).children('img').css({'transform':'rotateX(0deg) '+'rotateY(0deg)'});
})
//特价酒店
$('.sale .one li').click(function(){
	var index=$(this).index();
	$(this).addClass('current').siblings().removeClass('current');
	$('.sale .two').eq(index).show();
	$('.sale .two').eq(index).siblings('.two').hide();
})