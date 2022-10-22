const express = require('express')
const book = express.Router()
const Book = require('../models/book')


book.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

book.get('/', (req, res) => {
    Book.find()
    .then(foundBooks => {
        res.json(foundBooks)
    })
    .catch(err => {
        res.json('Uh Oh, server is not working', err)
    })
})

//one book
book.get('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then(foundBooks => {
        res.json(foundBooks)
    })
    .catch(err => {
        res.json('Make sure you are using the object id!')
    })
})

book.post('/create', (req, res) => {
    console.log(req.body)
    Book.create(req.body)
    .then(newBook => {
        res.json(newBook)
        console.log('This was Created')
    })
})

book.put('/update/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(bookChange => {
        res.json(bookChange)
        console.log('this was updated')
    })
    .catch(err => {
        console.log('We could not delete the book :(')
    })
})

book.delete('/delete/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(deletedBook => {
        res.status(303).json(deletedBook)
        console.log('This was Deleted')
    })
})

module.exports = book