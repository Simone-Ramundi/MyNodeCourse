const path = require('path')
const express = require('express')

const app = express()

// Define path for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Simone'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About me',
        name: 'Simone R'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        helpText: 'Help... (.__.)"'
    })
})

app.get('/weather', (req,res) =>{
    res.send({
        forecast: 23,
        location: 'London'
    })
})




app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})
