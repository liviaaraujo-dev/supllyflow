import express, { Router, Request, Response } from 'express';
import TesteController from '../controllers/teste';

const router: Router = express.Router();

router.get('/hello', (req: Request, res: Response) => {
  TesteController.create()
  res.send('Olá a partir de uma rota separada!');
});

export default router;
