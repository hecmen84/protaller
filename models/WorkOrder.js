import Sequelize  from 'Sequelize';
import db from '../db.js';

const WorkOrderModel = () =>{
  const workOrder = db.define('WORK_ORDERS', {
    id_work_order:{
      type:Sequelize.STRING, 
      primaryKey:true,
      autoIncrement: false,
    },
    id_client: Sequelize.INTEGER,
    start_date: Sequelize.DATE,
    finish_date: Sequelize.DATE,
    id_work_order_status: Sequelize.INTEGER,
    verifier: Sequelize.STRING
  },
  {timestamp:true}
  );

  const workOrderService = db.define('WORK_ORDER_SERVICES', {
    id_work_order_service:{
      type:Sequelize.INTEGER, 
      primaryKey:true,
      autoIncrement: true,
    },
    id_service: Sequelize.INTEGER,
    id_work_order: Sequelize.STRING,
    id_vehicle: Sequelize.INTEGER,
    id_mechanic: Sequelize.INTEGER,
    status: Sequelize.INTEGER,    
  },
  {timestamp:true}
  );

  workOrder.hasMany(workOrderService,{
    foreignKey:'id_work_order',
    targetKey:'id_work_order'
  });
  workOrderService.belongsTo(workOrder)

  return workOrder;
}
export default WorkOrderModel;