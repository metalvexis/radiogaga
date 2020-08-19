import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes';
import { errorLogger } from './middlewares/errorLogger';

function startApp(){
  const app = express();
  const port = process.env.PORT || 3000;

  app.use( [
    bodyParser.json({type: '*/json'}),
    bodyParser.urlencoded({extended: true})
  ] );

  app.use((req, res, next)=>{
    console.log(`${req.originalUrl} ${JSON.stringify(req.body)}`);
    next();
  });

  app.use('/api', apiRoutes);

  app.use('/health', (req, res)=>{
    res.sendStatus(200);
  });

  app.use(errorLogger); // Errors sink

  app.listen(port, ()=> console.log(`App listening on port ${port}`));  
};

export {
  startApp
};