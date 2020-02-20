const restful = require("node-restful");
const CreditSchema = require("./Credit");
const DebitSchema = require("./Debit");

const mongoose = restful.mongoose;

const BillingCycleSchema = new mongoose.Schema({
  name: { type: String, require: true },
  month: { Type: Number, min: 1, max: 12, require: true },
  year: { Type: Number, min: 1970, max: 2100, require: true },
  credits: [CreditSchema],
  debts: [DebitSchema]
});

module.exports = restful.model("BillingCycle", BillingCycleSchema);
