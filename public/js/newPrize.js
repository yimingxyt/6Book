/**
 * Created by entor on 2018/5/9.
 */


$(document).ready(function(){
    // 新人赏菜单显示隐藏效果
    $('.menu-icon').on('click',function(){
        $('.menu').animate({'right':'0'},'slow')
    });
    $('.close').on('click',function(){
        $('.menu').animate({'right':'-200'},'slow')
    });
});

// 滚动条监听事件
$('.nav').css('background','rgba(0,0,0,0.1)');
window.onscroll=function(){
    // 改变nav样式
    let scrolltop=$(document).scrollTop();
    $(document).scroll(function(){
        if(scrolltop>300){
            $('.nav').css("background","rgba(255,255,255,1)");
            $('.page-title').css('color','#1ac0a6');
            $('#menu-icon').removeClass('menu-icon').addClass('menu-icon2');
            $('#logo').attr('src','./images/logo.png');
        }
        if(scrolltop<=300){
            $('.nav').css('background','rgba(0,0,0,0.1)');
            $('.page-title').css('color','#fff');
            $('#menu-icon').removeClass('menu-icon2').addClass('menu-icon');
            $('#logo').attr('src','./images/6book.png');
        }
    })
}

// 参赛作品页长/中/短篇组切换
$('.long').addClass('active');
$('.blue').on('click',function(){
    $('.long').addClass('active');
    $('.middle').removeClass('active');
    $('.short').removeClass('active');
});
$('.green').on('click',function(){
    $('.middle').addClass('active');
    $('.long').removeClass('active');
    $('.short').removeClass('active');
});
$('.yellow').on('click',function(){
    $('.short').addClass('active');
    $('.middle').removeClass('active');
    $('.long').removeClass('active');
});

