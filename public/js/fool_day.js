window.onload=function(){
	let foolcomponent = {
		props:['x'],
			template:`<a href="#">
					<img :src="'images/'+x.img+'.jpg'" alt="">
				</a>`
	}
	
	new Vue({
		el:'#foolApp',
		data:{
			images:[
			// {images:'img1'},
			{img:'img2'},
			{img:'img3'},
			{img:'img4'},
			{img:'img5'},
			{img:'img6'},
			{img:'img7'},
			{img:'img8'},
			{img:'img9'},
			],
		},
		
		components:{
			'fool-component':foolcomponent,
		},

	})

}