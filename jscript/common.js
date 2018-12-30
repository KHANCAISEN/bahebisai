// JavaScript Document
$(function(){
	$(".thPark .check").mouseover(function(){
		$(".thPark .list").slideDown();
		})
	$(".thPark .list").mouseleave(function(){
		$(".location .nal-tag span").removeClass("nal-ccss");
		$(".thPark .list").slideUp();
		})
	$(".thPark").mouseleave(function(){
		$(".header .location .nal-tag span").removeClass("nal-ccss");
		$(".thPark .list").slideUp();
		})
	$(".thPark .list a:eq(4)").css("position","relative");
	
	$(".thPark .list li").mouseover(function(){
		$(this).find(".poplayer").show();
		$(this).addClass("linkcss");
		}).mouseout(function(){
			$(this).find(".poplayer").hide();
			$(this).removeClass("linkcss");
			});
	var n=0,k=0,j=0;;
	var setIN0=setInterval(function(){
		var topH0=Math.cos(Math.PI*n)*15+130;
		$(".sen0-qq0").animate({"top":topH0+"px"},1500);
		n++;
		}, 1500);
	var setIN1=setInterval(function(){
		var topH1=Math.cos(Math.PI*k)*30+140;
		$(".sen0-qq1").animate({"top":topH1+"px"},2200);
		k++;
		}, 2200);
	var setIN2=setInterval(function(){
		var topH2=Math.cos(Math.PI*j)*10+20;
		var fadeor=0.5-Math.cos(Math.PI*j);
		$(".plt-arrow").animate({"padding-top":topH2+"px","opacity":fadeor},1000);
		j++;
		}, 1000);
	})
$(function(){
$(".plate0").snowfall('clear');
$(".plate0").snowfall({
    image: "images/hb1.png",
    flakeCount:15,
    minSize: 10,
    maxSize: 80
});

	})
$(function(){
	$(".sen0-ch").css("width","0");
	var ww=1010;
	var wh=551;
	$(".font-word").css("left",ww/2);
	$(".font-word").css("top",wh/2);
	var tout0=setTimeout(function(){$(".font-word").animate({"width":ww,"height":wh,"left":0,"top":0},800,'easeInOutSine')},500);
	var tout4=setTimeout(function(){$(".sen0-ch").animate({"width":"529px"},1000);},1500);
	$(".pi-item").mouseover(function(){
		$(this).find(".it-front").fadeOut();
		$(this).find(".it-back").fadeIn();
		}).mouseleave(function(){
		$(this).find(".it-front").fadeIn();
		$(this).find(".it-back").fadeOut();
	})
	$(".p1-tag").animate({"top":"-200px"});
	$(".p1-word").animate({"left":"-2000px"});
	$(".pi-list .pi-item").css("margin-top","-1000px");
	$(".p2-word").animate({"right":"2000px"});
	$(".p2-tag").animate({"top":"-600px"});
	$(".p2-img").animate({"top":"-600px"});
	$(".p2-man").animate({"right":"-1000px"});
	$(".p2-word p").fadeOut();
	$(".p2-man img").animate({"right":"-800px"});
	$(".p2-tag span").fadeOut();
	})

/*滚动事件*/
$(function(){
	$(".plate").css("height",(1/6)*100+"%");
	var n=0;
	var ww=1010;
	var wh=551;
function scrollEvent(n){
	    sw=n*100;
		$(".scroll").animate({"top":"-"+sw+"%"},800);
		if(n==0)
		{
			var tout0=setTimeout(function(){$(".font-word").animate({"width":ww,"height":wh,"left":0,"top":0},800,'easeInOutSine')},500);
			var tout4=setTimeout(function(){$(".sen0-ch").animate({"width":"529px"},1000);},1500);
			}
		else
		{
			$(".font-word").animate({"width":0,"height":0,"left":ww/2,"top":wh/2},800)
			$(".sen0-ch").css("width","0");
			}
		if(n==1)
		{	
			var tout5=setTimeout(function(){$(".p1-word").animate({"left":"0px"},800,'easeOutBack');},100);
			var tout6=setTimeout(function(){for(var i=0;i<4;i++)
			{
			 var moveTime=i*300+800;
			 $(".pi-list .pi-item:eq("+i+")").animate({ "margin-top":"0"},moveTime,'easeOutBack');
				}},500);
			var tout7=setTimeout(function(){$(".p1-tag").animate({"top":"60px"},800,'easeOutBack');},900);
			
			}
		else
		{
			$(".p1-tag").animate({"top":"-200px"});
			$(".p1-word").animate({"left":"-2000px"});
			$(".pi-list .pi-item").css("margin-top","-1000px");
			}
		if(n==2)
		{
			var tout8=setTimeout(function(){$(".p2-word").animate({"right":"1103px"},800);$(".p2-img").animate({"top":"220px"},800);$(".p2-man").animate({"right":"0px"},800);},500);
			var tout9=setTimeout(function(){$(".p2-man img").animate({"right":"10px"},800);$(".p2-tag").animate({"top":"220px"},800);},1300);
			var tout10=setTimeout(function(){$(".p2-tag span").fadeIn(800);$(".p2-word p").fadeIn(800);},2100);
			}
		else
		{
			$(".p2-word").animate({"right":"2000px"});
			$(".p2-tag").animate({"top":"-600px"});
			$(".p2-img").animate({"top":"-600px"});
			$(".p2-man").animate({"right":"-1000px"});
			$(".p2-word p").fadeOut();
			$(".p2-man img").animate({"right":"-800px"});
			$(".p2-tag span").fadeOut();
			}
		if(n==3)
		{
			var tout11=setTimeout(function(){$(".p3-img1").animate({"top":"162px"},800);$(".p3-img2").animate({"top":"382px"},800);$(".p3-img3").animate({"left":"1066px"},800);},500);
			var tout12=setTimeout(function(){$(".p3-img0").animate({"left":"0px"},800);$(".p3-word").animate({"top":"382px"},800);$(".p3-tag").animate({"left":"1049px"},800);},1300);
			var tout12=setTimeout(function(){$(".p3-tag span").fadeIn(800);$(".p3-word p").fadeIn(800);},2100);
			}
		else
		{
			$(".p3-img0").animate({"left":"-800px"});
			$(".p3-img1").animate({"top":"-800px"});
			$(".p3-img2").animate({"top":"1500px"});
			$(".p3-img3").animate({"left":"2500px"});
			$(".p3-tag").animate({"left":"2500px"});
			$(".p3-word").animate({"top":"1500px"});
			$(".p3-tag span").fadeOut();
			$(".p3-word p").fadeOut();
			}
		if(n==4)
		{
			var tout13=setTimeout(function(){$(".p4-img1").animate({"top":"344px"},800);$(".p4-word").animate({"top":"265px"},800);$(".p4-img2").animate({"left":"1089px"},800);},500);
			var tout14=setTimeout(function(){$(".p4-img0").animate({"left":"0px"},800);$(".p4-tag").animate({"top":"265px"},800);$(".p4-img3").animate({"left":"1505px"},800);},1300);
			var tout15=setTimeout(function(){$(".p4-tag span").fadeIn(800);$(".p4-word p").fadeIn(800);},2100);
			}
		else
		{
			$(".p4-img0").animate({"left":"-800px"});
			$(".p4-img1").animate({"top":"1500px"});
			$(".p4-img2").animate({"left":"2500px"});
			$(".p4-img3").animate({"left":"2500px"});
			$(".p4-tag").animate({"top":"-800px"});
			$(".p4-tag span").fadeOut();
			$(".p4-word").animate({"top":"-800px"});
			$(".p4-word p").fadeOut();
			}
		if(n==5)
		{
			var tout13=setTimeout(function(){$(".p5-img0").animate({"left":"112px"},800);$(".p5-word").animate({"top":"261px"},800);$(".p5-img2").animate({"top":"450px"},800);},500);
			var tout14=setTimeout(function(){$(".p5-img1").animate({"left":"300px"},800);$(".p5-tag").animate({"left":"1230px"},800);$(".p5-img3").animate({"top":"450px"},800);},1300);
			var tout15=setTimeout(function(){$(".p5-tag span").fadeIn(800);$(".p5-word p").fadeIn(800);},2100);
			}
		else
		{
			$(".p5-img0").animate({"left":"-800px"});
			$(".p5-img1").animate({"left":"-800px"});
			$(".p5-img2").animate({"top":"1500px"});
			$(".p5-img3").animate({"top":"1500px"});
			$(".p5-tag").animate({"left":"2500px"});
			$(".p5-tag span").fadeOut();
			$(".p5-word").animate({"top":"-800px"});
			$(".p5-word p").fadeOut();
			}
	}
//滚动
$(".plt-arrow").click(function(){
	n++;
	var dotIndex=n+2;
	$(".contain .list-con:eq("+dotIndex+") span:eq("+dotIndex+")").addClass("dotcss").siblings("span").removeClass("dotcss");
	scrollEvent(n);
	})
$(".contain").bind('mousewheel', function(event, delta) {
    var $this = $(this),
    timeoutId = $this.data('timeoutId');
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    $this.data('timeoutId', setTimeout(function() {
        //do something
		if(delta>0)
	    {
		if(n>0)
		{
		n--;
		scrollEvent(n);
		var dotIndex=n-2;
	    $(".contain .list-con:eq("+dotIndex+") span:eq("+dotIndex+")").addClass("dotcss").siblings("span").removeClass("dotcss");
		}
		}
		else if(delta<0)
		{
		if(n<6)
		{
			if(n==5){
			var winHeight=$(window).height();
	        var prop=110/winHeight;
			sw=(5+prop)*100;
			$(".scroll").animate({"top":"-"+sw+"%"},500);
			n=6;
			}
		if(n<5)
		{
		n++;
		scrollEvent(n);
		var dotIndex=n-2;
	    $(".contain .list-con:eq("+dotIndex+") span:eq("+dotIndex+")").addClass("dotcss").siblings("span").removeClass("dotcss");
			}
		}
		}
        $this.removeData('timeoutId');
        $this = null;	
    }, 200));
    return false;	
});	
   $(".list-con span").click(function(){
	   var index0=$(this).index();
	   n=index0+2;
	   scrollEvent(n);
	   $(".contain .list-con:eq("+index0+") span:eq("+index0+")").addClass("dotcss").siblings("span").removeClass("dotcss");
	   })
 /*  $(".pi-list .pi-item").click(function(){
	   var index0=$(this).index();
	   n=index0+2;
	   scrollEvent(n);
	   $(".contain .list-con:eq("+index0+") span:eq("+index0+")").addClass("dotcss").siblings("span").removeClass("dotcss");
	   })*/
	})	