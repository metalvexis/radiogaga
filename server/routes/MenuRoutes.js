import express from 'express';
import { MenuController } from 'controllers/MenuController.js';

const router = express.Router();

router.get('/menus', MenuController.getMenus);

export default router;