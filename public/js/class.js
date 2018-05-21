$(function(){
	$('#a1').on('click',function(){
		// alert(123);
		$('.fC').css('display','block');
		$('.fC2').css('display','none');
		$('#a2').addClass('active');
		$('#a1').removeClass('active');
	})

	$('#a2').on('click',function(){
		// alert(123);
		$('.fC2').css('display','block');
		$('.fC').css('display','none');
		$('#a1').addClass('active');
		$('#a2').removeClass('active');
	})
})

