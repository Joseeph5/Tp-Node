const express = require("express");
const {
  addCar,
  getAllCars,
  getCarById,
  updateCarById,
  deleteCarById,
} = require("../controllers/voiture.controller");

const router = express.Router();

router.post("/add", addCar);

router.get("/all", getAllCars);

router.get("/:id", getCarById);

router.put("/update/:id", updateCarById);

router.delete("/delete/:id", deleteCarById);

module.exports = router;
