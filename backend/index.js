require("./src/config/database");

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Ola Mundo"
  });
});

const port = 3003;
app.listen(port, () => {
  console.log(`BACKEND is running on port ${port}`);
});
