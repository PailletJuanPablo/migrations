const express = require('express');
const router = express.Router();
const path = require('path')
const models = require('../db/models')
const Category = models.Category;

/* GET home page. */
router.get('/', async (req, res, next) => {
 
  // Del modelo categorias, findAll, agregarle su asociación
  const categories = await Category.findAll(
    {
      include: ['products']
    }
  );
  return res.send(categories);


});

module.exports = router;
