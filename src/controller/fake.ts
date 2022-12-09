import { Request, Response, NextFunction } from 'express';

export default {
  getSettings: async (req: Request, res: Response) => {
    try {
      const json = {
        host: 'http://test.invenco.com',
        key: 'super secret key',
      };
      res.status(200).send(json);
    } catch (error) {
      res.sendStatus(404);
    }
  },
};
