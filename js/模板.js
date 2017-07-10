
					
			var objXmlHttp = null;
			function CreatXMLHTTP () {
				//根据不同浏览器返回变量的实体对象
				if (window.ActiveXObject) {
					objXmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				} else{
					if (window.XMLHttpRequest) {
						objXmlHttp = new XMLHttpRequest();
					} else{
						alert("初始化XMLHTTP错误");
					}
				}
			}
			function GetSendData () {
				document.getElementById("javascriptAjaxContent").innerHTML = "正在加载...";
				//设置发送地址变量并赋值
				var strSendUrl = "ajax.html?data=" + Date();
				CreatXMLHTTP(); //实例化XMLHTTPRequest对象
				//open方法初始化XMLHTTPRequest
				objXmlHttp.open("GET",strSendUrl,true);
				objXmlHttp.onreadystatechange = function () {
					if (objXmlHttp.readyState == 4) { //如果请求完成加载
						if (objXmlHttp.status == 200) { //如果响应已经成功
							//显示获取的数据
							document.getElementById("javascriptAjaxContent")
							.innerHTML = objXmlHttp.responseText;
						}
					}
				}
				objXmlHttp.send(null); //send发送设置的请求
			}
		$(function () {
			
				$("#Nload").click(function () {					
					$(".need-load").load("ajax.html");
				})
				
			$("#Nload").click(function(){
			$(".need-load").css("display","block");					
		})	
		
		$("#Nload").click(function(){
		$(this).css("display","none");	
		$("#Nload1").css("display","block");
		})	
		
		
		
		$("#Nload1").click(function () {					
					$(".need-more").load("ajax1.html");
				})
		
		
		$("#Nload1").click(function(){
			$(".need-more").css("display","block");					
		})											
			$("#Nload1").click(function(){
			$(this).css("display","none");					
		})		
		
		
		$(".icon4").mouseover(function(){
			$(".weixin-tu").css("display","block");
		})
		
		$(".icon4").mouseout(function(){
			$(".weixin-tu").css("display","none");
		})
		})		
		
