const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');

/**
 * en este archivo se tienen la configuracion incial del servidor.
 */
const app = express();

//DB config
const db = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//respuesta de cuando se conecte al root.
app.get('/', (req, res) => res.send('hello world'));

//decirle a nuestro servidor las rutas y a donde van
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/post', post);
//puerto de configuracion en el cual va a correr el servidor
const port = process.env.PORT || 5000;
//imprimir en donde esta corriendo el servidor.
app.listen(port, () => console.log(`Server running on port ${port}`));
