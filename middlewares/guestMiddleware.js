const guestValidation = (req, res, next) => {
    // Verificar si el usuario no está autenticado
    // Y quiere ingresar a cualquier ruta privada
    // Redirigirlo al login
    if (!req.session.user) {
        // Esta ruta /perfil mostrará 
        return res.redirect('/login');
    }
    return next();
}

module.exports = guestValidation;