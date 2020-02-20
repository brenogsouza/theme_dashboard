const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://breno:12345@meubanco-tgxc0.mongodb.net/dashtemplate?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.Error.messages.general.required = 'O atributo "{PATH}" é obrigatório';

mongoose.Error.messages.Number.min =
  'O "{VALUE}" informado é menor que o limite mínimo de "{MIN}"';

mongoose.Error.messages.Number.max =
  'O "{VALUE}" informado é maior que o limite máximo de "{MAX}"';

mongoose.Error.messages.Number.max =
  'O "{VALUE}" não é válido para o atributo "{PATH}"';
