const express = require('express');
const router = express.Router();
const Imovel = require('../models/Imovel');

router.get('/', async (req, res) => {
  const imoveis = await Imovel.find();
  res.json(imoveis);
});

router.post('/', async (req, res) => {
  const novo = new Imovel(req.body);
  await novo.save();
  res.status(201).json(novo);
});

router.put('/:id', async (req, res) => {
  const atualizado = await Imovel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(atualizado);
});

router.delete('/:id', async (req, res) => {
  await Imovel.findByIdAndDelete(req.params.id);
  res.json({ mensagem: 'Imóvel excluído' });
});

module.exports = router;
