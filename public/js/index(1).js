$(function(){
	// 标签页
	$('.title a').removeClass();
	$('.title a:first-child').addClass('active');
	$('.title a').click(function(){
		// 标签头
		$('.title a').removeClass();
		$(this).addClass('active');
		return false;
	});
	// 轮播
	// 点击
	let index =1;
	$('.pre').click(function(){
		index--;
		if(parseInt($('.swipe-view').css('left'))>0){
			$('.swipe-view').stop().css({left:'-2080px'});
			$('.swipe-view').animate({left:'+='+'350px'},'slow');
			index = 6;
		}else{
			$('.swipe-view').animate({left:'+='+'350px'},'slow');
		}
	});
	$('.next').click(function(){
		index++;
		if(parseInt($('.swipe-view').css('left'))<-2400){
			$('.swipe-view').stop().css({left:'-320px'});
			$('.swipe-view').animate({left:'+='+'-350px'},'slow');
			index = 1;
		}else{
		$('.swipe-view').animate({left:'+='+'-350px'},'slow');
		}
	});

	let one = setInterval(function(){
		$('.next').click();
	},3000)
	// 手指滑动
	let swipeView = document.getElementsByClassName('swipe-view')[0];
	let startX=0;//开始时x坐标
	let distance = 0;//移动距离
	let move = false;
	// 手指触摸位置
	swipeView.addEventListener('touchstart',function(e){
		clearInterval(one);
		startX=e.touches[0].clientX;
		console.log('startX为：'+startX);
	});
	// 手指移动距离
	swipeView.addEventListener('touchmove',function(e){
		move = true;
		distancs = e.touches[0].clientX - startX;
	});
	swipeView.addEventListener('touchend',function(e){
		// console.log(distancs);
		console.log('distance为：'+distancs,'left为：'+$('.swipe-view').css('left'));
		if(distancs>0){
			$('.pre').click();
			console.log('xx');
			 console.log(distancs);
			distance=0;
			console.log(distancs);

		}
		else if(distancs<0){
			$('.next').click();
			console.log('yx');
			console.log(distancs)
		}
		one = setInterval(function(){
			$('.next').click();
		},3000)

	});

})
// vue
// Vue.component('index',{
// 	data:function(){
// 		return {
// 			data:{
// 			show:true,
// 			currentTab: 'all',
// 			tabs:[
// 				{name:'all',chinese:'所有'},
// 				{name:'school',chinese:'学校'},
// 				{name:'love',chinese:'恋爱'},
// 				{name:'huanxiang',chinese:'幻想'},
// 				{name:'fight',chinese:'战斗'},
// 				{name:'gaoxiao',chinese:'搞笑'},
// 				],
// 			},
// 		}
// 	},

// })
// Vue.component('NavTop',{

// 	data:function(){
// 		return {
// 			show:true,

// 			login:false,
// 			user_info:{},
// 		}
// 	},
// 	template:`
// 		<header>
// 	        <!-- logo及隐藏菜单按钮 -->
// 	        <div class="logo">
// 	            <a href="index" class="logo-img"></a>
// 	            <button class="dowm-menu" @click="animate()">
// 	                <span class="icon-bar"></span>
// 	                <span class="icon-bar"></span>
// 	                <span class="icon-bar"></span>
// 	            </button>
// 	        </div>
// 	        <!-- 隐藏菜单 -->
// 	        <div class="menu" v-if="show">
// 	            <ul class="nav navbar-nav">
// 	                <li><a href="./class">全部分类</a></li>
// 	                <li><a href="./sort">排行榜<span class="new"></span></a></li>
// 	                <li>
// 	                    <form action="/search/" id="nav_search_form" class="navbar-form nav-search-form" role="search" method="GET">
// 	                        <div class="nav-search-bar">
// 	                            <input type="text" class="form-control" name="kw" id="nav_search_ipt" placeholder="你好！小丑小姐" autocomplete="off">
// 	                            <button class="btn btn-default" type="submit"></button>
// 	                        </div>
// 	                    </form>
// 	                </li>
// 	                <li class="jianfan"><a name="StranLink" id="StranLink">简繁切换</a></li>
// 	                <li v-show="login" class="logined logined1"><span></span><a href="./person">热烈欢迎:  {{user_info.username}}同志</a></li>
// 	                <!-- <li v-show="login" class="logined logined1"><span></span><a href="./person">个人中心</a></li> -->
// 	                <li v-show="login" class="logined logined2"><span></span>收藏夹</li>
// 	                <li v-show="login" v-if="login" class="logined logined3" @click="tuichu()"><span></span>退出登录</li>
// 	                <li v-show="!login"v-if="!login"><a href="/login">登录</a></li>
// 	                <li v-show="!login">注册</li>
// 	                <li>
// 	                    <a href="#" class="btn btn-primary submit-novel">
// 	                        <i class="icon-edit"></i>
// 	                        <span class="nav-label">投稿</span>
// 	                        <!-- <span class="nav-label">{{user_info.username}}</span> -->
// 	                    </a>
// 	                </li>
// 	            </ul>
// 	        </div>
// 	        <!--隐藏菜单end -->
// 	    </header>
// 	`,
// 	methods:{
// 		animate:function(){
// 			$('.menu').toggle('100');
// 		},
// 		tuichu:function(){
// 			this.login=false;
// 			this.user_info={};
// 		}
// 	},
// 	mounted:function(){
// 		let that=this;
// 		$.ajax({
// 			url: '/getUser',
// 			type: 'GET',
// 			dataType: 'json',
// 			success: function(msg){
// 				that.user_info=msg.list;
// 				console.log(1,that.user_info);

// 				if(that.user_info){
// 					that.login=true;
// 				}
// 		    }
// 		});
// 	},
// });

let xx1 = new Vue({
	el:"#xx",
	data:{
		show:true,
		login:false,
		currentTab: 'all',
		party:'comment',
		tabs:[
			{name:'all',chinese:'所有'},
			{name:'school',chinese:'学校'},
			{name:'love',chinese:'恋爱'},
			{name:'huanxiang',chinese:'幻想'},
			{name:'fight',chinese:'战斗'},
			{name:'gaoxiao',chinese:'搞笑'},
		],
		user_info:{},//???

	},
	methods:{
		animate:function(){
			$('.menu').toggle('100');
		},
		tuichu:function(){
			this.login=false;
			this.user_info={};
		}
	},
	components:{
		all:{
			template:`<div><ul id="all" class="content tab-show" v-for="book in all1">
					<li class="row novel">
						<a href="./novel_info" class="col-xs-3">
							<img :src="book.src">
						</a>
						<div class="col-xs-9" >
							<h5>{{book.title}}</h5>
							<p>{{book.content}}</p>
							<span>{{book.name}}</span>
							<span>{{book.code}}</span>
						</div>
					</li>
				</ul></div>`,
			data:function(){
				return {
					all1:[
						{title:'圣瓦尔基里见习特务备忘录',src:'./images/1.jpg',content:'Only the dead have seen the end of war.'+
							'只有死者才能看到战争的终结。（柏拉图）',name:'南尼喜嘛斯嘎',code:'94.5万字'},
						{title:'圣瓦尔基里见习特务备忘录',src:'./images/1.jpg',content:'第二个',name:'南尼喜嘛斯嘎',code:'94.5万字'},
						{title:'圣瓦尔基里见习特务备忘录',src:'./images/1.jpg',content:'第三个',name:'南尼喜嘛斯嘎',code:'94.5万字'},
						{title:'圣瓦尔基里见习特务备忘录',src:'./images/1.jpg',content:'第4个',name:'南尼喜嘛斯嘎',code:'94.5万字'},
					],
				}
			}
		},

		school:{
			template:`<div><ul id="all" class="content tab-show" v-for="book in school1">
					<li class="row novel">
						<a href="" class="col-xs-3">
							<img :src="book.src">
						</a>
						<div class="col-xs-9" >
							<h5>{{book.title}}</h5>
							<p>{{book.content}}</p>
							<span>{{book.name}}</span>
							<span>{{book.code}}</span>
						</div>
					</li>
				</ul></div>`,
			data:function(){
				return {
					school1:[
							{title:'多角恋爱报告书',src:'./images/duojiao.jpg',content:'人们常说，没有恋爱的青春期是不完整的.'+
										'恋爱能够让人成长，能够让人变强，能够让人感觉到人生的美好。同样，恋爱会让人受伤，会让人心痛，说不定还会让人一蹶不振。'+
										'然而纵然会有欢笑也会有伤痛，少年少女们依然向往恋爱，因为这是青春期中或不可缺的部分。'+
										'可如果恋爱变成了义务的话，他与她的相逢，又会带来怎么样的变化呢？',name:'奇迹队长',code:'57.2万字'},
							{title:'多角恋爱报告书',src:'./images/duojiao.jpg',content:'第二个',name:'奇迹队长',code:'57.2万字'},
							{title:'多角恋爱报告书',src:'./images/duojiao.jpg',content:'第三个',name:'奇迹队长',code:'57.2万字'},
						],
				}
			}
		},
		love:{
			template:`<div><ul id="all" class="content tab-show" v-for="book in love1">
					<li class="row novel">
						<a href="" class="col-xs-3">
							<img :src="book.src">
						</a>
						<div class="col-xs-9" >
							<h5>{{book.title}}</h5>
							<p>{{book.content}}</p>
							<span>{{book.name}}</span>
							<span>{{book.code}}</span>
						</div>
					</li>
				</ul></div>`,
			data:function(){
				return {
					love1:[
							{title:'无尽白银之械',src:'./images/wujin.jpg',content:'兄妹二人在双亲的要求之下，离开村庄，踏入了陌生而新鲜的世界。'+
									'家人赠与两人的临行礼物，是一切争端的源头——魔装。新的相遇，带来了新的契机，最初的目的渐渐发生改变。'+
									'诡异的结社不知为了何种目的而纠缠不清；从出生以来就被依赖的帝国暗波涌动；权力与帝国相当的教廷重复着自相矛盾的行动……究竟应该相信谁？还是谁都无法相信？'+
									'战斗与恋爱编织的物语，于此展开——',name:'沐之晴',code:'112.2万字'},
							{title:'无尽白银之械',src:'./images/wujin.jpg',content:'第二个',name:'沐之晴',code:'112.2万字'},
							{title:'无尽白银之械',src:'./images/wujin.jpg',content:'第三个',name:'沐之晴',code:'112.2万字'},
						]
				}
			}
		},
		huanxiang:{
			template:`<div><ul id="all" class="content tab-show" v-for="book in huanxiang1">
					<li class="row novel">
						<a href="" class="col-xs-3">
							<img :src="book.src">
						</a>
						<div class="col-xs-9" >
							<h5>{{book.title}}</h5>
							<p>{{book.content}}</p>
							<span>{{book.name}}</span>
							<span>{{book.code}}</span>
						</div>
					</li>
				</ul></div>`,
			data:function(){
				return {
					huanxiang1:[
							{title:'法师涅密斯游记',src:'./images/fashi.jpg',content:'面对神祗的教堂，她谦恭低头。面对恶魔的诱惑，她谨慎深思。对友好者展露微笑。对图谋者回以利刃。神祗，恶魔神权，王座英雄，传奇“虔诚的信仰，廉价的友情，甜蜜的爱唯有神祗才是内心的基准？”诸神注视的大陆，一个渺小的擅闯者默默前行。',
							name:'南华',code:'150.6万字'},
							{title:'法师涅密斯游记',src:'./images/fashi.jpg',content:'第二个',name:'沐之晴',code:'112.2万字'},
							{title:'法师涅密斯游记',src:'./images/fashi.jpg',content:'第三个',name:'沐之晴',code:'112.2万字'},
						]
				}
			}
		},
		fight:{
			template:`<div><ul id="all" class="content tab-show" v-for="book in fight1">
					<li class="row novel">
						<a href="" class="col-xs-3">
							<img :src="book.src">
						</a>
						<div class="col-xs-9" >
							<h5>{{book.title}}</h5>
							<p>{{book.content}}</p>
							<span>{{book.name}}</span>
							<span>{{book.code}}</span>
						</div>
					</li>
				</ul></div>`,
			data:function(){
				return {
					fight1:[
							{title:'黑城学园的最强传说',src:'./images/fight.jpg',content:'2061年，为了应对全球人口的老龄人比例逐步上升这个情况，各国政府联合发布并全力推行名为“新人类培养计划”的方案。而去年8月，作为大力推行“新人类培养计划”的其中一个国家的东之国宣布创立“黑城学园”，并在世界范围内招收所有有助于帮助计划推行的学生。而这个黑城学园名义上虽然是学校，但实质上却是由学生来进行学校管理的“无法地带”。今天，那个男人来到了这里。而他的到来，不管是好是坏都会让这座黑色之城迎来变化吧。',
							name:'奇迹队长',code:'93.6万字'},
							{title:'黑城学园的最强传说',src:'./images/fight.jpg',content:'第二个',name:'奇迹队长',code:'93.6万字'},
							{title:'黑城学园的最强传说',src:'./images/fight.jpg',content:'第三个',name:'奇迹队长',code:'93.6万字'},
						]
				}
			}
		},
		gaoxiao:{
			template:`<div><ul id="all" class="content tab-show" v-for="book in gaoxiao1">
					<li class="row novel">
						<a href="" class="col-xs-3">
							<img :src="book.src">
						</a>
						<div class="col-xs-9" >
							<h5>{{book.title}}</h5>
							<p>{{book.content}}</p>
							<span>{{book.name}}</span>
							<span>{{book.code}}</span>
						</div>
					</li>
				</ul></div>`,
			data:function(){
				return {
					gaoxiao1:[
							{title:'梅斯法尼亚大陆的红龙殿下',src:'./images/gaoxiao.jpg',content:'她，身披重甲，穿梭于战场之间，英武如同神明。她，执掌一方，君临与万灵之上，凌驾诸多帝王。她是大陆上那璀璨的光华，照耀着世间万物。她又是那绝对的威严，支配着无尽的恐怖。她，好似那和煦的阳光，温暖着友善之人。她，又如同凛冽的寒风，将敌对之人拉入死亡的深渊。全大陆的生灵都知晓她的名字。红色魅影。死亡之歌。她就是，尤璐璐殿下。——节选自《梅斯法尼亚大陆吟游篇·扉页》阖上书，尤璐璐斜着眼看着面前正在奋笔疾书的迪拉格，一脸的不满。“改掉改掉，一句话就足够了！”“改啥？”“全大陆最萌最可爱的，自然就是尤璐璐大人啦！——这样。”',
							name:'百分百勾兑黑加仑',code:'150.6万字'},
							{title:'梅斯法尼亚大陆的红龙殿下',src:'./images/gaoxiao.jpg',content:'第二个',name:'百分百勾兑黑加仑',code:'82.7万字'},
							{title:'梅斯法尼亚大陆的红龙殿下',src:'./images/gaoxiao.jpg',content:'第三个',name:'百分百勾兑黑加仑',code:'82.7万字'},
						]
				}
			}
		},
		day:{
			template:`<div><ul id="all" class="content tab-show" v-for="book in day1">
					<li class="row novel">
						<a href="" class="col-xs-3">
							<img :src="book.src">
						</a>
						<div class="col-xs-9" >
							<h5>{{book.title}}</h5>
							<p>{{book.content}}</p>
							<span>{{book.name}}</span>
							<span>{{book.code}}</span>
						</div>
					</li>
				</ul></div>`,
			data:function(){
				return {
					day1:[
							{title:'暴走吧！校园事务所！',src:'./images/fashi.jpg',content:'  为了成为可以回报桐野家养育之恩的男子汉，键二选择了去到远方的学校开始独自生活，打工学习，锻炼自己的能力。但是偷偷跳级跟来的两个妹妹却是打破了他的计划。顿时间键二面临巨大的经济压力，单靠打工已经无法支撑起他们三个人的生活了！！！在这个时候，他的选择是什么？！',
							name:'雪色三棱镜',code:'83.8万字'},
							{title:'暴走吧！校园事务所！',src:'./images/fashi.jpg',content:'第二个',name:'雪色三棱镜',code:'83.8万字'},
							{title:'暴走吧！校园事务所！',src:'./images/fashi.jpg',content:'第三个',name:'雪色三棱镜',code:'83.8万字'},
						]
				}
			}
		},
		hougong:{
			template:`<div><ul id="all" class="content tab-show" v-for="book in hougong1">
					<li class="row novel">
						<a href="" class="col-xs-3">
							<img :src="book.src">
						</a>
						<div class="col-xs-9" >
							<h5>{{book.title}}</h5>
							<p>{{book.content}}</p>
							<span>{{book.name}}</span>
							<span>{{book.code}}</span>
						</div>
					</li>
				</ul></div>`,
			data:function(){
				return {
					hougong1:[
							{title:'灵魂祭典',src:'./images/hougong.jpg',content:'公元2015年诡异混乱，出生率和死亡率大幅上涨。“死神”的存在悄无声息，他们将人类的灵魂视为最可口的食物。像是为了纠正这个早已扭曲的世界，能够认知“死神”存在的“适应者”也开始渐渐在人类之中出现。中苏混血的美少女刑警队长的突然出现，让平凡生活的少年渐渐发现自己的生活开始无可逆转的跌入“死神”与人类的纷争之中......各类“死神”的灵魂收割，禁忌“魂能武器”的封印解除；少年与少女们的命运舞曲开始交错，“死神”与“适应者”的血腥乐章正式奏响。以灵魂作为贡品的盛大祭典在此上演！',
							name:'灯雨黄昏',code:'64.6万字'},
							{title:'灵魂祭典',src:'./images/hougong.jpg',content:'第二个',name:'灯雨黄昏',code:'64.6万字'},
							{title:'灵魂祭典',src:'./images/hougong.jpg',content:'第三个',name:'灯雨黄昏',code:'64.6万字'},
						]
				}
			}
		},
		comment:{
			template:`
				<div><li class="row " v-for='wen in comment' currentTab = "comment">
						<a href="" class="col-xs-4"><img :src="wen.src"></a>
						<div class="col-xs-8">
						<h5><b>{{wen.title}}</b></h5>
						<p>{{wen.content}}</p>
						</div>

					</li></div>
			`,
			data:function(){
				return {
					comment:[
						{src:'./images/comment1.jpg',title:'出发，从菊花盛放地起始欧派征讨',content:'为什么我身边会有那么重的恶魔气息？是谁在我身边呼气？什么什么！睡在我身边的居然是个女孩！而且还不是是普通的女孩，她那压迫性的气息简直能媲美魔王。什么！你说她就是传说中的魔王？如果她真是魔王的话，那我就是那个发誓要击败她的勇者！但是等等，为什么自己胸口会有沉甸甸的感觉？难道说，现在的自己和她是一样，是一个“妹纸！”不，不要啊！！！！'},
						{src:'./images/comment2.jpg',title:'写轻小说死路一条',content:'轻小说是不可能写的，这辈子都不会写的（）'},
						{src:'./images/comment3.jpg',title:'Sector.神迹',content:'该作品为神迹系列前传，以轻小说风格写作。故事主要讲述平凡少年李铭佑在某一天邂逅了迷之少女奥卡德.艾莉。少女自称天上的神灵，但是神灵都是这个样子吗，李铭佑不明所以。他更不知道的是从此之后他将变得不再平凡，并因此卷入一个巨大的深渊。'},
						{src:'./images/comment2.jpg',title:'出发，从菊花盛放地起始欧派征讨',content:'为什么我身边会有那么重的恶魔气息？是谁在我身边呼气？什么什么！睡在我身边的居然是个女孩！而且还不是是普通的女孩，她那压迫性的气息简直能媲美魔王。什么！你说她就是传说中的魔王？如果她真是魔王的话，那我就是那个发誓要击败她的勇者！但是等等，为什么自己胸口会有沉甸甸的感觉？难道说，现在的自己和她是一样，是一个“妹纸！”不，不要啊！！！！'},

					]
				}
			},
		}

	},
	computed:{
		currentTabComponent:function(){
			return this.currentTab;
		}
	},

	mounted:function(){
		let that=this;
		$.ajax({
			url: '/getUser',
			type: 'GET',
			dataType: 'json',
			success: function(msg){
				that.user_info=msg.list;

				console.log(1,that.user_info);

				if(that.user_info){
					that.login=true;
				}
		    }
		});
	},

});

