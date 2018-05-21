window.onload=function(){
	Vue.component('my-component',{
		props:['x'],
		template:`<li>
				<div class="events_img">
					<img :src="'images/'+x.img+'.jpg'" alt="">
				</div>
				<div class="events_expression">
					<h4>
						<a href="/">{{x.title}}</a>
						
					</h4>
					<span>
						{{x.date}}
					</span>
				</div>	
			</li>`
	}),
	new Vue({
		el:'#app1',
		data:{
			information:[
			{title:'愚人节特别番外短篇',date:'2018-04-01 00:27',img:'img1'},
			{title:'白色情人节人气决战',date:'2018-03-16 18:19',img:'img2'},
			{title:'「樱色の奇迹」3月征文',date:'2018-03-13 14:02',img:'img1'},
			{title:'联动少前·圣诞抽卡',date:'2017-12-25 20:25',img:'img4'},
			{title:'11月月度征文活动',date:'2017-11-21 14:24',img:'img5'},
			{title:'双11应援福利活动',date:'2017-11-01 18:49',img:'img6'},
			{title:'轻库娘的神秘小信箱',date:'2017-10-19 15:01',img:'img7'},
			{title:'第二回轻之文库新人赏',date:'2017-07-19 17:48',img:'img8'},
			{title:'征文活动·盛夏最凶都市传说',date:'2017-05-17 18:02',img:'img9'},
			],
		},
	})
}

