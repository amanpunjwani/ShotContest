import mongoose from 'mongoose';
import playerSchema from './player.model';

playerSchema.statics={
    get:function(query,cb){
        this.find(query,cb);
    },
    create:function(data,cb){
        var player = new this(data);
        player.save(cb);
    },
    update:function(query,updateData,cb){
        this.findOneAndUpdate(query,{$set:updateData},cb);
    },
    delete:function(query,cb){
        this.findOneAndDelete(query,cb);
    }

}

var playerModel = mongoose.model("Player",playerSchema,'player');
module.exports=playerModel;