$(function(){
	$(window).scroll(function(){
		if(window.scrollY>=550){
			$(".fast").fadeIn(6000);
			$(".caiyong").fadeIn(4000);
			$(".bianji").fadeIn(2000);
		}
	})
	
	$(".tu1").mouseover(function(){
		$(".tu").css("background-image","url(img/rocket2.png)");
	})
	
	$(".tu1").mouseout(function(){
		$(".tu").css("background-image","url(img/rocket1.png)");
	})
	
	$(".tu2").mouseover(function(){
		$(".tu-2").css("background-image","url(img/xiazai2.png)");
	})
	
	$(".tu2").mouseout(function(){
		$(".tu-2").css("background-image","url(img/xiazai1.png)");
	})
	
	$(".tu3").mouseover(function(){
		$(".tu-3").css("background-image","url(img/yasuo2.png)");
	})
	
	$(".tu3").mouseout(function(){
		$(".tu-3").css("background-image","url(img/yasuo1.png)");
	})
	
	
	$(".tu4").mouseover(function(){
		$(".tu-4").css("background-image","url(img/hebing2.png)");
	})
	
	$(".tu4").mouseout(function(){
		$(".tu-4").css("background-image","url(img/hwbing1.png)");
	})
	
	$(".tu5").mouseover(function(){
		$(".tu-5").css("background-image","url(img/jiexi2.png)");
	})
	
	$(".tu5").mouseout(function(){
		$(".tu-5").css("background-image","url(img/jiexi1.png)");
	})
	
	$(".tu6").mouseover(function(){
		$(".tu-6").css("background-image","url(img/wusun2.png)");
	})
	
	$(".tu6").mouseout(function(){
		$(".tu-6").css("background-image","url(img/wusun1.png)");
	})
	
//	轮播图那里
	$(".con-left").click(function(){
		var left=$(".lunbo-tu").scrollLeft();
			$(".lunbo-tu").scrollLeft(left-330);
		})
		$('.con-right').click(function(){
		var right=$(".lunbo-tu").scrollLeft();
			$(".lunbo-tu").scrollLeft(right+330);
		})
	
	
	
})
