import express from 'express';
import bodyParser from 'body-parser';
import carshopRouter from './routes/api/Carshops.js';
import workOrdersRouter from './routes/api/WorkOrders.js';
import path from 'path';
import __dirname from 'path';
import expressLayouts from 'express-ejs-layouts';
import { v4 as uuidv4 } from 'uuid';



const app = express();
app.locals.longId = ()=>{
  const workOrderId = uuidv4();
  return workOrderId;
}
app.use(bodyParser.json());
app.use(expressLayouts);
app.set('view engine', 'ejs');

//app.set('layout', './index2');
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));


app.use('/api/carshops', carshopRouter);
app.use('/api/workorders', workOrdersRouter);





app.get('', (req, res)=> {
 res.render('layout', {title:"mi pagina"});
})
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running successfully `);
});
