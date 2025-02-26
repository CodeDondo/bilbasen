// Importerer express og testModel
import express from 'express';
import { carModel } from '../models/carModel.js';

// Opretter en router
export const carController = express.Router();

// READ: Route til at hente liste
carController.get('/cars', async (req, res) => {
try { 
  const result = await carModel.findAll()
  res.send(result)

if(!data || data.length === 0) {
  res.json('No data found')
}

} catch (error) {
  res.send(`Error: ${error} `)
} 
});

// READ: Route til at hente detaljer
carController.get('/cars/:id([0-9]*)', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    let result = await carModel.findOne({
      where: { id: id}
    });

    if (!result) {
      return res.status(404).json({ message: "Bil ikke fundet"});
    }
    
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: `Fejl i kald af carModel: ${error.message}`
    });
  }

});

// CREATE: Route til at oprette
carController.post('/cars', async (req, res) => {
  try {
    const result = await carModel.create(req.body)
    res.send(result)
  } catch (error) {
    res.send(`Error: ${error} `)
  }
  
});

// UPDATE: Route til at opdatere
carController.put('/cars/:id([0-9]*)', async (req, res) => {
  carModel.update()
});

// DELETE: Route til at slette
carController.delete('/cars/:id([0-9]*)', async (req, res) => {
  carModel.destroy()
});