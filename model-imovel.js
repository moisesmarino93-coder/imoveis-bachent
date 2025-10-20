const mongoose = require('mongoose');

const ImovelSchema = new mongoose.Schema({
  titulo: String,
  tipo: String,
  descricao: String,
  preco: Number,
  cidade: String,
  bairro: String,
  area: Number,
  quartos: Number,
  banheiros: Number,
  vagas: Number,
  imagem: String
});

module.exports = mongoose.model('Imovel', ImovelSchema);
