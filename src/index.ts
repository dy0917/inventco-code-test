import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import fake from './controller/fake';
import { getConfigs } from './tools/config';
dotenv.config({ path: '.env.dev' });

(async () => {
  console.log(
    'express does not start, return local configurations',
    await getConfigs()
  );

  const app = express();
  app.use(express.json());

  app.get('/', (req: Request, res: Response) => {
    res.send('Express TypeScript Server is up');
  });

  app.get('/fake/config', fake.getSettings);
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
  });

  console.log(
    'express started, return server configurations',
    await getConfigs()
  );
})();
