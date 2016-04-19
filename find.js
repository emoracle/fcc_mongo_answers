var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err;
  /* select * from parrots where age > param */
  db.collection('parrots').find({"age": {$gt: parseInt(process.argv[2])}}).toArray(function(err, documents) {
    if (err) throw err;
      console.log(documents);
      db.close();
    });
});