// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('KitchenServices');

// Create a new document in the collection.
db.getCollection('Tasks').insertMany([{
    "address": "dopiop",
    "city": "Morshi",
    "service": {
      "_id": "64a3385798c8a8cd861f8f1d",
      "name": "Chimney"
    },
    "phone": 5464546464,
    "date": "2023-07-10",
    "email": "",
    "name": "kopkbop"
  }])