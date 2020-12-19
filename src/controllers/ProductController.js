const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.post('/register', async(req, res) => {

  try{
    const product = await Product.create(req.body);

    return res.send({product});

  } catch(err){
    return res.status(400).send({ error: 'falha de registro'});
  }

});

module.exports = app => app.use('/auth', router);

