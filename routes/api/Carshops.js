import express from "express";
import Sequelize from "sequelize";
import db from "../../db.js";
import CarShopModel from "../../models/Carshop.js";
const router = express.Router();

const Carshop = CarShopModel(db, Sequelize);

//list carshops
router.get("/", async (req, res) => {
  try {
    const getAllCarshops = await Carshop.findAll();
    if (getAllCarshops) {
      console.log(getAllCarshops);
      res.json(getAllCarshops);
    } else {
      res.sendstatus(403);
    }
  } catch (err) {
    console.log(err);
  }
});

//addding a new carshop
router.post("/", async (req, res) => {
  try {
    const newCarshop = await Carshop.create(req.body);
    if (newCarshop) {
      res.sendstatus(200);
    } else {
      res.sendstatus(500);
    }
  } catch (err) {
    res.json(err);
  }
});

//Update a carshop
router.patch('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        await Carshop.update(req.body, {where: {id:id}});
        let carShopUpdated = await Carshop.findByPk(id);
        if(carShopUpdated){
          res.sendStatus(200);
        } else {
          res.sendStatus(500);
        }
    }catch(err){}
})

router.delete('/:id', async(req, res) => {
    try{
      const id = req.params.id;
      await Carshop.distroy(id);
      let carshopDeleted = Carshop.findOne({where:{id:id}})
      if(!carshopDeleted){
        res.sendstatus(200)
      } else{
        res.sendstatus(500)
      }
    }catch(err){
      res.json(err);
    }
})
export default router;
