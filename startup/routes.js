import { json,  } from 'express';
import { NotFoundError } from '../errors/index.js';
import authRouter from '../routes/auth.js'
import taskRouter from '../routes/tasks.js'

export const route = function (app) {
  app.use(json());

  app.get('/', (req, res, next )=>{
    res.json({
        message: "Welcome!"
    })
  });
  app.use('/auth', authRouter)
  app.use('/tasks', taskRouter)

  app.use('*', (req) => {
    throw new NotFoundError('Resource not found');
  });
};
