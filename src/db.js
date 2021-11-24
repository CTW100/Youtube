import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

const handlerOpen = () => console.log('Connected to DB');
const handlerError = (error) => console.log('DB Error', error);

db.on('error', handlerError);
db.once('open', handlerOpen);
