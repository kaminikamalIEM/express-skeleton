 var User = require("../../models/user"); 
 var moment = require('moment');
module.exports = {

	first : function (req, res){
		res.render('login');
	},
	second :  function (req, res){
		var data = req.body;
		console.log(data.password);
		User.findOne({email : data.email}).exec(function (err, val){
			if(val=="" || val==null){
				return res.send("No such user exists");
			}
			if(err){
				console.log("error");
			}
            
				val.comparePassword(data.password, function (err, isMatch){
                 if(isMatch && !err){
                 	//handle sessions here
                 	req.session.name = val.email;
                 	req.session.password = val.password;
                 	req.session.logintime=moment().format('LLL');
                 	console.log("Session here:-"+req.session.name+" "+req.session.logintime);
                 	      return res.json({error : false, name : req.session.name});
                 }
                 
                 	res.send("password mismatch");
                
                 	
		        });

        });
    
    }
}
