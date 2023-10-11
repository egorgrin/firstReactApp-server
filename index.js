import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import usersRoutes from './routes/users.js'
import friendsRoutes from './routes/friends.js'
import auth from './routes/auth.js';

const app = express();
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors({
  origin: 'http://localhost:3000', // Укажи свой домен клиентского приложения
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешенные методы
  credentials: true, // Разрешить запросы с учетом учетных данных
}));

app.use('/users', usersRoutes)
app.use('/friends', friendsRoutes)
app.use('/auth', auth)

const CONNECTION_URL = 'mongodb+srv://admin:ynbLRO4xql8WNZtx@cluster0.0a0gnsp.mongodb.net/react?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
