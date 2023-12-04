const bodyParser = require('body-parser');
const express = require('express');
const Books =require('../Database/schema');

const app = express();
app.use(bodyParser.json());

const getAllBooks = async (req, res) => {
  try {
    const books = await Books.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Unable to find books' });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json(book);
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to find book' });
  }
};

// Additional function for creating a book
const createBook = async (req, res) => {
  try {
    const newBook = await Books.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create book' });
  }
};

module.exports = {
  app,
  getAllBooks,
  getBookById,
  createBook,
};
