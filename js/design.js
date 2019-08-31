/*
* @Author: hp
* @Date:   2019-08-12 13:45:24
* @Last Modified by:   hp
* @Last Modified time: 2019-08-23 17:43:47
*/
//内容左边
$(function(){
	$('.meiu').mouseenter(function(){
	  $(this).children().eq(0).css('display','none');
	  $(this).children().eq(1).css('display','block')
	})
	$('.meiu').mouseleave(function(){
	   $(this).children().eq(0).css('display','block');
	   $(this).children().eq(1).css('display','none')
	})
// 内容右边banner部分
	var i=0;
	var n=0;
	var timer;
	function aa(){
        clearInterval(timer);
        timer=setInterval(function(){
        	i++;
			if(i==5){
				n=0;
				$('.bottom ol li').eq(n).addClass('border').siblings('li').removeClass('border');
			}
			if(i>5){
			i=0;
			$('.banner ul').css('margin-left',-841*i+"px");
			i=1;
			}
			$('.banner ul').animate({'margin-left':-841*i+'px'});
			$('.bottom ol li').eq(i).addClass('border').siblings('li').removeClass('border'); 
			switch(i){
            	case 5:
            	$('.banner h5').html('夏令营海报');
            	break;
            	case 1:
            	$('.banner h5').html('最强大脑');
            	break;
            	case 2:
            	$('.banner h5').html('房地产海报');
            	break;
            	case 3:
            	$('.banner h5').html('夏天海报');
            	break;
            	case 4:
            	$('.banner h5').html('暑假海报');
            	break;
            }
        },2000)
	}
	aa();
	$('.banner').mouseenter(function(){
		clearInterval(timer);
	})
	$('.banner').mouseleave(function(){
		aa();
	})
	$('.btnright').click(function(event) {
		i++;
		if(i==5){
			n=0;
			$('.bottom ol li').eq(n).addClass('border').siblings('li').removeClass('border');
		}
		if(i>5){
			i=0;
			$('.banner ul').css('margin-left',-841*i+"px");
			i=1;
		}
		$('.banner ul').stop().animate({'margin-left':-841*i+'px'},1000);
		$('.bottom ol li').eq(i).addClass('border').siblings('li').removeClass('border');
		switch(i){
            	case 5:
            	$('.banner h5').html('夏令营海报');
            	break;
            	case 1:
            	$('.banner h5').html('最强大脑');
            	break;
            	case 2:
            	$('.banner h5').html('房地产海报');
            	break;
            	case 3:
            	$('.banner h5').html('夏天海报');
            	break;
            	case 4:
            	$('.banner h5').html('暑假海报');
            	break;
            }
	});
	$('.btnleft').click(function(event) {
		i--;
		if(i<0){
			i=5
			$('.banner ul').css('margin-left',-841*i+"px");
			i=4;
		}
		$('.banner ul').stop().animate({'margin-left':-841*i+'px'},1000);
		$('.bottom ol li').eq(i).addClass('border').siblings('li').removeClass('border');
		switch(i){
            	case 0:
            	$('.banner h5').html('夏令营海报');
            	break;
            	case 1:
            	$('.banner h5').html('最强大脑');
            	break;
            	case 2:
            	$('.banner h5').html('房地产海报');
            	break;
            	case 3:
            	$('.banner h5').html('夏天海报');
            	break;
            	case 4:
            	$('.banner h5').html('暑假海报');
            	break;
            }
	});
    $('.bottom ol li').click(function(){
        var index=$(this).index();
        i=index;
        $('.banner ul').animate({'margin-left':index*-841+'px'},1000);
        $(this).addClass('border').siblings('li').removeClass('border');
    })
})