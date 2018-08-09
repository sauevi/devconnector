/**
 * Encargado de los perfiles, siempre se debe cargar express
 * y el route para poder utilizarlo
 */
const express = require('express');
const router = express.Router();
/**
 * @route GET api/profile/test
 * @desc Test profile route
 * @access Public
 */
router.get('/test', (req, res) =>
  res.json({
    msg: 'profile works'
  })
);
//siempre se debe exportar la ruta con la respuesta
module.exports = router;
