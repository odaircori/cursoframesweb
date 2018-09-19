const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://odair:Sysmymongol1@tatooine.mongodb.umbler.com:37190/db_finance');

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!";
mongoose.Error.messages.Number.min = "O '{VALUE}' é menor do que o limite mínimo de '{MIN}'";
mongoose.Error.messages.Number.max = "O '{VALUE}' é maior do que o limite máximo de '{MAX}'";
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'";