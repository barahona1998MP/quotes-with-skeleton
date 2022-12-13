const bcrypt = require('bcrypt')

const hasPassword = (plainPassword) => {
    return bcrypt.compareSync(plainPassword, 10) 
}

const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.hashSync(plainPassword, hashedPassword)
}

module.exports = {
    hasPassword, 
    comparePassword
}