module.exports = (config) => {
  return (req, res, next) => {
    if (req.body.number === undefined) return next()

    const num = parseFloat(req.body.number)

    if (Number.isNaN(num)) return next(new Error('Sumbitted value is not a number'))

    const result = num * config.by
    req.multiplied = result
    next()
  }
}
