import dao from './player.dao';

exports.getAll=(req,res)=>{
    dao.get({},(err,players)=>{
        res.send(players);
    })
}

exports.create = (req,res)=>{
    var player = req.body;
    dao.create(player,(err,player)=>{
        res.send(player);
    })
}

exports.update = (req,res)=>{
    var player = {
        "age":req.body.age
    }
    dao.update({_id:req.params.id},player,(err,player)=>{
        res.send("player Updated");
    })
}

exports.delete=(req,res)=>{
    dao.delete({_id:req.params.id},(err,results)=>{
        res.send(result);
    })
}