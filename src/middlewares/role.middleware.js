//? Previeamente tiene que pasar por el middleware de autenticación
const roleMiddleware = (req, res, next) => {
    if(req.user.rol === 'admin') {
        next()
    } else {
        res.status(401).json({message: 'Permission Denied'})
    }
}

module.exports = roleMiddleware