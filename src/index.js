import express from "express";
import { createPool } from 'mysql2/promise';

const app = express();
const pool = createPool({
    host: '192.168.100.6',
    port: 3307, 
    user: 'sg', 
    password: '12345'
});
    


app.get('/', (req, res) => {
    res.json("Hola desde Docker Viviay y Diego");
});

app.get('/ping', async(req, res) => {
    const sql = "SELECT NOW() AS 'DATE';";
    const [rows] = await pool.query(sql)[0];
    res.json(rows);
});

app.listen(4000, ()=> {
    console.log("Server on port 4000!!!");
});