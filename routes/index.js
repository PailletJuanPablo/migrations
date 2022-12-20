const express = require('express');
const router = express.Router();
const path = require('path')
const models = require('../db/models')
const Category = models.Category;
const authController = require('../controllers/authController');
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

router.get('/register', authController.register);
router.post('/register', authController.processRegister);
router.get('/login', authController.login);
router.post('/login', authController.processLogin);
router.get('/profile', authController.profile);

// Si no estoy logueado
// Quiero entrar a /perfil, /editar-producto
// 
//router.get('/perfil', middlewareProtecccion, multer, controller)


// Si yo YA estoy logueado
// No deberia ver poder ver 
// Login / Registro / Recuperar contraseña
module.exports = router;
