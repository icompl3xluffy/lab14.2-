import express from 'express';
import Book from '../models/books.js';

const router = express.Router();



router.post('/', async (req, res) => {
  try {
    const book = await Book.create(req.body);
   res.status(201).json(book);
  } catch (err) {
     res.status(400).json({ error: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const {id} = req.params
    const books = await Book.find();
    res.json(books);
   
  } catch (err) {
     res.status(500).json({ error: err.message });
  }
});

// router.get('/', async (req, res) => {
//   try {
//     const {id} = req.params
   
//   } catch (err) {
    
//   }
// });



// router.put('/', async (req, res) => {
//   try {
   
//   } catch (err) {
    
//   }
// }); 


router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const book = await Book.findByIdAndDelete(id);
     if (!book)
      return res.status(404)
   res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router