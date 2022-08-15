import mongoose from 'mongoose';
import shotsSchema from './shots.model';

shotsSchema.statics={
    get:function(query,cb){
        this.find(query,cb);
    },
    create:function(data,cb){
        var shotData = new this(data);
        shotData.save(cb);
    }
}

var shotsModel = mongoose.model("Shots",shotsSchema,"shots");
module.exports = shotsModel;