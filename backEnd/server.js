const express = require('express');
const app = express(); 
const Port = 5000;
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
app.use(cors());
app.use(express.json()); 

const pool = mysql.createPool({
    user: 'Den135',
    host: 'localhost',
    database: 'sport',
    password: '123'
});

if (pool) {
  console.log('Connect DB');
}

app.post("/registerBody", async function(req, res) {
    if (!req.body) {
        return res.status(400).json('Error req.body');
    }

    let { username, email, password, confirmPassword } = req.body;

    try {
        const connection = await pool.getConnection();
       
        const [exit] = await connection.query('SELECT username, email FROM ui WHERE username = ? OR email = ?', [username, email]);

        if (exit.length>0) {
            
            return res.status(404).json('User already exists');
        } else {
            const saltRounds = 10;
            const hash = await bcrypt.hash(password, saltRounds);

            const [result] = await connection.query('INSERT INTO ui (username, email, password) VALUES (?, ?, ?)', [username, email, hash]);
            
            connection.release();
            res.status(200).json(result);
        }   
    } catch (err) {
        console.error(err);
        return res.status(500).json('Error inserting data into the database');
    }
});

app.listen(Port, function() {
    console.log('Server is work');
});
