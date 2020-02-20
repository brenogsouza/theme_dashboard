require("./src/config/database");
const routes = require("./src/config/routes");

const express = require("express");
const app = express();

app.use(express.json());
app.use(routes);

const port = 3003;
app.listen(port, () => {
  console.log(`BACKEND is running on port ${port}`);
});
