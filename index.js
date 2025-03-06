import express from 'express';
import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.js';
import {carModel} from './models/carModel.js';
import { dbController } from './controllers/dbController.js';
import { carController } from './controllers/carController.js';
import { setRelations } from './models/relations.js';
dotenv.config();
setRelations();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome'
    });
});

// Tilføjer controller som middleware
app.use( carController, dbController);


app.get('*', (req, res) => {
    res.json({
        message: '404 - File note found'
    });
});

app.listen(port, () => {
    console.log(`Server runs a port http://localhost:${port}`);    
})