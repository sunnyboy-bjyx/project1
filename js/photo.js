/*
* @Author: hp
* @Date:   2019-08-13 12:28:00
* @Last Modified by:   hp
* @Last Modified time: 2019-08-23 17:45:38
*/
$(function(){
    var i=0;
	var n=0;
	var timer;
	function aa(){
        clearInterval(timer);
        timer=setInterval(function(){
        	i++;
            console.log(i);
			if(i==5){
				n=0;
				$('.bottom ol li').eq(n).addClass('border').siblings('li').removeClass('border');
                console.log($('.bottom ol li').eq(n).addClass('border').siblings('li').removeClass('border'))
            }
			if(i>5){
			i=0;
			$('.banner ul').css('margin-left',-841*i+"px");
			i=1;
			}
			$('.banner ul').stop().animate({'margin-left':-841*i+'px'});
			$('.bottom ol li').eq(i).addClass('border').siblings('li').removeClass('border'); 
			switch(i){
            	case 5:
            	$('.banner h5').html('向日葵花海');
            	break;
            	case 1:
            	$('.banner h5').html('桥');
            	break;
            	case 2:
            	$('.banner h5').html('红日东升');
            	break;
            	case 3:
            	$('.banner h5').html('漫步彩虹下');
            	break;
            	case 4:
            	$('.banner h5').html('韵味西湖');
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
            	$('.banner h5').html('向日葵花海');
            	break;
            	case 1:
            	$('.banner h5').html('桥');
            	break;
            	case 2:
            	$('.banner h5').html('红日东升');
            	break;
            	case 3:
            	$('.banner h5').html('漫步彩虹下');
            	break;
            	case 4:
            	$('.banner h5').html('韵味西湖');
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
            	$('.banner h5').html('向日葵花海');
            	break;
            	case 1:
            	$('.banner h5').html('桥');
            	break;
            	case 2:
            	$('.banner h5').html('红日东升');
            	break;
            	case 3:
            	$('.banner h5').html('漫步彩虹下');
            	break;
            	case 4:
            	$('.banner h5').html('韵味西湖');
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