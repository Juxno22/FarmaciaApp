const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
