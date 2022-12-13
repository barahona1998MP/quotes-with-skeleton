const quotesControllers = require('./quotes.controllers')

const getAllQuotes = () => {
    quotesControllers.findAllQuotes()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postQuote = (req, res) => {
    const {quote, year} = req.body
    const userId = req.user.id
    quotesControllers.createQuotes(obj, {quote, year, userId})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllQuotes,
    postQuote
}