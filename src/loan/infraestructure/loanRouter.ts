import  express  from 'express';
import { returnBookController, selectBookController,  } from './dependencies';


export const loanRouter = express.Router();


loanRouter.post('/select', selectBookController.run.bind(selectBookController));

loanRouter.post('/return', returnBookController.handle);

