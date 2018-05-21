 $(function(){ 
    let str = '23456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
    let check_code ='';
    let check_code1 ='';
    let input = document.getElementById('check_code');
    let input1 = document.getElementById('check_code1');
    let span_arr = input.getElementsByTagName('span');
    let i_arr = input1.getElementsByTagName('i');
    let tips = document.getElementsByClassName('tips');
    /*
       生成验证码
    */
    $('#check_code').on('click',function(){
        makeCode();
        changeBg();
    });
    $('#check_code1').on('click',function(){
        makeCode1();
        changeBg1();
    });
    function makeCode(){
        // 1、获取
        check_code = '';
        for(let i=1; i<=6; i++){
            let num = parseInt(Math.random()*str.length);
        // 2、处理
            check_code += str[num];
        }
        let str_arr = check_code.split('');
       
        for(let j=0; j<span_arr.length; j++){
            span_arr[j].innerHTML =  str_arr[j];
            span_arr[j].style.color=randomColor();
        }
    }
    function makeCode1(){
        // 1、获取
        check_code1 = '';
        for(let i=1; i<=6; i++){
            let num = parseInt(Math.random()*str.length);
        // 2、处理
            check_code1 += str[num];
        }
        let str_arr = check_code1.split('');
       
        for(let j=0; j<i_arr.length; j++){
            i_arr[j].innerHTML =  str_arr[j];
            i_arr[j].style.color=randomColor();
        }
    }
    // 页面初始化后第一次生成验证码
    makeCode();
    makeCode1();
    /*
        验证用户输入
    */
    $('#checkCode').on('click',function(){
        checkCode();
    });
    $('#checkCode1').on('click',function(){
        // alert(123);
        checkCode1();
    });
    function checkCode(){
        // 1、获取
        let user_code = document.getElementById('user_code').value;
        let emailValue = document.getElementById("email").value;
        
          
        if(emailValue.indexOf("@") == -1){  
                $('#myInput').focus();
                $('#myModal').modal('show');
            // alert("请输入正确的email地址");  
        }else{
            $('#myModal').modal('hide');
        }


        

        // 2、处理
        // 全部都转为小写进行对比，这样用户输入就是忽略大小写了
        if(user_code.toLowerCase() == check_code.toLowerCase()){
            // 3、反馈
            // document.getElementById('msg').innerHTML = '<font color="green">验证成功！</font>';
            if (emailValue.indexOf("@") != -1) {
                $(".tab_content").hide(); 
                $("#tab4").show();
            }
             
        }else{
                // 3、反馈
            document.getElementById('msg').innerHTML = '<font color="red">验证失败！</font>';
            makeCode();
            changeBg();
        }
    }
    function checkCode1(){
        // 1、获取
        let user_code1 = document.getElementById('user_code1').value;
        let phoneNum = document.getElementById("phoneNum").value;

         if(phoneNum.indexOf("1") == 0){  
                $('#myInput').focus();
                $('#myModal1').modal('hide');

            // alert("请输入正确的email地址");  
        }else{
            $('#myModal1').modal('show');
        }
        // 2、处理
        // 全部都转为小写进行对比，这样用户输入就是忽略大小写了
        if(user_code1.toLowerCase() == check_code1.toLowerCase()){
            // 3、反馈
            // document.getElementById('msg1').innerHTML = '<font color="green">验证成功！</font>';
           if (phoneNum.indexOf("1") == 0) {
                $(".tab_content").hide(); 
                $("#tab4").show();
            }
            
        }else{
                // 3、反馈
            document.getElementById('msg1').innerHTML = '<font color="red">验证失败！</font>';
            makeCode1();
            changeBg1();
        }
    }
    /**生成一个随机色**/
    function randomColor(){
        var r=parseInt(Math.random()*256);
        var g=parseInt(Math.random()*256);
        var b=parseInt(Math.random()*256);
        var rgb="rgb("+r+","+g+","+b+")";
        return rgb;
    }
    /**生成一个随机背景**/ 
    function changeBg(){
        var check_code=document.getElementById("check_code");
        var rand=Math.round(Math.random()*1000000);
        check_code.style.backgroundColor="#"+rand;
    }
    function changeBg1(){
        var check_code1=document.getElementById("check_code1");
        var rand=Math.round(Math.random()*1000000);
        check_code1.style.backgroundColor="#"+rand;
    }
    changeBg();
    changeBg1();


});