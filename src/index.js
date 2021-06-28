const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

// Connect DB
db.connect()
    // HTTP Logged
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// Template Engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources', 'views'))
    //console.log("PATH:" + path.join(__dirname, 'resources/views'))


// Route
route(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})