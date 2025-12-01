const express = require('express') // import express library
const router = express.Router()
// create a router object 
router.get ('/',function(req,res,next){
    res.render('index') // get route for the home page
})
router.post('/calculate',function(req,res,next){
    const height = req.body.height
    const weight = req.body.weight // get the height and weight from the form data

    const bmi = weight / (height*height ) // bmi calculator 

    res.render('result',{
        title: 'Your Bmi chart',
        height: height,
        weight: weight,
        bmi: bmi
    })
})
module.exports = router // export the router so the server can use it anything after this will not be seen