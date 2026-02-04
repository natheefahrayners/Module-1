import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
app.use(express.json())

const pool = mysql.createPool({
    user:'root',
    host:'localhost',
    database:'modern_tech',
    password: 'NtsapoLiyema0510'
});



app.listen(6963, () => {

  console.log('http://localhost:6963');
});