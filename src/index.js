const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
    // HTTP Logged
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

// Template Engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))
    //console.log("PATH:" + path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    // res.send('<h1 style="color:red">Hello World!</h1>')
    res.render('home')
})

app.get('/tin-tuc', (req, res) => {
    // res.send('<h1 style="color:red">Hello World!</h1>')
    res.render('news')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})