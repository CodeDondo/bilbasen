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

    if (!data || data.length === 0) {
      res.json('No data found')
    }

  } catch (error) {
    res.send(`Error: ${error} `)
  }
});

// READ: Route til at hente detaljer
carController.get('/cars/:id([0-9]+)', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    let result = await carModel.findOne({
      where: { id: id }
    });

    if (!result) {
      return res.status(404).json({ message: "Bil ikke fundet" });
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
  const { brand, year, category } = req.body;

  if (!brand || !year || !category) {
    return res.status(400).json({ message: "Du skal udfylde alle felter" });
  }

  try {
    const data = await carModel.create(req.body)
    res.status(201).json(data)
  } catch (error) {
    res.json(`Error: ${error} `)
  }

});

// UPDATE: Route til at opdatere
carController.put('/cars/:id([0-9]+)', async (req, res) => {
  const { id } = req.params;
  const { brand, year, category } = req.body;

  if (id && brand && year && category) {
    try {
      const result = await carModel.update(
        { brand, year, category },
        { where: { id } }
      );

      if (result[0] > 0) {
        res.status(200).json({ message: "Bil opdateret succesfuldt" });
      } else {
        res.status(404).json({ message: "Bil ikke fundet" });
      }
    } catch (error) {
      res.status(500).json({
        message: `Fejl ved opdatering af carModel: ${error.message}`
      });
    }
  } else {
    res.status(400).send({
      message: "Fejl i odatering af carModel: Mangler data"
    });
  }
});

// DELETE: Route til at slette
carController.delete('/cars/:id([0-9]+)', async (req, res) => {
  const { id } = req.params;

  if (id) {

    try {
      carModel.destroy({
      where: { id }
    });

res.status(200).send({
  message: `Rækken er slettet`
});

} catch (error) {
  res.status(500).send({
    message: `Kunne ikke slette bilen: ${error.message}`
  });
}
} else {
  res.status(400).send({
    message: "Id er ugyldigt"
  });
}  
});