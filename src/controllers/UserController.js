const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async(req, res) => {

  const {email} = express.Router();

  try{

    if(await User.findOne({email}))
      return res.status(400).send({ error: 'Usuário já existe'});

    const user = await User.create(req.body);

    user.passwword = undefined;

    return res.send({user});

  } catch(err){
    return res.status(400).send({ error: 'falha de registro'});
  }

});

module.exports = app => app.use('/auth', router);

