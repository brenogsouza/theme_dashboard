const restful = require("node-restful");
const mongoose = restful.mongoose;
require("./Credit");
require("./Debit");

const BillingCycleSchema = new mongoose.Schema({
  name: { type: String, require: true },
  month: { Type: Number, min: 1, max: 12, require: true },
  year: { Type: Number, min: 1970, max: 2100, require: true },
  credits: [CreditSchema],
  debts: [DebitSchema]
});

module.exports = restful.model("BillingCycle", BillingCycleSchema);
