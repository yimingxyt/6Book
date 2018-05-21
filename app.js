/*
	加载模块
*/
let path = require('path')			//路径处理模块
let express = require('express');	//加载express框架
let app = express();				//执行express框架
let ejs = require('ejs');  			//加载hbs模块
let querystring = require('querystring');	//querystring这个模块主要是用于提供字符串解释的功能
let md5 = require('md5');  			//加载md5的加密模块
let cookieParser = require('cookie-parser');	//加载cookie模块
let session = require('express-session');		//加载session模块	
/*
	加载数据模块
*/ 
let User = require('./model/user') //加载数据库
let dataEngine = require('./model/recommend.js');

//设置port变量，意思为访问端口
app.set('port', process.env.PORT || 8888);

//设置views变量，意思为试图存放的目录
app.set('views', path.join(__dirname, 'views'));

//设置使用模版的后缀名
app.set('view engine', 'html');


//执行模版方法
app.engine('html', ejs.__express)

/*
	设定静态文件目录，比如本地文件
	目录为demo/public/images,访问
	网址则显示为http://localhost:3000/images
	所有不是HTML请求内容都会指向到当前目录中的public目录中去
*/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/recommend',express.static(path.join(__dirname,'public')));
//为了使用session需要对cookie进行设置
app.use(cookieParser("An"));

//设置默认的session
app.use(session({
	secret:'an',
	rsave:false,
	saveUninitialized:true
}));

//把API进行封装成文件处理
let api = require('./routes/api');
app.get('/api/getList/:p', api.getList);
app.get('/api/getList2', api.getList2);
app.get('/api/getRank', api.getRank);
app.get('/api/getRank2', api.getRank2);
app.get('/api/getNews', api.getNews);
let api2 = require('./routes/api2');
app.get('/recommend/api/getList/:p',api2.getList);

//路由处理静态页面
app.get('/', function(req, res){
	res.redirect('login');  //重定向
}); 


//获取用户信息
app.get('/getUser',function(req, res){
	// console.log(req.session.user);

	let json = {list:req.session.user};

	res.writeHead(200, {'Content-type': 'application/json'});
	res.end(JSON.stringify(json));

})




//登录页面
app.get('/login', function(req, res){
	res.render('login');  
}); 

//用户登录的方法
app.post('/login', function(req, res){
	let post = '';
	req.on('data',function(data){
		post += data;
	});

	req.on('end', function(){
		post = querystring.parse(post);
		console.log(1,post);
		let username = post.username;
		let email = post.email;
		let phoneNumber = post.phoneNumber;
		let password = md5(post.password);
		if(username){
			User.getUser(username, password, function(result){
				if(result.length <= 0){
					res.end('输入的用户名或密码有误');
				}else{
					//在session中新建一个user的属性,并且赋值为刚刚得到的用户数据
					req.session.user = result[0];
					let yonghu = req.session;
					// let username = req.session.user.username;
					// console.log(0,yonghu.user);
					// res.end()
					// res.render('/index', {title:yonghu.uers});
					// res.render('/index');
					res.redirect('/index');
				}
			});
		}
		
		if(email){
			User.getEmail(email, password, function(result){
				if(result.length <= 0){
					res.end('输入的用户名或密码有误');
				}else{
					//在session中新建一个user的属性,并且赋值为刚刚得到的用户数据
					req.session.user = result[0];
					// console.log(req.session);
					// res.end()
					res.redirect('/index');
				}
			});
		}
		
		if(phoneNumber){
			User.getPhoneNumber(phoneNumber, password, function(result){
				if(result.length <= 0){
					res.end('输入的用户名或密码有误');
				}else{
					//在session中新建一个user的属性,并且赋值为刚刚得到的用户数据
					req.session.user = result[0];
					// console.log(req.session);
					res.end()
					res.redirect('/index');
				}
			});
		}
	});
});

// //登录验证
// app.use(function(req, res, next){
// 	if(req.session.user){
// 		next();
// 	}else{
// 		res.redirect('/login');
// 	}
// });

//注册的页面
app.get('/create', function(req, res){
	console.log(66,req.session);
	res.render('create',{title:'注 册'});
});

app.get('/activity', function(req, res){
	// if (!req.session.user){
		// res.redirect('/login');
	// }else{
		res.render('activity');
	// }
	
}); 



app.get('/center', function(req, res){
	res.render('center');
});

app.get('/class', function(req, res){
	res.render('class');
});

app.get('/contrat', function(req, res){
	res.render('contrat');
});

app.get('/create', function(req, res){
	res.render('create');
});

app.get('/fool_day', function(req, res){
	res.render('fool_day');
});

app.get('/index', function(req, res){
	res.render('index');
});

app.get('/newPrize_index', function(req, res){
	res.render('newPrize_index');
});

app.get('/newPrize_news', function(req, res){
	res.render('newPrize_news');
});

app.get('/newPrize_question', function(req, res){
	res.render('newPrize_question');
});

app.get('/newPrize_result', function(req, res){
	res.render('newPrize_result');
});

app.get('/newPrize_rule', function(req, res){
	res.render('newPrize_rule');
});

app.get('/newPrize_works', function(req, res){
	res.render('newPrize_works');
});

app.get('/novel_catalogue', function(req, res){
	res.render('novel_catalogue');
});

app.get('/novel_info', function(req, res){
	res.render('novel_info');
});

app.get('/person', function(req, res){
	res.render('person');
});

app.get('/recommend/:p', function(req, res){
	dataEngine.getList(req,res,function(result){

		res.render('recommend',{data:result,title_text:'2018第18周佳作推荐',category:'活动中心'});
	});
});

app.get('/redirect', function(req, res){
	res.render('redirect');
});

app.get('/sort', function(req, res){
	res.render('sort');
});


/*	
	业务处理路由
*/

//注册用户
app.post('/create', function(req, res){
	let post = '';
	req.on('data', function(data){
		post += data;
	});

	req.on('end', function(){
		post = querystring.parse(post);
		console.log(2,post);
		let name = post.username;
		let email = post.email;
		User.yangzheng(name, email, function(result){
			console.log(result.length);
			if(result.length>0){
				res.render('redirect',{msg:'用户名或邮箱已被注册。3秒后跳转到注册页面。', url: '/create'});
				// console.log("用户名或邮箱已被注册");
			}else{
				User.adduser(post, function(result){
					if(result){
						// res.render('/Admin/htindex')
						// res.redirect('/login');
						res.render('redirect',{msg:'注册成功！3秒后跳转到登录页面。', url: 'login'});
					}else{
						res.send('输入有误，请重新提交！！');
					}
				});
			}
		});
		
	});
});
//添加个人信息
app.post('/person', function(req, res){
    let post = '';
    req.on('data', function(data){    // 绑定用户数据传输的事件
      post += data;                   // 获取post过来的数据
      // console.log(data);
    });

    req.on('end', function(){
      post = querystring.parse(post);
      console.log(post);
      User.addInformation(post, function(result){
        if(result){
          res.redirect('/index');
          // res.render('redirect', {msg:'添加成功！3秒后跳转到列表页。', url: '/index'});
        }else{
          res.send('输入有误，请重新提交')
        }
      });

    })
});

app.listen(app.get('port'), function(){
	console.log(' 	服务器开启，端口为: '+app.get('port'));
});