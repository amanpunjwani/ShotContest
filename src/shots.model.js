import mongoose from 'mongoose';

var shotsSchema = new mongoose.Schema({
    Date:Date,
    dateShots:Number,
    player:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Player'
    }
})

module.exports=shotsSchema;