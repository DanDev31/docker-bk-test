import { Router } from 'express';
import testRoutes from '../modules/test/test.routes';
import userRoutes from '../modules/user/routes';


const router = Router();

router.use('/test', testRoutes);
router.use('/user', userRoutes);


export default router;