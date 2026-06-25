const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const port = 3015

app.use(express.static('public'))

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req,res) => {
    res.render('home', { css: 'bootstrap.css' })
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})