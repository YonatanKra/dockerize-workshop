const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://mongo:27017/rpg";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("rpg");
  dbo.createCollection("characters", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

