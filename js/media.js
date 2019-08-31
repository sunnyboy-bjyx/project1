/*
* @Author: hp
* @Date:   2019-08-13 18:26:01
* @Last Modified by:   hp
* @Last Modified time: 2019-08-23 17:12:45
*/
$(function(){
	var timer;
	var i=0;
	var n=0;
//     function aa(){
//          clearInterval(timer);
//          timer=setInterval(function(){
//           // var firstli=$('.banner ul li:first-child');
//           // $('.banner ul').append(firstli);

//       },1000)
//     }
//     aa();
// })
	function aa(){
        clearInterval(timer);
        timer=setInterval(function(){
            var index=$('.banner ul li').index();
            i++;
            if(i==2){
            	n=0;
            	$('.banner ol li').eq(n).addClass('circle').siblings('li').removeClass('circle');
            }
            if(i==5){
                n=0;
                $('.banner ol li').eq(n).addClass('circle').siblings('li').removeClass('circle')
            }
            if(i>5){
            	i=0;
            	$('.banner ul').css('margin-left',-1588+'px')
            	i=1;
            }
            $('.banner ul').animate({'margin-left':-1588+-602*i+'px'},500);
            $('.banner ol li').eq(i).addClass('circle').siblings('li').removeClass('circle');
            $('.banner ul li').eq(i+3).css({
                'width':'764px','height':'284px','margin-top':'0'
            }).siblings('li').css({
                'width':'602px','height':'224px','margin-top':'30px'
            })
        },2000)

	}
    $('.banner ol li').click(function(){
        var index=$(this).index()
        i=index
        $(this).eq(n).addClass('circle').siblings('li').removeClass('circle')
         $('.banner ul').animate({'margin-left':-1588+-602*index+'px'},500);
          $('.banner ul li').eq(index+3).css({
                'width':'764px','height':'284px','margin-top':'0'
            }).siblings('li').css({
                'width':'602px','height':'224px','margin-top':'30px'
            })
    })
	aa();
    $('.banner').mouseenter(function(){
        clearInterval(timer);
    })
     $('.banner').mouseleave(function(){
       aa()
    })
     $('.right').click(function(){
        i++;
            if(i==5){
                $('.banner ol li').eq(0).addClass('circle').siblings('li').removeClass('circle')
            }
            if(i>5){
                i=0;
                $('.banner ul').css('margin-left',-1588+'px')
                i=1;
            }
            $('.banner ul').stop().animate({'margin-left':-1588+-602*i+'px'},500);
            $('.banner ol li').eq(i).addClass('circle').siblings('li').removeClass('circle');
            $('.banner ul li').eq(i+3).css({
                'width':'764px','height':'284px','margin-top':'0'
            }).siblings('li').css({
                'width':'602px','height':'224px','margin-top':'30px'
            })
     })
     $('.left').click(function(){
        i--;
        if(i==-1){
            n=1;
            $('.banner ol li').eq(n).addClass('circle').siblings('li').removeClass('circle');
        }
        if(i<-2){
            i=0;
            $('.banner ul').css('margin-left',-3394+'px')
            i=2;
        }
        console.log("i="+i);
        console.log("n="+n);
        $('.banner ul').stop().animate({'margin-left':-1588+-602*i+'px'},500);
        $('.banner ol li').eq(i).addClass('circle').siblings('li').removeClass('circle');
        $('.banner ul li').eq(i+3).css({
                'width':'764px','height':'284px','margin-top':'0'
            }).siblings('li').css({
                'width':'602px','height':'224px','margin-top':'30px'
            })
     })
     // $('.banner ol li').click(function(){
     //    var index=$(this).index();
     //    $(this).addClass('circle').siblings('li').removeClass('circle');
     //    $('.banner ul').css('margin-left',(index+3)*-602+'px');
     //    $('.banner ul li').eq(index+3).css({
     //            'width':'764px','height':'284px','margin-top':'0'
     //        }).siblings('li').css({
     //            'width':'602px','height':'224px','margin-top':'30px'
     //        })
     // })
    
})
