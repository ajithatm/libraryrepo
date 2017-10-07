var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var router = function (nav) {
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
    adminRouter.route('/addBooks')
    
       .get(function (req, res) {
         var url =
             'mongodb://localhost:27017/libraryApp';
             
        mongodb.connect(url, function(err, db) {
            
         var collection =db.collection('books');
          collection.insertMany(books,
                       function (err, results){
                        res.send(results);
        db.close();
                        });             
                    });
        
          // res.send('inserting Books');
    });
    
    return adminRouter;
    
};
module.exports = router;