/*
  加载模块
*/ 
let mysql = require('mysql');
let md5 = require('md5');       //加载md5的加密模块

/*
  创建与数据库的连接
*/
let connection = mysql.createConnection({
  //服务器设置
  host:"localhost", //服务器地址
  user:"6books",    //用户名
  password:"6books",  //密码
  port:"3306",    //服务器端口
  database:"6books" //数据库名
});

//进行连接
connection.connect(function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log('   数据库连接成功!!');
});


//注册用户
exports.adduser = function(data,fun){
  let sql = 'insert into user (username, password, email, phoneNumber) values (?, ?, ?, ?)';
  let params = [data.username, md5(data.password), data.email, data.phoneNumber];
  connection.query(sql, params, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    console.log('INSERT ID:', result);
    fun(result);  //使用回调函数把结果通过参数的方法传出去
  });
}

//注册用户验证
exports.yangzheng = function(name,email1,fun){
  let sql = 'SELECT * FROM `user` where username = "'+name+'" or email="'+email1+'"';
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
     fun(result);  //使用回调函数把结果通过参数的方法传出去
  });

}

//用户名登录
exports.getUser = function(username, password, fun){
  let sql ='select * from user where username="'+ username +'" and password="'+ password +'"';
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result);
  });
}

//邮箱登录
exports.getEmail = function(email, password1, fun){
  let sql ='select * from user where email="'+ email +'" and password="'+ password1 +'"';
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result);
  });
}

//手机号登录
exports.getPhoneNumber = function(phoneNumber, password2, fun){
  let sql ='select * from user where phoneNumber="'+ phoneNumber +'" and password="'+ password2 +'"';
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result);
  });
}
  
//把数据从数据库传到前台后端页面去
exports.getList = function(page_num, pro_page, fun){
  let offset = (page_num-1)*pro_page; //获取数据的偏移量

  let sql = 'select * from book limit '+offset+','+pro_page;
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    exports.getCount(function(count){
      fun(count, result);  //使用回调函数把结果通过参数的方法传出去
    });
  });
};

// 文章数据总条数的方法
exports.getCount = function(fun){
  let sql = 'select count(*) as count from book';
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result[0].count);
  });
};

//sort
exports.getRank = function(fun){

  let sql = 'select * from rank_1';
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result);
  });
};
//sort
exports.getRank2 = function(fun){

  let sql = 'select rank_2.*, rank_1.id from rank_1 inner join rank_2 on rank_1.id = rank_2.type';
  // select rank_1.*, rank_2.type from rank_1 inner join rank_2 on rank_1.id = rank_2.type;
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result);
  });
};


//添加个人信息
exports.addInformation = function(data,fun){
  let sql = 'insert into information (name,  signature, birthday, area, feelings, orientation, sex) values (?, ?, ?, ?, ?, ?, ?)';
  let params = [data.name, data.signature, data.birthday, data.area, data.feelings, data.orientation, data.sex];
  connection.query(sql, params, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    console.log('INSERT ID:', result);
    fun(result);  //使用回调函数把结果通过参数的方法传出去
  });
}


//newPrize_news
exports.getNews = function(fun){

  let sql = 'select * from news';
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result);
  });
};

exports.getList1=function(req,res,fun){
  
  let p = req.params.p*1;//路径中的p是字符串类型，要转成number；
  let start_num = (p-1)*4;
  // console.log(start_num);
  let display_num = 4;
  // let end_num = start_num*display_num;
  let sql = 'select * from `recommend` limit ' +start_num+','+display_num+'' ;
  
  connection.query(sql,function(err,result){
    if(err){
      return;
    }

    fun(result);
  
  })
}

//novel_info
exports.getList2 = function(fun){

  let sql = 'select * from book';
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result);
  });
};