const Users = require('./users.models')
const RecoveryPassword = require('./recoveryPasswords.models')
const Quotes = require('./quotes.models')

const initModels = () => {
    //? FK = RecoveryPassword
    Users.hasMany(RecoveryPassword)
    RecoveryPassword.belongsTo(Users)
    
    //? FK = Quotes
    Quotes.belongsTo(Users)
    Users.hasMany(Quotes)

}

module.exports = initModels