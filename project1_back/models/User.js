const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 500
    },
    email: {
        type: String, 
        trim: true, 
    }
})

const User = mongoose.model('User', userSchema)

module.exports={ User }