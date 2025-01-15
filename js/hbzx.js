$(document).ready(function(){
	banner();
	news();
	roll();	
	zhuanti();
})	
	function banner(){
		var i=0;
		var timer=null;	
		//向右播
		$(".btn .next").click(function(){
			i++;
			if(i>5){
				i=0;
			}//可简写成if(index>5) index=0;
			paly()
		
		})
		
		//向左播	
		$(".banner .btn .prev").click(function(){
			i--;
			if(i<0){
				i=5;
			}
			paly();
		})
		
		//鼠标悬停小图标对应图片轮播  
		$(".banner .icon ul li").mouseover(function(){
			i=$(this).index();//点到谁就获取谁的序列号
			paly();
		})
		
		//自动轮播
		timer=setInterval(function(){
				i++;
			if(i>5){
				i=0;
			}//可简写成if(index>5) index=0;
			paly();
			},3000)
		//鼠标悬停banner，自动播放停止	
		$(".banner").hover(function(){
			clearInterval(timer);
			$(".btn").show();
			},function(){
				
			timer=setInterval(function(){
				i++;
			if(i>5){
				i=0;
			}//可简写成if(index>5) index=0;
			paly();
			},3000);	
			$(".btn").hide();	
		})	
		//封装
		function paly(){
			$(".banner .pic ul li").eq(i).addClass("active").siblings().removeClass("active");
			$(".banner .icon ul li").eq(i).addClass("on").siblings().removeClass("on");
			$(".banner .txt ul li").eq(i).addClass("show").siblings().removeClass("show");		
			
			}
	}	
	function news(){
		var i=0;
		var timer=null;	
		//鼠标悬停小图标对应图片轮播  
		$(".news .icon ul li").mouseover(function(){
			i=$(this).index();//点到谁就获取谁的序列号
			paly();
		})
		
		//自动轮播
		timer=setInterval(function(){
				i++;
			if(i>5){
				i=0;
			}//可简写成if(index>5) index=0;
			paly();
			},2000)
		//鼠标悬停news，自动播放停止	
		$(".news").hover(function(){
			clearInterval(timer);
			},function(){
				
			timer=setInterval(function(){
				i++;
			if(i>5){
				i=0;
			}//可简写成if(index>5) index=0;
			paly();
			},2000);		
		})	
		//封装
		function paly(){
			$(".news .pic ul li").eq(i).addClass("active").siblings().removeClass("active");
			$(".news .icon ul li").eq(i).addClass("on").siblings().removeClass("on");
			$(".news .txt ul li").eq(i).addClass("show").siblings().removeClass("show");		
			
			}
	}	


	function roll(){
		var oDiv=document.getElementById('div1');
		var oUl=oDiv.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		
		oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
		oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';	
		setInterval(function (){
			if(oUl.offsetLeft<-oUl.offsetWidth/2)
			{
				oUl.style.left='0';
			}
			oUl.style.left=oUl.offsetLeft-2+'px';
		}, 30);
	}

	function zhuanti(){
		$(".focus").hover(function(){			
		$(this).children("a").stop(true,false).animate({"top":"0"},100)
		$(this).children("p").stop(true,false).delay(100).animate({"bottom":"30px"},200)	
		},function(){

		$(this).children("a").stop(true,false).animate({"top":"90px"},200)	
		$(this).children("p").stop(true,false).animate({"bottom":"0px"},200)	
		})		
	}