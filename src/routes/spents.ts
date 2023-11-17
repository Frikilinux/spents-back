import { Router } from 'express';
import { createSpent, getSpents } from '../controllers/spents';

const router = Router()

router.get('/', getSpents)
router.post('/', createSpent)

export default router
