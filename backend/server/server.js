const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB = "mongodb+srv://Muppalla:Nagendra@cluster0.ulgxz.mongodb.net/MernStack?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection`));


app.use(express.json());

app.use(require('./Routes/auth'));


app.get('/register', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(4500, () => {
    console.log(`server is runnig at port no 4000`);
})