const express = require('express')
const router = express.Router()
const Recipe = require('../models/Recipe')

router.get('/new', (req, res) => {
    Recipe.create({
        title: 'Quesadillas de verdad',
        level: 'UltraPro Chef',
        ingredients: ['tortillas de harina', 'queso'],
        cuisine: 'Mexicana',
        dishType: 'Breakfast',
        duration: 5,
        creator: 'Chef Mendivil',
    }).then(receta => {
        res.send(receta.title, receta.creator)
    }).catch(err => {
        console.log(err)
    })
})

router.get('/many', (req, res) => {
    Recipe.insertMany(require('../data'))
        .then(recetas => {
            for (var comida of recetas) {
                console.log(comida.title)
            }
        }).catch(err => {
            console.log(err)
        })
})

router.get('/update', (req, res) => {
    Recipe.updateOne({
            title: "'Rigatoni alla Genovese'"
        }, {
            duration: 100
        })
        .then(recetita => {
            res.send(recetita)
        }).catch(err => {
            console.log(err)
        })
})

router.get('/delete', (req, res) => {
    Recipe.deleteOne({
            title: "'Orange and Milk-Braised Pork Carnitas'"
        })
        .then(recetita => {
            res.send(recetita)
        }).catch(err => {
            console.log(err)
        })
})

router.get('/delete', (req, res) => {
    Recipe.deleteOne({ title: "Carrot Cake" })
        .then(receta => {
            res.send(receta)
        }).catch(err => {
            console.log(err)
        })
})

module.exports = router