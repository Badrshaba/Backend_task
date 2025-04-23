import db_connection from '../DB/connection.js';
import { globalResponse } from './middlewares/global-response.middleware.js';
import * as routers from './modules/index.routes.js';

export const initiateApp = (app, express) => {
  const port = process.env.PORT || 5000;
  app.use(express.json());

  db_connection();
  app.use('/course', routers.courseRouter);

  app.use('*', (req, res, next) => {
    return res.status(404).json({
      message: 'Not Found',
    });
  });

  app.use(globalResponse);

  app.listen(port, () => console.log(`E-commerce app listening on port ${port}!`));
};
