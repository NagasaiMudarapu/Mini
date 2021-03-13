const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const UserAssign = new Schema({
    name:{type: String, required:true},
    file:{type: Buffer, required:true}
}); 

// export userschema 
module.exports = mongoose.model("User", UserAssign); 
