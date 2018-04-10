$(document).ready(function(){
	var flag=false;
	var flag1=false;
	var flag2=false;
	var flag3=false;
	
	$("#tel").blur(function(e){
		var tele=/^1(3|4|5|7|8)\d{9}$/;
		var tel=$("#tel").val();
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
	$("#pass").blur(function(e){
		var pwd=/^[a-z0-9_-]{6,18}$/;
		var pass=$("#pass").val();
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
	})
	$("#main ul li #pic-code").blur(function(e){
		var piccode=$("#main ul li #pic-code").val();
		if(piccode==""){
			$(".error").css("display","block")
			$(".error-mess").html("验证码不能为空")
			flag2=false;
		}else if(piccode==str){
			$(".error").css("display","none")
			flag2=true;
			
		}else{
			$(".error").css("display","block")
			$(".error-mess").html("验证码输入错误    请输入正确的验证码")
			flag2=false
		}
	})
	$("#main ul li #num-code").blur(function(e){
		var numcode=$("#main ul li #num-code").val();
		if(numcode==""){
			$(".error").css("display","block")
			$(".error-mess").html("手机验证码不能为空")
			flag3=false;
		}else if(numcode==str1){
			$(".error").css("display","none")
			flag3=true;
		}else{
			$(".error").css("display","block")
			$(".error-mess").html("手机验证码输入错误    请输入正确的验证码")
			flag3=false;
		}
	})
	
	$("#reg-bt").on("click",function(){
		if($("#che1").is(":checked")){
			if(flag&&flag1&&flag2&&flag3){
				var oldStr=$.cookie('User');
				
				if(oldStr==undefined){
					var str2="";
					str2+=$("#tel").val()+"&&"+$("#pass").val();
					$.cookie("User",str2,{expires:7,path:"/"})
					alert("注册成功")
				}else{
					
					var oldArr=oldStr.split("&&");
					if(oldArr[0]==$("#tel").val()){
						alert("用户名已注册")
					}else{
						str2="";
						str2+=$("#tel").val()+"&&"+$("#pass").val();
						oldStr=oldArr.join("&&")
						str2=oldStr+"||"+str2;
						$.cookie("User",str2,{expires:7,path:"/"})
						alert("注册成功")
					}
				}
				
				
				
			}else{
				alert("信息不正确 请输入正确的信息")
			}
		}else{
			alert("请阅读服务条款")
		}
//		$("#tel,#pass,#pic-code,#num-code").attr('flag',false);
		
		
	})
	/*生成验证码*/
	var str="";
	var str1="";
	var count=0;
	$("#main ul li .pass_type").on("click",function(){
		count++;
		if(count%2==1){
			$("#pass[type='password']").attr('type','text')
			$("#main ul li .pass_type").html("&#xe65b;")
		}else{
			$("#pass[type='text']").attr('type','password')
			$("#main ul li .pass_type").html("&#xe626;")
		}
	})
	pic_code();
	$("#main ul li .ver_code").on("click",function(){
		pic_code();
	});
	$("#get-code").on("click",function(){
		num_code();
	})
	function pic_code(){
		str="";
		var arr=["a","b","c","d","e","f","g","h","I","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
				"A","B","C","D","E","F","G","H","L","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
				"0","1","2","3","4","5","6","7","8","9"]
		
		for(var i=0;i<4;i++){
			str+=arr[Math.floor(Math.random()*arr.length)]
		}
		$("#main ul li .ver_code").html(str);
	}
	function num_code(){
		str1="";
		var arr1=["0","1","2","3","4","5","6","7","8","9"]
		
		for(var i=0;i<6;i++){
			str1+=arr1[Math.floor(Math.random()*arr1.length)]
		}
		$("#get-code").val(str1);
	}
	
})
