 //微博
$('.header .nav .center #one').hover(function(){
			$('.header .nav .center #one').css('top','-80px');
		},function(){
			$('.header .nav .center #one').css('top','-50px');
		})
//QQ
$('.header .nav .center #two').hover(function(){
			$('.header .nav .center #two').css('top','-80px');
		},function(){
			$('.header .nav .center #two').css('top','-50px');
		})
//微博
$('.header .nav .center #three').hover(function(){
			$('.header .nav .center #three').css({'top':'-165px','left':'-30px'});
		},function(){
			$('.header .nav .center #three').css({'top':'-165px','left':'0px'});
		})
//下拉条
$('.header .nav .left li').hover(function(){
	$(this).children('ul').stop().fadeIn();
},function(){
	$(this).children('ul').stop().fadeOut();
})
//搜索框
$('.nav .search input').click(function(){
	$(this).siblings().css('background-position','-30px -139px');
	$(this).siblings('.focus').show();
	
})
$('.nav .search span').click(function(){
	$(this).css('background-position','-30px -109px');
	$(this).siblings('.focus').hide();
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
	if($(window).scrollTop()>=top){
		$('.myfix').css({'position':'absolute','top':$('.footer').offset().top-160});
	}else{
		$('.myfix').css({'position':'fixed','top':'74%'});
	}
})
/*
 *	即时动态
 */
//自动消失
var timer;
function gogo(){
	timer=setInterval(function(){
	//for(;$('.dynamic ul li p').hasClass('title');){
		$('.dynamic ul li').eq(0).remove();
		console.log(1);
	//}
	if(!$('.dynamic ul li p').hasClass('title')){
		clearInterval(timer);
		$('.dynamic').remove();
	}
	},3000)
}
gogo();
//点击X关闭
$('.dynamic .title span').click(function(){
	clearInterval(timer);
	$(this).parent().parent().remove();
	if(!$('.dynamic ul li p').hasClass('title'))
		$('.dynamic').remove();
})
//移到上面，停止定时器；移走之后，定时器继续
$('.dynamic').hover(function(){
	clearInterval(timer);
},function(){
	gogo();
})
//点击关闭按钮
$('.dynamic .btn').click(function(){
	clearInterval(timer);
	$(this).parent().remove();
})