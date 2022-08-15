import dao from './shots.dao';
import mongodb from 'mongodb';

exports.getAll=(req,res)=>{
    dao.get({player:mongodb.ObjectID(req.params.playerId)},(err,shotData)=>{
        res.send(shotData);
    })
}

exports.create=(req,res)=>{
    var shots =req.body;
    dao.create(shots,(err,shots)=>{
        res.send(shots);
    })
}