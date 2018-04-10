$(document).ready(function(){
	var $index=0;
	var flag=true;
        	
           $("#floor a").hover(
           
	           	function(){
	        		if(flag){
	        			$index=$(this).index();
		        		   	var that=$(this);
		 					$(that).children().css("display","block")
		 					$(that).siblings().children().css("display","none")
		 					$("#floor .row_active").children().css("display","block")
					}
	        	},
	        	function(){
	        			var that=$(this);
	    				$(that).children().css("display","none")
	 					$(that).siblings().children().css("display","none")
	 					$("#floor .row_active").children().css("display","block")
	        	}
            )
            $("#floor a").on("click",function(){
        		if(flag){
        			$index=$(this).index();
	        		var that=$(this);
	        		var $top=$index*485+841;
		        	 $("html,body").stop().animate({scrollTop:$top},1000,function(){
	 					$(that).addClass("row_active").siblings().removeClass("row_active");
	 					$(that).children().css("display","block")
	 					$(that).siblings().children().css("display","none")
		        	 });
        		}
        		
            });
        	$("#floorClose").on("click",function(){
        		flag=false;
        		$("#floor a").css("display","none")
        		
        	})
        	$(window).scroll(function(){
        		var height=$(window).scrollTop();
        		if(flag){
        			
	        		if(height>600){
	        			$("#floor a").css("display","block")
	        			var $qianindex=Math.floor((height-600)/495);
	        			$("#floor a").eq($qianindex).addClass("row_active").siblings().removeClass("row_active");
	        			$("#floor a").eq($qianindex).children().css("display","block");
	        			$("#floor a").eq($qianindex).siblings().children().css("display","none");
	        		}else{
	        			$("#floor a").css("display","none")
	        		}
		        }
        		if(height>150){
        			$("#top-menu-wrap").css("display","block");
        		}else{
        			$("#top-menu-wrap").css("display","none");
        		}
        		
	        })
        	$("#taskbar p").on("click",function(){
    			 $("html,body").stop().animate({scrollTop:0},1000)
    		})
})
