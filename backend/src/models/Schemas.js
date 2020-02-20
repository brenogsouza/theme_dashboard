const restful = require("node-restful");

const mongoose = restful.mongoose;

const CreditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true }
});

const DebitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ["PAGO", "PENDENTE", "AGENDADO"]
  }
});

const BillingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { Type: Number, min: Number, max: Number },
  year: { Type: Number, min: Date, max: Date },
  credits: [CreditSchema],
  debts: [DebitSchema]
});

module.exports = restful.model("BillingCycle", BillingCycleSchema);
