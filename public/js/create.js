$(function(){ 
    let tips = document.getElementsByClassName('tips');
         //用户名验证
         let nm=document.querySelector('.nam');
         nm.onblur=function () {
             let nmNum=nm.value;
             let re=/^\w{4,20}$/g;
             let rez=re.test(nmNum);
             if (rez==true) {
                 tips[2].style.display='none';
                 // tips[0].innerHTML = '格式正确';
             }else if (nmNum=='') {
                 tips[2].style.display='block';
                 tips[2].innerHTML = '用户名不能为空';
             }else{
                 tips[2].style.display='block';
                 tips[2].innerHTML = '用户名长度在4-20个字符以内';  
                 // nm.value='';
             }
         }
          //密码验证
         let pw1=document.querySelector('.pw1');
         pw1.onblur=function  () {
             let pw1Num=pw1.value;
             let re=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,20}$/g;  //密码必须有大小写字母和数字且6-20位
             let rez=re.test(pw1Num);
             if (rez==true) {
                 tips[3].style.display='none';
                 // tips[1].innerHTML = '格式正确';
             }else if(pw1Num==''){
                 tips[3].style.display='block';
                 tips[3].innerHTML = '密码不能为空';            
             }else{
                 tips[3].style.display='block';
                 tips[3].innerHTML = '请输入6-20位密码(必须有大小写及数字)';
             }
         }
         
         //确认密码验证
         let pw2=document.querySelector('.pw2');
         pw2.onblur=function () {
             if (pw2.value==pw1.value&&pw2.value!='') {
                 tips[4].style.display='none';
                 // tips[2].innerHTML = '两次输入一致';
             }else if (pw2.value=='') {
                 tips[4].style.display='block';
                 tips[4].innerHTML = '不能为空';
             }else{
                 tips[4].style.display='block';
                 tips[4].innerHTML = '两次输入不一致';
                 // pw2.value='';
             }
         }

         //验证邮箱
         let yx = document.querySelector('.yx');
         yx.onblur = function() {
             let yxads = yx.value;
             let reg = /^\w+@[a-z0-9]+(\.[a-z]{2,3}){1,2}$/g;
             let yxResult = reg.test(yxads);
             if(yxResult == true) {
                 tips[0].style.display = 'none';
                 // tips[3].innerHTML = '格式正确';
             } else if(yxads == '') {
                 tips[0].style.display = 'block';
                 tips[0].innerHTML = '请输入邮箱地址';
             } else {
                 tips[0].style.display = 'block';
                 tips[0].innerHTML = '格式不正确';
                 // yx.value = '';
             }
         }

         //验证手机号码
         let phone = document.querySelector('.phone');
         phone.onblur = function() {
             let phNumber = phone.value;
             let re = /1(31|32|34|35|36|37|38|39|50|51|57|58|86|87|88)[0-9]{8}/g;
             let wrResult = re.test(phNumber);
             if(wrResult == true && phNumber.length == 11) {
                 tips[1].style.display = 'none';
                 // tips[1].innerHTML = '格式正确';
             } else if(phNumber == '') {
                 tips[1].style.display = 'block';
                 tips[1].innerHTML = '请输入手机号';
             } else {
                 tips[1].style.display = 'block';
                 tips[1].innerHTML = '请输入11位手机号';
                 // phone.value = '';
             }
         }
})