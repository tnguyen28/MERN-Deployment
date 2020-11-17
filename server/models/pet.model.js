const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      minlength: [3, "name must be at least 3 characters long"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
      minlength: [3, "type must be at least 3 characters long"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
      minlength: [3, "description must be at least 3 characters long"],
    },
    skills: {
      type: Array,
      required: [false],
      maxlength: [3],
    },
  },
  { timestamps: true }
);

module.exports.Pet = mongoose.model("Pet", PetSchema);
