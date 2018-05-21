let User = require('../model/user');		// 相当于是加载数据库

exports.getList = function(req, res){
	let page_num = req.params.p;
   	let pro_page = 2;

	User.getList(page_num, pro_page, function(count, list){
		//计算总的页码数
		let count_page = Math.ceil(count/pro_page);
		//组装页码的HTML代码
		let page_html = '';

        let page_data = [];
        for(let i = 1; i <= count_page; i++){
        	let temp = {};
        	temp.number = i;
        	temp.url = '/api/getList/'+i;
        	page_data.push(temp);
        }

		let json = {list:list, page_data:page_data};

		// 一般数据建议使用JSON格式进行传输
		res.writeHead(200, {'Content-type': 'application/json'});
		res.end(JSON.stringify(json));
	});
}

exports.getRank = function(req, res){
	User.getRank(function(result){
    // res.render('sort', {title:'文章更新', data:result});
    let json = {result:result};

		// 一般数据建议使用JSON格式进行传输
		res.writeHead(200, {'Content-type': 'application/json'});
		res.end(JSON.stringify(json));
  })
}

exports.getRank2 = function(req, res){
	User.getRank2(function(result){
    // res.render('sort', {title:'文章更新', data:result});
    let json = {result:result};

		// 一般数据建议使用JSON格式进行传输
		res.writeHead(200, {'Content-type': 'application/json'});
		res.end(JSON.stringify(json));
  })
}

exports.getNews = function(req, res){
	User.getNews(function(result){
    // res.render('sort', {title:'文章更新', data:result});
    let json = {result:result};

		// 一般数据建议使用JSON格式进行传输
		res.writeHead(200, {'Content-type': 'application/json'});
		res.end(JSON.stringify(json));
  })
}


exports.getList2 = function(req, res){
	User.getList2(function(result){
    // res.render('sort', {title:'文章更新', data:result});
    let json = {result:result};

		// 一般数据建议使用JSON格式进行传输
		res.writeHead(200, {'Content-type': 'application/json'});
		res.end(JSON.stringify(json));
  })
}
