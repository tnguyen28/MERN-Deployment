const petController = require("../controllers/pet.controller");
module.exports = function (app) {
  app.get("/api", petController.index);
  app.post("/api/pet/create", petController.createPet);
  app.get("/api/pet", petController.getAllPets);
  app.get("/api/pet/:id", petController.getPet);
  app.put("/api/pet/:id", petController.updatePet);
  app.delete("/api/pet/:id", petController.deletePet);
};
