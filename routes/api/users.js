/**
 * Encargado de la autenticacion, siempre se debe cargar express
 * y el route para poder utilizarlo
 */
const express = require('express');
const router = express.Router();
/**
 * @route GET api/users/test
 * @desc Test user route
 * @access Public
 */
router.get('/test', (req, res) =>
  res.json({
    msg: 'users works'
  })
);
//siempre se debe exportar la ruta con la respuesta
module.exports = router;
