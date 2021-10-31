
import Sequelize from 'sequelize';

const DB = 'PROTALLER';
const USER = 'root';
const PASS = 'root';
const HOST = '127.0.0.1';
const DIALECT = 'mysql';
const PORT = '3306'
const SOCKETPATH = '/Applications/MAMP/tmp/mysql/mysql.sock'
const sequelize = new Sequelize(DB, USER, PASS, {
  host:HOST,
  dialect: DIALECT,
  port:PORT,
  dialectOptions: {
    socketPath: SOCKETPATH
  }
});

sequelize.authenticate()
.then(()=>{
  console.log("Conectado a la base de datos");
})
.catch(err => {
console.log("Error", err);
})

sequelize.sync({ force:false})
.then(() => {
  console.log("Tablas sincronizadas exitosamente");
});
export default sequelize;