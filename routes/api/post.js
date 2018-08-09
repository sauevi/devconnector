/**
 * Encargado de los post, siempre se debe cargar express
 * y el route para poder utilizarlo
 */
const express = require('express');
const router = express.Router();

/**
 * @route GET api/post/test
 * @desc Test post route
 * @access Public
 */
//de esta forma estamos de volviendo un Json
router.get('/test', (req, res) =>
  res.json({
    msg: 'post works'
  })
);
//siempre se debe exportar la ruta con la respuesta
module.exports = router;
