import mongoose from 'mongoose';

var playerSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    shots:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shots'
    }
    ]
})

module.exports= playerSchema;