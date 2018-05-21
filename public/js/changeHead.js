$(function(){
	
        $('.head-btn button').click(function(){
            $('.change-head').toggle('100');
            return false;
        });
        $('.white-button').click(function(){
            $('.change-head').toggle('100');
        });
        // 获取当前选择的img路径
        let head ='';
        $('.img-area img').click(function(){
            head = $(this).attr('src');
            return head;
        });
        $('.submit').click(function(){
            $('.head img').attr('src',head);
            $('.change-head').toggle('100');

        })
})