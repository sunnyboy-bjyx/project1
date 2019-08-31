/*
* @Author: hp
* @Date:   2019-08-20 12:10:09
* @Last Modified by:   hp
* @Last Modified time: 2019-08-22 18:48:16
*/
$(function(){
	$('nav ul li').eq(0).hover(function() {
		$('.box').show();
	}, function() {
	    $('.box').hide();
	});
	// $('.nav ul li').eq(0).mouseenter(function(){
	// 	$('.box').show();
	// })	
	// $('.box').eq(0).mouseleave(function(){
	// 	$('.box').hide();
	// })	
	var i=0;
	var n=0;
	var j=0;
	$('.select').click(function(){
		i++;
		if(i>1){
			$('.up').show(500);
			$('.down').fadeOut(500);
			$('.box4').fadeOut(500);
			i=0;
		}else{
            $('.up').hide(500);
			$('.down').fadeIn(500);
			$('.box4').fadeIn(500);
		}
	})	
	//获取text 替换text
	$('.box4 ul li').click(function(){
       var value=$(this).children().text();
       $('.select span').text(value);

	})
		var doc=$(document);
    	var win=$(window);
    	win.scroll(function(){
    		if(doc.scrollTop()>175){
    			$('.form1').show();
    		}else{
    			$('.form1').hide();
    		}
    	})
    	$('.select1').click(function(){
    		j++;
		if(j>1){
			$('.up1').show(500);
			$('.down1').fadeOut(500);
			$('.Box').fadeOut(500);
			j=0;
		}else{
            $('.up1').hide(500);
			$('.down1').fadeIn(500);
			$('.Box').fadeIn(500);
		}
    	})
    	// 替换text
    	$('.Box ul li').click(function(){
       var value=$(this).children().text();
       $('.select1 span').text(value);

	})
    	// 侧导航
    	$('.aside section').hover(function() {
    		$(this).children().children('img').hide();
    		$(this).css('background-color','#ffa000');
    		$(this).children().eq(1).show();
    	}, function() {
    		$(this).children().children('img').show();
    		$(this).css('background-color','');
    		$(this).children().eq(1).hide();
    	});
    	$('.aside5').hover(function() {
    		$('.Aside5').children('img').hide();
    		$(this).css('background-color','#ffa000');
    		$('.saoma').show();
    		$('.asidefive').show();
    	}, function() {
    		$('.Aside5').children('img').show();
    		$(this).css('background-color','');
    		$('.saoma').hide();
    		$('.asidefive').hide();
    	}); 		
})