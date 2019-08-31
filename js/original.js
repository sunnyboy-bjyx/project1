/*
* @Author: hp
* @Date:   2019-08-14 18:55:09
* @Last Modified by:   hp
* @Last Modified time: 2019-08-23 17:42:39
*/
$(function(){
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
			$('.banner_left ul').css('margin-left',-850*i+"px");
			i=1;
			}
			$('.banner_left ul').animate({'margin-left':-850*i+'px'},1000);
			$('.bottom ol li').eq(i).addClass('border').siblings('li').removeClass('border'); 
			switch(i){
            	case 5:
            	$('.banner_left h5').html('中国风');
            	break;
            	case 1:
            	$('.banner_left h5').html('招聘海报');
            	break;
            	case 2:
            	$('.banner_left h5').html('50周年');
            	break;
            	case 3:
            	$('.banner_left h5').html('夏天');
            	break;
            	case 4:
            	$('.banner_left h5').html('外卖');
            	break;
            }
        },2000)
	}
	aa();
	$('.banner_left').mouseenter(function(){
		clearInterval(timer);
	})
	$('.banner_left').mouseleave(function(){
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
			$('.banner_left ul').css('margin-left',-850*i+"px");
			i=1;
		}
		$('.banner_left ul').stop().animate({'margin-left':-850*i+'px'},1000);
		$('.bottom ol li').eq(i).addClass('border').siblings('li').removeClass('border');
		switch(i){
                case 5:
                $('.banner_left h5').html('中国风');
                break;
                case 1:
                $('.banner_left h5').html('招聘海报');
                break;
                case 2:
                $('.banner_left h5').html('50周年');
                break;
                case 3:
                $('.banner_left h5').html('夏天');
                break;
                case 4:
                $('.banner_left h5').html('外卖');
                break;
            }
	});
	$('.btnleft').click(function(event) {
		i--;
		if(i<0){
			i=5
			$('.banner_left ul').css('margin-left',-850*i+"px");
			i=4;
		}
		$('.banner_left ul').stop().animate({'margin-left':-850*i+'px'},1000);
		$('.bottom ol li').eq(i).addClass('border').siblings('li').removeClass('border');
		switch(i){
                case 0:
                $('.banner_left h5').html('中国风');
                break;
                case 1:
                $('.banner_left h5').html('招聘海报');
                break;
                case 2:
                $('.banner_left h5').html('50周年');
                break;
                case 3:
                $('.banner_left h5').html('夏天');
                break;
                case 4:
                $('.banner_left h5').html('外卖');
                break;
            }
	});
    $('.bottom ol li').click(function(){
        var index=$(this).index();
        i=index;
        $('.banner_left ul').animate({'margin-left':index*-850+'px'},1000)
        $(this).addClass('border').siblings('li').removeClass('border');
    })
    // banner右边
    var timer1;
    var j=0;
    function right(){
      clearInterval(timer1);
      timer1=setInterval(function(){
        var li=$(' .banner1 li:last-child');
        li.css({'height':'0px','opacity':'0'});
        $('.banner1 ul').prepend(li);
        li.animate({'height':'33px'},2000)
        li.animate({'opacity':'1'},3000)
      },4000)
    }
    right();
    $('.banner1').mouseenter(function(){
        clearInterval(timer1);
    })
     $('.banner1').mouseleave(function(){
       right();
    })
     $('.btn2').click(function(){
        var value=$('.text').val();
        $('.sec_right1').append(value);
        alert('提交成功');
     })
})