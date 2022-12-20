const bcrypt = require("bcrypt");
const saltRounds = 10;

// Importar db o models
// Todos los modelos dentro
// Llamar a user
const models = require("../db/models");
const User = models.User;

const login = (req, res) => {
    res.render("login");

};

const processLogin = async (req, res) => {

    const loginData = req.body;
    // Buscar al usuario en base al mail
    const existentUser = await User.findOne({
        where: {
            email: loginData.email
        }
    })
    // Usuario con ese email no existe
    if (!existentUser) {
        return res.send('No existe un usuario');
    }
    // Usuario si existe
    // Comparar clave ingresada con clave en base
    const isValidPassword =
        bcrypt.compareSync(loginData.password, existentUser.password);
    
    // Si el password no es válido
    if (!isValidPassword) {
        return res.send('Contraseña incorrecta')
    }

    req.session.user = existentUser;

    return res.send(' Estas logueado ')

    






};

const register = (req, res) => {
  res.render("register");
};

const processRegister = async (req, res) => {
  const registerData = req.body;
  // Encriptamos el password con bcrypt
  registerData.password = bcrypt.hashSync(registerData.password, saltRounds);
  // Utilizar User para almacenar en base de datos a través de create
  try {
    const createdUser = await User.create(registerData);
      req.session.user = createdUser;
    return res.send(createdUser);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

const profile = (req, res) => {

    const viewData = {
        user: req.session.user,
        products
    }
    res.render('vista', viewData)
    // Obtener datos del usuario
    res.send('Bienvenid@ ' + req.session.user.email)
};

module.exports = { login, processLogin, register, processRegister, profile };
