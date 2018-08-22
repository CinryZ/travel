/*
* @Author: Hesia
* @Date:   2018-06-18 22:26:50
* @Last Modified by:   acer
* @Last Modified time: 2018-06-26 00:46:14
*/
// 点击左边弹出
$('.trigger').click(function(){
	$('.depart-pannel').toggle();
	$('.city-pannel').hide();
	console.log(1);
	return false;
})
$('.depart-pannel').click(function(event) {
	return false;
});
$('.city-pannel').click(function(event) {
	return false;
});
$(document).click(function(){
	$('.depart-pannel').hide();
	$('.city-pannel').hide();
})

// 点击右边弹出
$('.search-input').click(function(){
	$('.city-pannel').toggle();
	$('.depart-pannel').hide();
	return false;
})



//tab中的字母切换
$('.letter-tab ul li').click(function(){
	// $(this).attr('class','on');
	$(this).addClass('on');
	$(this).siblings().removeClass('on');
	var index=$(this).index();
	$('.letter-content').eq(index).show();
	$('.letter-content').eq(index).siblings('.letter-content').hide();

});

$('.filter-header a').click(function(){
	$(this).addClass('fh-current');
	$(this).siblings().removeClass('fh-current');
	var index=$(this).index();
	$('.filter-contain').eq(index).show();
	$('.filter-contain').eq(index).siblings('.filter-contain').hide();

})

$('.sc-item').hover(function(){
	$(this).children().children().children('h3').css('text-decoration',' underline');
	$(this).children().children().children().children('.book-in').css({'background':'#ff9d00','color':'#fff'})
},function(){
	$('h3').css('text-decoration','none');
	$('.book-in').css({'background':'','color':''})
});

$('.sales-side a').hover(function(){
	$(this).children('p').css('color','#ff9d00');
},function(){
	$('.sales-side p').css('color','');
})


// $('.no').parent().siblings().children().click(function(){
// 		$('.no').attr('checked',false);
// });
//点击其他取消不限全选
$('.filter-nav li').click(function(event) {
	if(!($(this).children().hasClass('no')))
		$(this).parent().children().eq(0).children('.no').attr('checked', false);
});
// 点击不限取消其他所有
$('.no').click(function(){
	$(this).attr('checked',true);
	$(this).parent().siblings().children().attr('checked',false);
});
