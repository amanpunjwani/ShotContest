import playerController from './player.controller';
import shotsController from './shots.controller';

module.exports=(router)=>{
    router.get('/players',playerController.getAll);
    router.post('/players',playerController.create);
    router.put('/players/:id',playerController.update);
    router.delete('/players/:id',playerController.delete);

    router.get('/shots/:playerId',shotsController.getAll);
    router.post('/shots',shotsController.create)

}