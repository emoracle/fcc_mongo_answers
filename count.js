var
mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err)
    throw err;
   /* select count(*) from parrots where age > xxx */
  db.collection("parrots").count({"age": {$gt: parseInt(process.argv[2])}}, function(err, data){
    if (err) throw err; 
    console.log(data);
    db.close();  
  });
});