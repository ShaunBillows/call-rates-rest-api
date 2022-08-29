const mongoose = require("mongoose");

const ratesSchema = new mongoose.Schema({
  Country: {
    type: String,
  },
  Prefix: {
    type: String,
  },
  Setup: {
    type: String,
  },
  "Cost/Minute": {
    type: String,
  },
  "Minimum Cost": {
    type: String,
  },
  "Rounding Cost Digits": {
    type: String,
  },
  RoundingTime: {
    type: String,
  },
});

const Rate = mongoose.model("rates", ratesSchema);

module.exports = Rate;
