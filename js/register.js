/*
* @Author: admin
* @Date:   2018-06-19 08:58:08
* @Last Modified by:   admin
* @Last Modified time: 2018-06-28 15:53:53
*/
// 默认页面为注册，跳为登录页面
$('.mention .jump1').click(function(){
	$('.re').css('display','none');
	$('.login').css('display','block');
	$(this).css('display','none');
	$('.mention .jump2').css('display','block');
});
// 当页面为登录时，跳转回注册
$('.mention .jump2').click(function(){
	$('.re').css('display','block');
	$('.login').css('display','none');
	$(this).css('display','none');
	$('.mention .jump1').css('display','block');
});
$('input').focus(function(){
	$(this).css({'border':'1px solid orange','outline':'none'});
});

$('.login input').blur(function(){

	$(this).css('border', '1px solid #d8d8d8');
	if($(this).val()==''){

		$('.error').css('display', 'block');
	}else if($(this).val()!=''){
		$('.error').css('display', 'none');
	}
});

