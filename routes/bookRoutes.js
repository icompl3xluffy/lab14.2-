import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();



router.post('/', async (req, res) => {
  try {
   
  } catch (err) {
    
  }
});

router.get('/', async (req, res) => {
  try {
   
  } catch (err) {
    
  }
});

router.put('/', async (req, res) => {
  try {
   
  } catch (err) {
    
  }
}); 


router.delete('/', async (req, res) => {
  try {
   const book = await Book.findByIdAndDelete(req.params.id);

   res.json({ message: 'Book deleted' });
  } catch (err) {
    
  }
});

export default router