var
mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err)
    throw err;
  /* select avg(price) from prices where size = xxxx */
  db.collection("prices").aggregate([{
        $match : {
          size : process.argv[2]
        }
      }, {
        $group : {
          _id : 'total', // This can be an arbitrary string in this case
          total : {
            // $sum is the operator used here
            $avg : '$price'
          }
        }
      }
    ]).toArray(function (err, results) {
    if (err)
      throw err;
    console.log(Number(results[0].total).toFixed(2));
    db.close();
  });
});
