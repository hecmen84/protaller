import express from "express";
import Sequelize from "sequelize";
import db from "../../db.js";
import WorkOrderModel from "../../models/WorkOrder.js";
import WorkOrderServiceModel from "../../models/WorkOrderService.js";
import { v4 as uuidv4 } from 'uuid';
import verify from '../../helpers/verify.js';
const workOrderId = uuidv4().toString();


const router = express.Router();

const WorkOrder = WorkOrderModel(db, Sequelize);
const WorkOrderService = WorkOrderServiceModel(db, Sequelize);

  router.get("/", async (req, res) => {
    try {    
        const getAllWorkOrdes = await WorkOrder.findAll({include:[{model:WorkOrderService}]});
        if (getAllWorkOrdes) {
            res.json(getAllWorkOrdes);
      } else {
            res.sendstatus(403);
      }
      throw 'myException';
    } catch (err) {
      console.log(err);
    }
  });

router.post("/", async (req, res) => {
  try{
    req.body.id_work_order =  workOrderId;
    const verifier = verify();
    //req.body.verifier = verifier;    
    const newWorkOrder = await WorkOrder.create(
      req.body
    );
    //req.body.id_work_order = workOrderId;
    const newWorkOrderService = await WorkOrderService.create({
      id_service: req.body.id_service,
      id_vehicle:req.body.id_vehicle,
      id_mechanic:req.body.id_mechanic,
      id_work_order:req.body.id_work_order,
      status:req.body.status
    });
      if (newWorkOrderService ) {
      res.send({message:"Exito"})
      } else {
      res.send({message:"error"});
      }
    throw 'myException';
  } catch(err){
    res.send(err.message);
  }
})

//update the work order and services
router.patch('/:id', async (req, res) => {
  try{
    const id = req.params.id;
        await WorkOrder.update(req.body, {where: {id_work_order:id}});
        let workOrderUpdated = await WorkOrder.findByPk(id);
        await WorkOrderService.update(req.body, {where: {id_work_order:id}});
        let workOrderServiceUpdated = await WorkOrderService.findByPk(id);
        if(workOrderUpdated){
          res.sendStatus(200);
        } else {
          res.sendStatus(500);
        }
        throw 'myException';
  }      
  catch(err){
    res.send(err);
  }        
})

//delete a work order
router.delete('/:id', async (req, res) => {
  try{
    const id = req.params.id;
        //deleting the work order
        await WorkOrder.destroy({where: {id_work_order:id}});
        let workOrderDeleted = await WorkOrder.findByPk(id);
        
        if(!workOrderDeleted){
          res.sendStatus(200);
        } else {
          res.sendStatus(500);
        }
        throw 'myException';
  }      
  catch(err){
    res.send(err);
  }        
})
export default router