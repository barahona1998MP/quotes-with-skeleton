const router = require('express').Router()

const passport = require('passport')
const quotesServices = require('./quotes.services')

router.get('/', quotesServices.getAllQuotes) 
router.post('/', passport.authenticate('jwt', {session: false}, quotesServices.postQuote))

module.exports = router

