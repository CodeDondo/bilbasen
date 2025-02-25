import express from 'express';
import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.js';
import { carController } from '../controllers/carController.js';
dotenv.config();

console.log(process.env);


const app = express();
const port = process.env.PORT || 3000;

// Tilføjer controller som middleware
app.use(carController);

// Starter serveren
app.listen(4242, () => {
  console.log(`Server kører på adressen http://localhost:4242`);
});

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Velkommen'
//     });

// });

app.get('/test', async (req, res) => {
    res.send('Velkommen til bilbasen')
});

app.get('/sync', async (req, res) => {
    try {
      const resp = await sequelize.sync();
      res.send('Data successfully synchronized');
    }
    catch(err) {
      res.send(err);
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