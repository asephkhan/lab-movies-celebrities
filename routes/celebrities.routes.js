// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require('../models/Celebrity.model');

// all your routes here

// GET route for creating celebrity

router.get('/celebrities/create', (req, res, next) => {
    Celebrity.find()
    .then((celebrityCreated) => {
        console.log(celebrityCreated)
        res.render('celebrities/new-celebrity.hbs')
    })
    .catch((err) =>{
        next(err);
    })
})

// POST route for creating celebrity

router.post('/celebrities/create', (req, res, next) => {

    const {name, occupation, catchPhrase } = req.body;
    
    Celebrity.create({name, occupation, catchPhrase })
    .then((celebrityCreated) =>{
        console.log('celebrityCreated', celebrityCreated.name)
    res.redirect('/celebrities')
    })
    .catch((err) => next(err))
    
});

// Get route for listing celebrities

router.get('/celebrities', (req, res, next) =>{
    Celebrity.find()
    .then((allCelebrities) =>{
        res.render('celebrities/celebrities', {allCelebrities})
    })
    .catch((err) => next(err))
    
});




module.exports = router;