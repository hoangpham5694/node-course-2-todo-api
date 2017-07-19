//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connet to MongoDB server');
  }
  console.log('Connect to MongoDB server');
  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
//   console.log(result);
// })
  //findOneAndDelete

// db.collection('Todos').findOneAndDelete({complete:false}).then((result)=>{
//   console.log(result);
// });

  // db.collection('User').deleteMany({name:'Andrew'});

  db.collection('User').findOneAndDelete({
    _id: new ObjectID("596da8a49151031fd0abd7aa")
  }).then((results)=>{
    console.log(JSON.stringify(results, undefined, 2));
  });


//  db.close();
});
