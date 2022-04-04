import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from '../../build/routes';
import swaggerUi from 'swagger-ui-express';

export class Server {
  private app = express();

  constructor() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    RegisterRoutes(this.app);

    this.app.use('/docs', swaggerUi.serve, async (_req: Request, res: Response) => {
      return res.send(swaggerUi.generateHTML(await import('../../build/swagger.json')));
    });
  }

  public async listen(port: number) {
    const listen = this.app.listen(port);
    console.log(`Server running: http://localhost:${port}/docs`);
    return listen;
  }
}
