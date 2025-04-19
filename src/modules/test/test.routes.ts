import {  Router } from 'express';
import TestController from './test.controller';

const router = Router();

router.get('/', TestController.getTest);

export default router;