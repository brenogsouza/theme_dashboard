const restful = require("node-restful");
const mongoose = restful.mongoose;

const DebitSchema = new mongoose.Schema({
  name: { type: String, require: true },
  value: { type: Number, min: 0, require: true },
  status: {
    type: String,
    require: false,
    uppercase: true,
    enum: ["PAGO", "PENDENTE", "AGENDADO"]
  }
});

module.exports = restful.model("Debit", DebitSchema);
