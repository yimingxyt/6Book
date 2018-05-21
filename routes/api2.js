let express = require('express');
let querystring = require('querystring');
let dataEngine = require('../model/recommend.js');

exports.getList=function(req,res){

	dataEngine.getList(req,res,function(result){
		let json = {data:result};
		res.writeHead('200',{'Content-Type':'application/json'});
		// console.log(888);
		console.log(result);
		res.end(JSON.stringify(json));
	})
}