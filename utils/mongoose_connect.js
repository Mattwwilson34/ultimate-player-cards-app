var mongoose = require('mongoose');

//Set up mongoose connection
const connectToMongoose = () => {
  var mongoDB =
    'mongodb+srv://mattwilson:shadow45@cluster0.ky1zh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => console.log('Connected to MongoDB'));
};

module.exports = connectToMongoose;
