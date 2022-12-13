const Quotes = require('../models/quotes.models')
const Users = require('../models/users.models')

const findAllQuotes = async () => {
    const data = await Quotes.findAll({
        include: {
            model: Users
        }
    })
    return data
}

const createQuotes = async (obj) => {
    const data = await Quotes.create({
        quote: obj.quote,
        userId: obj.userId,
        year: obj.year
    })
    return data
}

module.exports = {
    findAllQuotes,
    createQuotes
}