//搜索框
$('.nav .search input').click(function(){
	$(this).siblings().css('background-position','-30px -139px');
	$(this).siblings('.focus').show();
	$('.header .left .current').css('padding-right','5px');
})
$('.nav .search span').click(function(){
	$(this).css('background-position','-30px -109px');
	$(this).siblings('.focus').hide();
	$('.header .left .current').css('padding-right','21px');
})
	var timer1;
	var num=0;
	//自动播放
	function auto(){
		clearInterval(timer1);//清除多次点击产生的多个定时器
		timer1=setInterval(function(){
			num++;
			if(num==5){
				num=0;
				$('.head-footer #turns').css({'left':-700*num+'px'});
			}else{
				$('.head-footer #turns').animate({'left':-700*num+'px'},500);
			}
			$('.first .circle').eq(num).addClass('current');
			$('.first .circle').eq(num).siblings().removeClass('current');
			$('.recircle .circle').eq(num).addClass('second');
			$('.recircle .circle').eq(num).siblings().removeClass('second');
		},2000)
	}
	auto();
	
	//鼠标移进停止
	$('.head-footer .right').mouseenter(function(){
		clearTimeout(timer1);
	})
	//鼠标移出开始
	$('.head-footer .right').mouseleave(function(){
		auto();
	})
	//圆圈移动
	$('.head-footer .right .circle').click(function(){
		var index=$(this).index();
		$(this).siblings().removeClass('current');
		$(this).addClass('current');
		num = index;
		$('.head-footer #turns').stop().animate({'left':-700*num+'px'});
	})
	//侧边栏
	var index;
	$('.head-footer .left .left-nav li').hover(function() {
		var index=$(this).index();
		$(this).children('ul').show();
		$(this).css('border-right','1px solid transparent');
		$('.header .head-footer .left .left-one li').eq(index).css('border-left','1px solid transparent');
},function(){
		$(this).children('ul').hide();
		$(this).css('border-right','1px solid #d6d6d6');
});
//内容侧边table栏
$('.con .con-left .one-ul li').click(function(){
	$(this).children('span').children('.icon-xiala').toggleClass('icon-xiala1');
	$(this).siblings('li').children('span').children('.icon-xiala').removeClass('icon-xiala1');
	$(this).toggleClass('bcchange');
	$(this).siblings('li').removeClass('bcchange');
	$(this).children('div').toggle();
	$(this).siblings().children('div').hide();
})
//加载更多
var k=0;
$('.con-bottom').click(function(event) {
	var num=parseInt(Math.random()*10);
	for(var i=0;i<num;i++){
		$('.con .con-right').append($('.con-right>.content').eq(k).clone(true));
		$('.con .con-right').append($('.con-right .divide').eq(0).clone(true));
	}
	k++;
	return false;
});