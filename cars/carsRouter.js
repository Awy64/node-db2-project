const express = require('express');
const router = express.Router();

const db = require('../data/db-config');

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars)
    })
    .catch(err => {
      res.status(500).json({message: "failed to retrieve cars"})
    })
})

router.get("/:id", async (req, res) => {
  const {id} = req.params;
  try{
    const carById = await db("cars").where("carID", id);
    res.status(200).json(carById)
  } catch{
    res.status(500).json({message: "failed to find car by id"})
  }
})

router.get("/vin/:vin", async (req, res) => {
  const {vin} = req.params;
  try{
    const carById = await db("cars").where("VIN", vin);
    res.status(200).json(carById)
  } catch{
    res.status(500).json({message: "failed to find car by vin"})
  }
})

router.post('/', async (req, res) => {
  const car = req.body
  console.log(car)
  try{
    const ids = await db('cars').insert(car)
    const newCar = await db("cars").where({carID: ids[0]})
    res.status(201).json({newCar})

  } catch{
    res.status(500).json({message: "failed to upload cars"})
  }
})

module.exports = router;