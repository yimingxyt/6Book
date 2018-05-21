let mysql = require('mysql');
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

exports.getList=function(req,res,fun){
	
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
