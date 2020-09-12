require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,  
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to the mongoDB!');
}).catch(error => {
    console.log('db connection error ${error.message}');
    process.exit(-1);
});

const studentRoute = require('./routes/students');

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1>');
});

app.use(express.json());

app.use('/students', studentRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));



