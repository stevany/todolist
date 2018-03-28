var mongoose=require("mongoose");

//Create a schema
var userSchema=new mongoose.Schema({
	
	name: {type:String, min:0, max:500},
	priority:{type:Number, min:0, max:2},
	location: {type:String, min:0, max:273},
	username:{type:String, min:0,max:100, required:true, unique:true},
	password:{type:String, min:0, max:20, required:true},
	timeStart:{ type: Date, default: Date.now },
	})
//create model if not exists
module.exports=mongoose.model('user', userSchema);
