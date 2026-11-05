const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
    .then(() => console.log('🚀 ¡Conexión exitosa a MongoDB Atlas!'))
    .catch((error) => console.error('❌ Error al conectar a MongoDB:', error));

app.get('/', (req, res) => {
    res.send('Servidor de la Barbería en línea y funcionando.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🌍 Servidor escuchando en el puerto ${PORT}`);
});
0
