const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  name: String,
  roi: String,
  duration: String
});

module.exports = mongoose.model("Plan", PlanSchema);
