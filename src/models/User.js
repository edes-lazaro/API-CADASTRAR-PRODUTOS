const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema
({
    name: {
      type: String, required: true,
    },

    email: {
        type: String, unique: true, require: true, lowercase: true,
    },

    password: {
        type: String, required: true, select: false,
    },

    telefone: {
      type: String, required: true,
    },

    endereco: {
        logradouro: {
            type: String,
        },
        
        bairro: {
            type: String,
        },

        numero: {
            type: String,
        },

        complemento: {
            type: String,
        }
    },


});

const User = mongoose.model('User', UserSchema);
module.exports = User;