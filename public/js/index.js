
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
	// 滚动条监听事件
	window.onscroll=function(){
	    // 改变nav样式
	    let scrolltop=$(document).scrollTop();
	    $(document).scroll(function(){
	        if(scrolltop>36){
	            $('header').css({'position':'fixed','top':'0','z-index':'99'});

	        }
	        if(scrolltop<=36){
	            $('header').css('position','relative');
	        }
	    })
	}

	// 轮播
	// let box_width=$('.swipe').css('width');
	// console.log(box_width)
	// $('.swipe-view li').css()
	$(".prev-slide").click(function(){
			$("#myCarousel").carousel('prev');
		});
		// 循环轮播到下一个项目
	$(".next-slide").click(function(){
			$("#myCarousel").carousel('next');
		});
	let one = setInterval(function(){
		$("#myCarousel").carousel('next');
	},3000)
	// 手指滑动
	let swipeView = document.getElementsByClassName('carousel-inner')[0];
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
		console.log('distance为：'+distancs,);
		if(distancs>120){
			$("#myCarousel").carousel('prev');
		}
		else if(distancs<-120){
			$("#myCarousel").carousel('next');
			console.log(123);
		}
		distancs = 0;
		clearInterval(one);
		one = setInterval(function(){
			$("#myCarousel").carousel('next');
		},3000)		
	});

})

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


// 简繁切换
	//模仿语言包式的简繁转换功能插件！
	var Default_isFT = 0	//默认是否繁体，0-简体，1-繁体
	var StranIt_Delay = 1500 //翻译延时毫秒（设这个的目的是让网页先流畅的显现出来）

	//－－－－－－－代码开始－－－－－－－
	//转换文本
	function StranText(txt,toFT,chgTxt)
	{
		if(txt==""||txt==null)return ""
		toFT=toFT==null?BodyIsFt:toFT
		if(chgTxt)txt=txt.replace((toFT?"简":"繁"),(toFT?"简":"繁"))
		if(toFT){return Traditionalized(txt)}
		else {return Simplized(txt)}
	}
	//转换对象，使用递归，逐层剥到文本
	var a=1;
	function StranBody(fobj)
	{
	if(typeof(fobj)=="object"){var obj=fobj.childNodes;}
	else 
	{
	var tmptxt=StranLink_Obj.innerHTML.toString()

	if(tmptxt.indexOf("简")<0)
	{
	BodyIsFt=1
	StranLink_Obj.innerHTML=StranText(tmptxt,0,1)
	StranLink_Obj.title=StranText(StranLink_Obj.title,0,1)

	}
	else
	{
	BodyIsFt=0
	StranLink_Obj.innerHTML=StranText(tmptxt,1,1)
	StranLink_Obj.title=StranText(StranLink_Obj.title,1,1)
	}

	setCookie(JF_cn,BodyIsFt,7)
	var obj=document.body.childNodes
	}
	for(var i=0;i<obj.length;i++)
	{
	var OO=obj.item(i)
	if("||BR|HR|TEXTAREA|".indexOf("|"+OO.tagName+"|")>0||OO==StranLink_Obj)continue;

	if(OO.title!=""&&OO.title!=null)OO.title=StranText(OO.title);
	if(OO.alt!=""&&OO.alt!=null)OO.alt=StranText(OO.alt);
	if(OO.tagName=="INPUT"&&OO.value!=""&&OO.type!="text"&&OO.type!="hidden") OO.value=StranText(OO.value);
	if(OO.nodeType==3){OO.data=StranText(OO.data)}
	else StranBody(OO)
	}
	}
	function JTPYStr()
	{
	return '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄';
	}
	function FTPYStr()
	{
	return '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩';
	}
	function Traditionalized(cc){
	var str='',ss=JTPYStr(),tt=FTPYStr();
	for(var i=0;i<cc.length;i++)
	{
	if(cc.charCodeAt(i)>10000&&ss.indexOf(cc.charAt(i))!=-1)str+=tt.charAt(ss.indexOf(cc.charAt(i)));
	else str+=cc.charAt(i);
	}
	return str;
	}
	function Simplized(cc){
	var str='',ss=JTPYStr(),tt=FTPYStr();
	for(var i=0;i<cc.length;i++)
	{
	if(cc.charCodeAt(i)>10000&&tt.indexOf(cc.charAt(i))!=-1)str+=ss.charAt(tt.indexOf(cc.charAt(i)));
	else str+=cc.charAt(i);
	}
	return str;
	}

	function setCookie(name, value)	//cookies设置
	{
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	if(expires!=null)
	{
	var LargeExpDate = new Date ();
	LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
	}
	top.window.document.cookie = name + "=" + escape (value)+';domain=localhost'+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
	}

	function getCookie(Name)	//cookies读取
	{
	var search = Name + "="
	if(document.cookie.length > 0) 
	{
	offset = top.window.document.cookie.indexOf(search)
	if(offset != -1) 
	{
	offset += search.length
	end = document.cookie.indexOf(";", offset)
	if(end == -1) end = document.cookie.length
	return unescape(top.window.document.cookie.substring(offset, end))
	}
	else return ""
	}
	}

	var StranLink_Obj=document.getElementById("StranLink")
	if (StranLink_Obj)
	{
	var JF_cn="ft"+self.location.hostname.toString().replace(/\./g,"")
	var BodyIsFt=getCookie(JF_cn)
	if(BodyIsFt!="1")BodyIsFt=Default_isFT
	with(StranLink_Obj)
	{
	if(typeof(document.all)!="object") //非IE浏览器
	{
	href="javascript:StranBody()"
	}
	else
	{
	href="javascript:;";
	onclick= new Function("StranBody();return false")
	}
	title=StranText("点击以繁体中文方式浏览",1,1)
	innerHTML=StranText(innerHTML,1,1)
	}
	if(BodyIsFt=="1"){setTimeout("StranBody()",StranIt_Delay)}
	}
	//模仿语言包式的简繁转换功能插件！
	var Default_isFT = 0	//默认是否繁体，0-简体，1-繁体
	var StranIt_Delay = 1500 //翻译延时毫秒（设这个的目的是让网页先流畅的显现出来）

	//－－－－－－－代码开始－－－－－－－
	//转换文本
	function StranText(txt,toFT,chgTxt)
	{
	if(txt==""||txt==null)return ""
	toFT=toFT==null?BodyIsFt:toFT
	if(chgTxt)txt=txt.replace((toFT?"简":"繁"),(toFT?"简":"繁"))
	if(toFT){return Traditionalized(txt)}
	else {return Simplized(txt)}
	}
	//转换对象，使用递归，逐层剥到文本
	var a=1;
	function StranBody(fobj)
	{
	if(typeof(fobj)=="object"){var obj=fobj.childNodes;}
	else 
	{
	var tmptxt=StranLink_Obj.innerHTML.toString()

	if(tmptxt.indexOf("简")<0)
	{
	BodyIsFt=1
	StranLink_Obj.innerHTML=StranText(tmptxt,0,1)
	StranLink_Obj.title=StranText(StranLink_Obj.title,0,1)

	}
	else
	{
	BodyIsFt=0
	StranLink_Obj.innerHTML=StranText(tmptxt,1,1)
	StranLink_Obj.title=StranText(StranLink_Obj.title,1,1)
	}

	setCookie(JF_cn,BodyIsFt,7)
	var obj=document.body.childNodes
	}
	for(var i=0;i<obj.length;i++)
	{
	var OO=obj.item(i)
	if("||BR|HR|TEXTAREA|".indexOf("|"+OO.tagName+"|")>0||OO==StranLink_Obj)continue;

	if(OO.title!=""&&OO.title!=null)OO.title=StranText(OO.title);
	if(OO.alt!=""&&OO.alt!=null)OO.alt=StranText(OO.alt);
	if(OO.tagName=="INPUT"&&OO.value!=""&&OO.type!="text"&&OO.type!="hidden") OO.value=StranText(OO.value);
	if(OO.nodeType==3){OO.data=StranText(OO.data)}
	else StranBody(OO)
	}
	}
	function JTPYStr()
	{
	return '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄';
	}
	function FTPYStr()
	{
	return '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩';
	}
	function Traditionalized(cc){
	var str='',ss=JTPYStr(),tt=FTPYStr();
	for(var i=0;i<cc.length;i++)
	{
	if(cc.charCodeAt(i)>10000&&ss.indexOf(cc.charAt(i))!=-1)str+=tt.charAt(ss.indexOf(cc.charAt(i)));
	else str+=cc.charAt(i);
	}
	return str;
	}
	function Simplized(cc){
	var str='',ss=JTPYStr(),tt=FTPYStr();
	for(var i=0;i<cc.length;i++)
	{
	if(cc.charCodeAt(i)>10000&&tt.indexOf(cc.charAt(i))!=-1)str+=ss.charAt(tt.indexOf(cc.charAt(i)));
	else str+=cc.charAt(i);
	}
	return str;
	}

	function setCookie(name, value)	//cookies设置
	{
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	if(expires!=null)
	{
	var LargeExpDate = new Date ();
	LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
	}
	top.window.document.cookie = name + "=" + escape (value)+';domain=localhost'+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
	}

	function getCookie(Name)	//cookies读取
	{
	var search = Name + "="
	if(document.cookie.length > 0) 
	{
	offset = top.window.document.cookie.indexOf(search)
	if(offset != -1) 
	{
	offset += search.length
	end = document.cookie.indexOf(";", offset)
	if(end == -1) end = document.cookie.length
	return unescape(top.window.document.cookie.substring(offset, end))
	}
	else return ""
	}
	}

	var StranLink_Obj=document.getElementById("StranLink")
	if (StranLink_Obj)
	{
	var JF_cn="ft"+self.location.hostname.toString().replace(/\./g,"")
	var BodyIsFt=getCookie(JF_cn)
	if(BodyIsFt!="1")BodyIsFt=Default_isFT
	with(StranLink_Obj)
	{
	if(typeof(document.all)!="object") //非IE浏览器
	{
	href="javascript:StranBody()"
	}
	else
	{
	href="javascript:;";
	onclick= new Function("StranBody();return false")
	}
	title=StranText("点击以繁体中文方式浏览",1,1)
	innerHTML=StranText(innerHTML,1,1)
	}
	if(BodyIsFt=="1"){setTimeout("StranBody()",StranIt_Delay)}
	}


