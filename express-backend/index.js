require('dotenv').config();
const cors = require('cors');
const express = require('express');

const port = process.env.PORT;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const menuItems = require('#routes/menuItems');
const personel = require('#routes/personel');

const errorHandler = (error, req, res, next) => {
    const status = error.status || 422;
    res.status(status).send(error.message);
}   

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', menuItems);
app.use('/personel', personel);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started at ${port}`);
})
