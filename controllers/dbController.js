// Importerer express
import express from 'express';
import dbConfig from '../config/dbConfig.js';

// Importerer de modeller der skal oprettes
import carModel from '../models/carModel.js';

// Opretter en router
export const dbController = express.Router();

// Endpoint til at synkronisere databasen
dbController.get('/sync', async (req, res) => {
  try {
    const resp = await dbConfig.sync({ force: true });
    res.send('Data successfully synchronized');
  }
  catch(err) {
    res.send(err);
  }
});