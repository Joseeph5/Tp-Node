var cars = [
  { id: 1, name: "clio" },
  { id: 2, name: "megane" },
  { id: 3, name: "range" },
];

const addCar = (req, res) => {
  const voiture = req.body;

  console.log({ voiture });

  if (voiture) {
    cars.push(voiture);
  }

  res.json({ cars });
};

const getAllCars = (req, res) => {
  res.json({ cars });
};

const getCarById = (req, res) => {
  const id = Number(req.params.id);
  const car = cars.find((car) => car.id === id);
  if (car) {
    return res.json({ car });
  }
  res.json({ status: 404, message: "not found" });
};

const updateCarById = (req, res) => {
  const id = Number(req.params.id);
  const newCar = req.body;
  const car = cars.find((car) => car.id === id);
  console.log({ car });
  if (car) {
    const carIndex = cars.findIndex((x) => x.id == car.id);
    cars[carIndex] = newCar;
    return res.json({ status: 200, message: "success" });
  }
  return res.json({ status: 404, message: "not found" });
};

const deleteCarById = (req, res) => {
  const id = Number(req.params.id);
  const car = cars.find((car) => car.id === id);
  if (car) {
    const carIndex = cars.findIndex((x) => x.id == car.id);
    cars.splice(carIndex, 1);
    return res.json({ status: 201, message: "deleted" });
  }
  return res.json({ status: 404, message: "not found" });
};

module.exports = {
  addCar,
  getAllCars,
  getCarById,
  updateCarById,
  deleteCarById,
};
