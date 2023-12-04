const mongoose = require('mongoose');

module.exports = {
  connect: () => {
    // Your MongoDB URI goes here
    const mongoUri = 'mongodb+srv://saurabh:saurabh1234@bookstore.mt4fni0.mongodb.net/?retryWrites=true&w=majority';

    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('Connected to DB');
    }).catch((error) => {
      console.log(`Caught an ${error}`);
    });
  }
};
