import express from 'express';
import MenuRoutes from '/routes/MenuRoutes.js';

const router = express.Router();

router.all('/', (req, res)=>{
  res.send(`Welcome to TestAPI<br><br>Documentation: <a href='https://github.com/metalvexis/ecommerce'>https://github.com/metalvexis/radiogaga</a>`);
});

router.use('/menu', MenuRoutes);

export default router;