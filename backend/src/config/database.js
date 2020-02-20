const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://breno:12345@meubanco-tgxc0.mongodb.net/dashtemplate?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.Error.messages.general.required = 'O atributo "{PATH}" é obrigatório';
