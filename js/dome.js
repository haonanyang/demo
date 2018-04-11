$(document).ready(function(){
	$.each($(".wraplist>.menu"),function(){
		$(this). hover(function(){
			$(this).find("ul").stop().slideToggle(300);
		})
//		$(this).mouseout(function(){
//			$(this).find("ul").fadeOut(1000);
//		})
//		},function(){
//			$(this).children().css("display","none")
//		}

		//通过匹配li的不透明度来达到显示隐藏效果
		//$(".box >li >ul").eq(index).fadeToggle();
		//滑动动画显示或隐藏
//		$(this).children().stop().slideToggle();
	});
	$.each($("#nav>.twomenu>ul>li"),function(){
		$(this).mouseover(function(){
			$(this).find(".details").stop().fadeIn(300)
		})
		$(this).mouseout(function(){
			$(this).find(".details").stop().fadeOut(300)
		})
	})
	$.each($("#main .item_wrap .speed_cont #flashData>li"),function(){
		$(this). hover(function(){
			$(this).find(".join-cart").stop().slideToggle(300);
		})
	});
	$(function(){
		$("#main .item2_wrap .enjoy_cont .menuTitle a").hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			var index=$(this).index();
			$("#main .item2_wrap .enjoy_cont .menu-details div").eq(index).show().siblings().hide();
		})
	})
	$.each($("#main .item5_wrap .s_cont .s_cont_c ul>li"),function(){
		$(this). hover(function(){
			$(this).find(".join-cart").stop().slideToggle(300);
		})
	});
	$(function(){
		$("#main .item5_wrap .s_cont .s_cont_r .s_cont_rb a").hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			var index=$(this).index();
			$("#main .item5_wrap .s_cont .s_cont_r .s_cont_rt div").eq(index).show().siblings().hide();
		})
	})
	total2();
	function total2(){
		$("#top-menu-wrap .shop-num").html(parseInt($.cookie("total")));
		$("#header .total").html(parseInt($.cookie("total")));
		
	}
})






