const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    authors: "Stephen King",
    description:
      "A man awakens from a 5-year coma to discover he has powers to see visions of the past, present and future, a power which drives him insane.",
    image: "http://books.google.com/books/content?id=O53jCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=ZbUACwAAQBAJ&source=gbs_api"
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    description:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    image: "https://books.google.com/books/content?id=r6eoCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=r6eoCwAAQBAJ&source=gbs_api"
  },
  
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
