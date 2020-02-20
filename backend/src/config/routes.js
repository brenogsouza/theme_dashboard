const express = require("express");

module.exports = function(server) {
  // url base
  const router = express.Router();
  server.use("/api", router);

  // rotas ciclo de pagamento
  const BillingCycle = require("../services/BillingCycleService");
  BillingCycle.register(router, "/billingCycles");
};
