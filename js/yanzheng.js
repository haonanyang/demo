$(document).ready(function(){
	var flag=false;
	var flag1=false;
	$("#tele").blur(function(e){
		var tele=/^1(3|4|5|7|8)\d{9}$/;
		var tel=$("#tele").val();
		if(tel==""){
			$(".error").css("display","block")
			$(".error-mess").html(" 手机号不能为空")
			flag=false;
		}else if(!tele.test(tel)){
			$(".error").css("display","block")
			$(".error-mess").html(" 手机号格式不对")	
			flag=false;
		}else{
			$(".error").css("display","none")
			flag=true;
		}
	});
//	flag=false;
	$("#pwd").blur(function(e){
		var pwd=/^[a-z0-9_-]{6,18}$/;
		var pass=$("#pwd").val();
		if(pass==""){
			$(".error").css("display","block")
			$(".error-mess").html("密码不能为空")
			flag1=false;
		}else if(!pwd.test(pass)){
			$(".error").css("display","block")
			$(".error-mess").html("密码长度不符合要求  长度为6~18位  的非汉字字符")
			flag1=false;
		}else{
			$(".error").css("display","none")
			flag1=true;
			
		}
	});
	var flag2=false;
		$(".sign-bt").on("click",function(){
//判断账号密码格式是否正确
			if(flag&&flag1){
				var oldStr=$.cookie("User");
				if(oldStr){
//判断是否有cookie
					console.log(oldStr)
					var oldArr=oldStr.split("||");
//遍历所有的cookie
					for(var i=0;i<oldArr.length;i++){
						var userArr=oldArr[i].split("&&");
//判断账号是否在cookie中有
						if(userArr[0]==$("#tele").val()){
//判断密码是否正确
							flag2=true;
							if(userArr[1]==$("#pwd").val()){
								alert("登陆成功")
								
								window.location.href="../index.html";
								$("#wrap #loginMess").html("欢迎你"+$('#tele').val())
							}else{
								alert("密码输入错误")
							}
							break;
						}
							
						
					}
				}
//				else{
//					alert("用户名不存在 请确认或注册")
//				}
				
			}else{
				alert("用户信息格式填写错误 或重新注册")
			}
			if(!flag2){
				alert("用户名不存在 请确认或注册")
			}
			
		})
	
	
	var count=0;
	$("#main ul li .pass_type").on("click",function(){
		count++;
		if(count%2==1){
			$("#pwd[type='password']").attr('type','text')
			$("#main ul li .pass_type").html("&#xe65b;")
		}else{
			$("#pwd[type='text']").attr('type','password')
			$("#main ul li .pass_type").html("&#xe626;")
		}
	})
})
