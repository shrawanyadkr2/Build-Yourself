const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/UserDataForResume')

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    age: String,
    userImage :{
        type : String,
        default : "default.png"
    },
    usedTemplastest:[
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref:"resumeData"
        },
    ]
})

module.exports = mongoose.model("user", userSchema)