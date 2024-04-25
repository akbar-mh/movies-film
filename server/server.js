
const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());

app.use(cors())

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: 'contactdb'

})
app.get('/', (re, res) => {
   return res.json("from BAckend Side Data")
})

app.get('/user', (req, res) => {
   const sql = "SELECT * FROM user";
   db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data)

   })

})










 const pool = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'contactdb',
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0
 });
 
 // Middleware to parse JSON requests
 app.use(express.json());
 
 // Endpoint to handle user input and store it in the database
 app.post('/user', async (req, res) => {
   try {
     const { name, email, subject, message } = req.body;
 
     // Get a connection from the pool
     const connection = await pool.getConnection();
 
     // Insert user input into the database
     const [result] = await connection.execute('INSERT INTO user (name, email, subject, message) VALUES (?, ?, ?, ?)', [name, email, subject, message]);
 
     // Release the connection
     connection.release();
 
     res.json({ success: true, insertedId: result.insertId });
   } catch (error) {
     console.error('Error:', error);
     res.status(500).json({ success: false, error: 'Internal Server Error' });
   }
 });

app.listen(8080, () => {
   console.log("listening")
})


