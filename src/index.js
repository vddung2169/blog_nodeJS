const morgan = require('morgan')
const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars').engine;


const app = express()
app.use(express.static(path.join(__dirname, 'public')))
const port = 3000

//HTTP logger
app.use(morgan('combined'))

//Template engiÍne
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// route
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})