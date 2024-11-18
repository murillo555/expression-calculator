import { Router, RequestHandler } from 'express';
import calculate from '../controllers/calculate/calculate';

const router = Router();
router.post('/', [], calculate)
export default router; 