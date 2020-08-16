var db = require('./db');

module.exports ={
	
	
	
	insert: function(user, callback){
		var sql = "INSERT INTO users VALUES (null,'"+user.name+"','"+user.comName+"','"+user.contact+"','"+user.username+"','"+user.password+"','"+user.type+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		})
	}
}