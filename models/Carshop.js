import Sequelize  from 'Sequelize';
import db from '../db.js';

const CarshopModel = () =>{
  const carshop = db.define('CARSHOPS', {
    id:{
      type:Sequelize.INTEGER, 
      primaryKey:true,
      autoIncrement: true,
    },
    name: {type:Sequelize.STRING, allowNull:false},
    address: Sequelize.STRING,
    phone: Sequelize.STRING,
    whatsapp: Sequelize.STRING,
    facebook: Sequelize.STRING,
    person_contact: Sequelize.STRING,
    lat: Sequelize.STRING,
    lng: Sequelize.STRING,
    email: Sequelize.STRING,
    web: Sequelize.STRING,
    id_country: Sequelize.INTEGER,
    id_department: Sequelize.INTEGER,
    id_city: Sequelize.INTEGER,
    logo: Sequelize.STRING,
    id_branch_parent: Sequelize.INTEGER
  },
  {timestamp:false}
  );

  return carshop;
}

export default CarshopModel;