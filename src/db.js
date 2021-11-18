import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/youtube', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handlerOpen = () => console.log('Connected to DB');
const handlerError = (error) => console.log('DB Error', error);

db.on('error', handlerEror);
db.once('open', handleOpen);
