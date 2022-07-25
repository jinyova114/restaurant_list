// require packages
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set static files
app.use(express.static('public'))

// set routes
app.get('/', (req, res) => {
  res.render('index', {restaurant: restaurantList.results})
})

// listen and start server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})