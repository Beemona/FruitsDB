const mongoose = require('mongoose');
 
main().catch(err => console.log(err));
 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1/fruitsDB');
  console.log("Connected");
 
  const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No name"]
        },

    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: {
        type: String,
        required: [true, "No review"]
        }
  });
 
  const Fruit = mongoose.model('Fruit', fruitSchema);
  
  const fruit = new Fruit({
    name: 'Apple',
    rating: 7,
    review: 'Pretty solid as a fruit.'
  });
  
// fruit.save();
 

  const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
  });
 
  const Person = mongoose.model('Person', personSchema);

  const pear = new Fruit({
    name: "Pear",
    rating: 9,
    review: "Great"
  })

   // pear.save();

   

  const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pear
  });

// person.save();


  const kiwi = new Fruit ({
    name: "Kiwi",
    rating: 9,
    review: "One of the best!"
  });

  const mango = new Fruit ({
    name: "Mango",
    rating: 10,
    review: "The best!"
  });

  const pineapple = new Fruit ({
    name: "Pineapple",
    rating: 8,
    review: "Kinda the best?"
  });

// UPDATE JOHN TO HAVE A MANGO FRUIT AS HIS FAVOURITE FRUIT
//   Person.updateOne({name:"John"}, {favouriteFruit: mango})
//   .then(result => { 
//      mongoose.connection.close()
//      console.log(result);
//    })
//    .catch(err => {
//      console.log(err);
//    })

//INSERT MANY (INSERT BULK)
//   Fruit.insertMany([kiwi, mango, pineapple]).then (function () {
//     console.log("Successfully saved all the fruits to fruitsDB.");
//   }) .catch(function (err) {
//     console.log(err);
//   });
    

//CONSOLE LOG EACH FRUIT WITH FIND 
// Fruit.find()
// .then(function (fruits) {

//     mongoose.connection.close();

//     fruits.forEach(function (fruit) {
//         console.log(fruit.name);
//     });
// })
// .catch(function (err) {
//     console.log(err);
// });

//UPDATE DRAGON FRUIT WITH NAME
// Fruit.updateOne({_id:4}, {name: "Dragon Fruit"})
// .then(result => {
//   mongoose.connection.close()
//   console.log(result);
// })
// .catch(err => {
//   console.log(err);
// })

//DELETE
// Fruit.deleteMany({name: "Dragon Fruit"})
// .then(result => {
//     mongoose.connection.close()
//     console.log(result);
// })
// .catch(err => {
//   console.log(err);
// })

}
