const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jobRouter = require('./routes/job');
const bodyParser = require('body-parser');


dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log('Database connected'))
.catch((err)=>console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/jobs', jobRouter);

app.get('/', (req, res) => res.send('hellow world'))
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${process.env.PORT}!`));