import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import usersRoutes from './routes/users.js'
import friendsRoutes from './routes/friends.js'

const app = express();
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/users', usersRoutes)
app.use('/friends', friendsRoutes)

const CONNECTION_URL = 'mongodb+srv://admin:ynbLRO4xql8WNZtx@cluster0.0a0gnsp.mongodb.net/react?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
