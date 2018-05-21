
window.onload=function(){
	let comComponent = {
		props:['x'],
		template:`<div class="specific">
				<a href="">
					<img :src="'images/recommend/'+x.img+'.jpg!min300jpg'" alt="">
					<p class="text">{{x.title}}</p>
				</a>
			</div>`
	}
	new Vue({
		el:'#comApp',
		data:{
			informations:[
			{img:'img1',title:'出发，从菊花盛放地起始欧派征讨'},
			{img:'img2',title:'写轻小说死路一条'},
			{img:'img3',title:'Sector.神迹'},
			{img:'img4',title:'萌望精品店'},
			{img:'img5',title:'侵城'},
			{img:'img6',title:'阿兹拉伊尔'},
			{img:'img7',title:'这个世界没救了'},
			{img:'img8',title:'佩刀'},
			{img:'img9',title:'武当高中唯一的男子汉'},
			],
		},
		components:{
			'com-component':comComponent,
		}
	});
	
}