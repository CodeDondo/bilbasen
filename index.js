import express from 'express';
import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.js';
dotenv.config();

console.log(process.env);


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Velkommen'
    });

});

app.get('/test', async (req, res) => {
    try {
        await dbConfig.authenticate();
        res.status(200).send({
            message: 'Database succesfully connected'
        });
        
    } catch (error) {
        res.status(501).send({
            message: `Error: No database connection: ${error}`
        })
    }
});

app.get('*', (req, res) => {
    res.json({
        message: '404 - File note found'
    });
});

app.listen(port, () => {
    console.log(`Server runs a port http://localhost:${port}`);    
})