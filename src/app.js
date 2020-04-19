const geocode=require('./geocode.js');
const forcast=require('./forcast');
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request= require('request');
const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Akash Kumar'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Akash Kumar'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Akash Kumar'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address)
    {
        return res.send({
            errormessage: "Please provide the address"
        })
    }
    geocode(req.query.address,(error,state)=>{
        if (error) {
            return res.send( {error})
        }
        console.log("***",error,state);
        console.log('satte',state);
        forcast(state,(error,final)=>{
            if (error) {
                return res.send({error})
            }
            res.send(final);
            console.log(final);

        })
        // states=state;
        // console.log(states);
       
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error: "You must provide a search query"
        })
    }
    console.log(req.query.search);
    res.send({
        products:[]
    })

})

app.get('/help/*', (req, res) => {
    res.render('404page', {
        title: '404',
        name: 'Akash Kumar',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404page', {
        title: '404',
        name: 'Akash Kumar',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})













































 





// const express=require('express');
// const path=require('path');
// const hbs=require('hbs');

// //set up the paths
// const publicDirectoryPath=path.join(__dirname,'../public');
// const viewPath=path.join(__dirname,'../template/views');
// const partialsPath=path.join(__dirname,'../template/partials');

// console.log(publicDirectoryPath);
// console.log(viewPath);
// console.log(partialsPath);

// const app=express();
// //set handlerbar engine express config
// app.set('view engine','hbs');
// app.set('views',viewPath);


// hbs.registerPartials(partialsPath);

// //set up static directory path to serve
// app.use(express.static(publicDirectoryPath));

// app.get('',(req,res)=>{
//     res.render('index',{
//         title:"Weather App",
//         develop:"developed by Akash",
//         createdby:"Akash Kumar"
//     })
// })


// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title:"about",
//         develop:"developed by Akash About"
//     })
// })

// app.get('/help',(req,res)=>{
//     res.render('help',{
//         title:"help",
//         develop:"developed by Akash help"
//     })
// })


// app.get('',(req,res)=>{
//     res.render('index',{
//         title:"Weather App",
//         develop:"developed by Akash"
//     })
// })

// app.get('/weather',(req,res)=>{ 
//     res.send("weather Page");
// })

// app.get('/help/*',(req,res)=>{ 
//     res.render('404page',{
//         errormsg: "help article not found",
//         title:"Weather App",
//         develop:"developed by Akash",
//         createdby:"Akash Kumar"
//     });
// })

// app.get('*',(req,res)=>{ 
//     res.render('404page',{
//         errormsg:"My 404 Page",
//         title:"Weather App",
//         develop:"developed by Akash",
//         createdby:"Akash Kumar"
//     });
// })




// app.listen(3000,()=>{
//     console.log("Running opn port 3000");
// });