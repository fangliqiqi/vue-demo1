	window.onload=function(){
		//头部的文字 渲染
		let vm1 = new Vue({
			el:'#header',
			data:{
				coffee:'心情惬意，来杯咖啡吧 ☕',
				imgs:[
					{'src':'img/kv-1-mobile.jpg'},
					{'src':'img/kv-2-mobile.jpg'}	
				]
			}
		})
		//头部的轮播图 渲染
		let vm2 = new Vue({
			el:'#banna',
			data:{
				imgs:[
					{'src':'img/kv-1-mobile.jpg'},
					{'src':'img/kv-2-mobile.jpg'}
						
				]
			}
		})
		// 轮播图
		$(function(){
			var index =0;
			var timer;
			function move(){
				w2 = $('#banna li').width()
				
				$('#banna ul').animate({
					left:-w2*index
				},800)	
			}
			 clearInterval(timer);
			 	timer=setInterval(function(){
			 		index++;
			 		if(index>=2){
			 			index=0;	
			 		}
			 		move();
			 
			 		},3000);
		})
		
		//卡片 渲染
		let vm3 = new Vue({
			el:'#ul1',
			data:{
				imgs:[
					{src:'img/homepage-career-cn.jpg'},
					{src:'img/starbucks-design-studio-web-china.jpg'},
					{src:'img/starbucks-tmall-1217-cn.jpg'}
				]
			}
		})
		
		// 星享俱乐部
		let vm4 = new Vue({
			el:'#star',
			data:{
				julebu:'星享俱乐部',
				neirong:'使用星巴克App注册成为星享俱乐部新会员可获赠“圣诞特饮邀请券”的活动， 12月17日一经推出，市场反响热烈，吸引了众多顾客的参与。但同时，我们发现出现了大量的非正常访问。为维护活动的公平性，该活动现已提前结束。星巴克始终将顾客体验置于首位，我们会很快推出更多个性化活动，以回馈广大新老会员。',
				gengduo:'了解更多 >',
				as:['注册','登录'],
				imgsrc:'img/logo-msr-new.svg'
			}
		})
		
		// 星巴克精选
		let vm5 = new Vue({
			el:'#selected',
			data:{
				h5:'星巴克精选',
				p:'在星巴克天猫旗舰店发现更多咖啡心意',
				lists:[
						{src:'img/tmall-card-01.png',
						 h6:'会员星礼包',
						 p1:'星享卡新升级',
						 p2:'更多心意好礼',
						  a:'了解更多 ﹥'
						 },
						 {src:'img/tmall-card-02.png',
						 h6:'星礼卡',
						 p1:'用一份心礼',
						 p2:'让心意相随',
						 a:'了解更多 ﹥'
						 },
						 {src:'img/tmall-eticket.png',
						 h6:'电子产品券',
						 p1:'心意',
						 p2:'从这一杯开始',
						 a:'了解更多 ﹥'
						 },
						 {src:'img/tmall-reserve.png',
						 h6:'咖啡生活',
						 p1:'星巴卡',
						 p2:'用心制作',
						 a:'了解更多﹥'
						 }	
						]
					}
			})
		
		// 咖啡文化
		let vm6 = new Vue({
			el:'#culture',
			data:{
				h5:'1912 派克街 | 咖啡星讲堂',
				p:'了解更多星巴克咖啡文化',
				lists:[
						{
						  url:'url1',
						  p:'咖啡的起源与培植',
						  span:'咖啡知识',
						  },
						  {
						  url:'url2',
						  p:'咖啡调制',
						  span:'咖啡品鉴',
						  },
						  {
						  url:'url3',
						  p:'咖啡烘焙',
						  span:'咖啡知识',
						  },
						  {
						  url:'url4',
						  p:'手冲咖啡',
						  span:'咖啡品鉴',
						  }
					  ]
					}
			})
		// 尾部
		let vm7 = new Vue({
			el:'#footer',
			data:{
				lists:[
						{
						src:'img/icon-home-active.svg',
						span:'首页'
						},
						{
						src:'img/icon-stores.svg',
						span:'门店'
						},
						{
						src:'img/icon-account.svg',
						span:'我的账户'
						},
						{
						src:'img/icon-menu.svg',
						span:'菜单'
						},
						{
						src:'img/icon-more.svg',
						span:'更多'
						}
						
					]
				}
			})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
	
	
	
	
	
	
	
