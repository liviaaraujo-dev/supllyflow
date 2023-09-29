import { Response, Router, Request } from 'express'
import { UserController } from './controller/UserController'
import { AuthController } from './controller/AuthController';
import { AuthMiddleware } from './middlewares/AuthMiddleware';

export const router = Router();

const userController = new UserController();
const authController = new AuthController();

router.get("/", (req: Request, res: Response) => {
    res.json({ msg: "hello" });
});

router.post("/user", userController.store);
router.post("/auth", authController.authenticate);

// rota protegida de exemplo 
router.get("/users", AuthMiddleware, userController.index);
