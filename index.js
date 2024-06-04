const express = require('express')
const app = express()
const cors = require('cors');
const corsConfig = {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}
const port = 3000
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jobRouter = require('./routes/job');
const authRouter = require('./routes/auth');
const bodyParser = require('body-parser');


dotenv.config();

const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccounts.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log('Database connected'))
.catch((err)=>console.log(err));

app.options("", cors(corsConfig));
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/jobs', jobRouter);
app.use('/api/', authRouter);

app.get('/', (req, res) => res.send('hellow world'))
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${process.env.PORT}!`));