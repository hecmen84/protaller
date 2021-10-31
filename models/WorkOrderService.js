import Sequelize  from 'Sequelize';
import db from '../db.js';

const WorkOrderServiceModel = () =>{
  const workOrderService = db.define('WORK_ORDER_SERVICES', {
    id_work_order_service:{
      type:Sequelize.INTEGER, 
      primaryKey:true,
      autoIncrement: true,
    },
    id_service: Sequelize.INTEGER,
    id_work_order: {
      type:Sequelize.STRING,
      foreingKey:true,
      autoIncrement:false
    },
    id_vehicle: Sequelize.INTEGER,
    id_mechanic: Sequelize.INTEGER,
    status: Sequelize.INTEGER,    
  },
  {timestamp:true}
  );

  return workOrderService;
}

export default WorkOrderServiceModel;