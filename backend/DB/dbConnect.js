const mongoose=require('mongoose')
const mongo_url=process.env.MONGO_DB_STRNG || "mongodb+srv://eduportal:eduportal@cluster0.p3ewv.mongodb.net/usersDB?retryWrites=true&w=majority"
const optionsJSON={
    useUnifiedTopology:true,useNewUrlParser: true ,useCreateIndex: true
};

module.exports.connect=(cb)=>{
    mongoose.connect(mongo_url,optionsJSON,(err)=>{
        if(err){
            console.log("ERROR : ",+err.message);
        }
        else{
            cb("DB Connected...!!");
        }
    });
}

module.exports.disconnect=()=>{
    mongoose.disconnect(()=>{
        console.log("DB Disconnected...");
    });
}