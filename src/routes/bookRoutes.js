var express = require('express');
var bookRouter = express.Router();
var sql = require('mssql');
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var router = function (nav){
    var books = [
             {
                 title: 'The Secret',
                 genre: 'Self Motivation',
                 author: 'Rhonda Byrne',
                 read: false
           },
            {
                title: 'The monk of ferrari',
                genre: 'Self Motivation',
                author: 'Robin Sharma',
                 read: false
            },
           {
               title: 'Father Son & co',
               genre: 'Business',
               author: 'Thomas J.Watson JR',
                read: false
           },
           {
               title: 'Inner Strength',
               genre: 'Self Motivation',
               author: 'Robin Sharma',
               read: false
           }
    
];
    bookRouter.route('/')
        .get(function(req,res){
         // 
         var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
                collection.find({}).toArray(
                    function (err, results) {
                    res.render('bookListView', {
                            title: 'Books',
                             nav: nav,
                             books: results
                            });

                });

            });
        });

        return bookRouter;
     };
module.exports =router;
    

