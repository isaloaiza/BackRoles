
// const mongoose = require("mongoose");
// const postSchema = new mongoose.Schema({
 
//   title: { type: String, required: true,},
//   content: {type: String, required: true,},
//   horarios: { type: String, required: true,},
//   tarifaCarro: { type: Number, required: true, },
//   tarifaMoto: { type: Number, required: true,},
//   telefono: {
//     type: Number,
//     required: true,
//   },
//   nosotros: {
//     type: String,
//     required: true,
//   },
//   longitud: { 
//     type: Number,
//     required: true,
//   },
//   latitud: {
//     type: Number,
//     required: true,
//   },
//   puestos: {
//     type: Number,
//     required: true,
//   }
// });

// const Post = mongoose.model("Post", postSchema);
// module.exports = Post;


const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
 
  title: { 
    type: String, 
    required: true,
  },
  content: {
    type: String, 
    required: true,
  },
  horarios: { 
    type: String, 
    required: true,
  },
  tarifaCarro: { 
    type: Number, 
    required: true, 
  },
  tarifaMoto: { 
    type: Number, 
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  nosotros: {
    type: String,
    required: true,
  },
  longitud: { 
    type: Number,
    required: true,
  },
  latitud: {
    type: Number,
    required: true,
  },
  puestos: {
    type: Number,
    required: true,
  }
});

const Parqueadero = mongoose.model("parqueadero", postSchema);
module.exports = Parqueadero;

