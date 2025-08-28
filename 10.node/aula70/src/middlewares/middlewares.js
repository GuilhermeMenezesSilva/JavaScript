module.exports = (req, res, next) => {
    res.locals.variavelLocal = 'Este é um valor local';
    next()
}