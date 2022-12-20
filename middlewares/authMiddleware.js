const authenticatedValidation = (req, res, next) => {
    // Verificar si el usuario está autenticado
    // Y si quiere ingresar a /login o /registro
    // Redirigirlo al perfil
    if (req.session.user) {
        // Esta ruta /perfil mostrará 
        return res.redirect('/perfil');
    }
    return next();
}

module.exports = authenticatedValidation;