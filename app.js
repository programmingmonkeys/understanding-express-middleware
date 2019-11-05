const express = require('express')
const fav = require('./fav')

const app = express()

app.use(fav)

// app.use(
//   '/one',
//   (req, res, next) => {
//     console.log('One')

//     next()
//   },
//   (req, res, next) => {
//     console.log('One and a half')

//     next()
//   },
// )

app.use((req, res, next) => {
  // req.message = 'This message made it'
  console.log('foo')

  const err = new Error('This error')

  next(err)
})

app.use((req, res, next) => {
  console.log('bar')

  next()
})

app.use((req, res) => res.send('<h1>Express is working!</h1>'))
app.listen(3000)
