const restful = require("node-restful");
const mongoose = restful.mongoose;

const CreditSchema = new mongoose.Schema({
  name: { type: String, require: true },
  value: { type: Number, min: 0, require: true }
});

module.exports = restful.model("Credit", CreditSchema);
