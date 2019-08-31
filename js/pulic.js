/*
* @Author: 17938
* @Date:   2019-08-12 22:46:20
* @Last Modified by:   hp
* @Last Modified time: 2019-08-23 13:45:48
*/
// 侧导航固定定位
$(function(){
    // 导航部分
    	var doc=$(document);
    	var win=$(window);
    	win.scroll(function(){
    		if(doc.scrollTop()>100){
    			$('.fix').addClass('fixed');
    		}else{
    			$('.fix').removeClass('fixed');
    		}
    	})
    	$('.fix ul li').click(function(event){
               $('html,body').animate({'scrollTop':0},500);
    	})
        // 顶部导航
     $('.nav_left input').eq(0).focus(function(){
                $('.nav_left input').eq(0).attr('value', '');
            })
            $('.nav_left input').eq(0).blur(function(){
                if($('.nav_left input').eq(0).val()=='')
                    $('.nav_left input').eq(0).attr('value', '请输入标题、关键词、作品编号搜索')
            })   


})
