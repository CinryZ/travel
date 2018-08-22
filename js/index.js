/*
 * @Author: Kalama
 * @Date:   2018-06-11 09:14:54
 * @Last Modified by:   Cinry
 * @Last Modified time: 2018-06-24 17:58:51
 */
	/*
	 *头部
	 */
	//微博
	$('.header .nav .center #one').hover(function() {
		$('.header .nav .center #one').css('top', '-80px');
	}, function() {
		$('.header .nav .center #one').css('top', '-50px');
	})
	//QQ
	$('.header .nav .center #two').hover(function() {
		$('.header .nav .center #two').css('top', '-80px');
	}, function() {
		$('.header .nav .center #two').css('top', '-50px');
	})
	//微博
	$('.header .nav .center #three').hover(function() {
		$('.header .nav .center #three').css({
			'top': '-165px',
			'left': '-30px'
		});
	}, function() {
		$('.header .nav .center #three').css({
			'top': '-165px',
			'left': '0px'
		});
	})
	//下拉条
	$('.header .left li').hover(function() {
		$(this).children('ul').stop().fadeIn();
		$(this).children('.icon-xiala').addClass('icon-xiala1');
	}, function() {
		$(this).children('ul').stop().fadeOut();
		$(this).children('.icon-xiala').removeClass('icon-xiala1');
	})
	// $('.header .nav-down li').hover(function() {
	// 	$(this).stop().css('background', '#eeeeee');
	// }, function() {
	// 	// $(this).stop().css('background', '#fff');
	// })
	/*
	 * @Author: Cinry
	 * @Date:   2018-06-16 23:30:39
	 * @Last Modified by:   Cinry
	 * @Last Modified time: 2018-06-16 23:30:39
	 */


//旅行家专栏，最新活动轮播
	var timer;
	var i = 0;

	//定义自动播放的函数
	function run(){
		clearInterval(timer);
		timer = setInterval(function(){
			i++;		
			if(i>4){							
				i = 0;
				$('.carousels').css('left',-260*i+'px');
			}
			$('.carousels').animate({'left':-260*i+'px'},100);

			$('.dot li').eq(i).addClass('orange');
		
			$('.dot li').eq(i).siblings().removeClass('orange');
			
			$('.point li').eq(i).addClass('orange');
		
			$('.point li').eq(i).siblings().removeClass('orange');
			// i++;
		},2000)
	};

	run();

	//鼠标移入div时停止定时器,移出时继续
	$('.aside-con').hover(function(){
		clearInterval(timer);
	}
	,function(){
		run();
	});

	//鼠标点击圆点时图片相应改变
	$('.point li').click(function(){
		$(this).addClass('orange');
		$(this).siblings().removeClass('orange');
		var i = $(this).index();
		$('.carousels').css('left',-260*i+'px');
	});

	$('.dot li').click(function(){
		$(this).addClass('orange');
		$(this).siblings().removeClass('orange');
		var i = $(this).index();
		$('.carousels').css('left',-260*i+'px');
	})



// 爆款热卖js
	$('.right .boom li').hover(function(){
		$(this).children('.detail').animate({'height':'80px','margin-top':'-35px'},100);
		$(this).children('.detail').css('background-color','#f8f8f8');

	},function(){
		$(this).children('.detail').animate({'height':'40px','margin-top':'5px'},100);
		$(this).children('.detail').css('background-color','#fff');
	})


//轮播中央table栏切换
$('.bottom-con li').click(function(){
	$(this).children('i').addClass('cur');
	$(this).siblings().children('i').removeClass('cur');
	var i = $(this).index();
	$('.bottom-con>div').eq(i).css('display', 'block');
	$('.bottom-con>div').eq(i).siblings('div').css('display', 'none');
});


//轮播大图切换
var ban_timer;
var j = 0;
//定义自动播放的函数
	function running(){
		clearInterval(ban_timer);
		ban_timer = setInterval(function(){
			j++;		
			if(j>4){							
				j = 0;
				$('.banner .change li').eq(j).css('display','block');
			}
			$('.banner .change li').eq(j).css('display','block');
			$('.banner .change li').eq(j).siblings() .css('display','none');

			$('.right-con li').eq(j).css('border-color','orange');
		
			$('.right-con li').eq(j).siblings().css('border-color','transparent');
		
		},2000)
	};

	running();
//鼠标移入div时停止定时器,移出时继续
	$('.banner').hover(function(){
		clearInterval(ban_timer);
	}
	,function(){
		running();
	});
//鼠标点击右边小图片时，banner相应改变
	$('.right-con li').click(function(){
		var k = $(this).index();
		$('.banner .change li').eq(k).css('display','block');
		$('.banner .change li').eq(k).siblings().css('display','none');
		$(this).css('border-color', 'orange');
		$(this).siblings().css('border-color', 'transparent');
	})

// 点击筛选按钮后，显示筛选框
$('.noteHead .popular span').click(function(){
	$(this).addClass('change');
	$('.filter-con').css('display', 'block');
	return false;
});
//关闭筛选框（点击关闭按钮或点击其他区域）
$(window).click(function(){
	$('.noteHead .popular span').removeClass('change');
	$('.filter-con').css('display', 'none');
});
$('.filter-con').click(function(){
	return false;
});
$('.filter-con .close').click(function(){
	$('.noteHead .popular span').removeClass('change');
	$('.filter-con').css('display', 'none');
})

// 点击日历图标，出现日历插件
$('.date1 i,.date2 i').click(function(){
	$('.date1 div').css('display', 'block');
	return false;
});
$(window).click(function(){
	$('.date1 div').css('display', 'none');
});
$('.rili').click(function(){
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
	});


	/*
 *	即时动态
 */
//自动消失
var avt_timer;
function gogo(){
	avt_timer=setInterval(function(){
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
	clearInterval(avt_timer);
	$(this).parent().parent().remove();
	if(!$('.dynamic ul li p').hasClass('title'))
		$('.dynamic').remove();
})
//移到上面，停止定时器；移走之后，定时器继续
$('.dynamic').hover(function(){
	clearInterval(avt_timer);
},function(){
	gogo();
})
//点击关闭按钮
$('.dynamic .btn').click(function(){
	clearInterval(avt_timer);
	$(this).parent().remove();
})