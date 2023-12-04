const api=require('./store/ApiStore');
const database=require('./Database/Config');


 const app=api.app

// Connect to the database
database.connect();

// Api Routes
app.get('/books', api.getAllBooks);
app.get('/books/:id', api.getAllBooksbyId);
app.post('/books', api.createBook);
app.put('/books/:id', api.updateBook);
app.delete('/books/:id', api.deleteBook);

// Define the port for the server
const Port = process.env.PORT || 3000;

// Start the server
app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
