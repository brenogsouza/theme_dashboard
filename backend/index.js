const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect(
  "mongodb+srv://breno:12345@meubanco-tgxc0.mongodb.net/dashtemplate?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
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
