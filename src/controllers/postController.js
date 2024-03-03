// const Post = require('../models/post.js');
// const ParqueaderoExistente = require("../models/parqueaderoExistente");

// async function createPost(req, res) {
//     try {
//       const { title, content, horarios, tarifaCarro, tarifaMoto, telefono, nosotros, latitud, longitud, puestos } = req.body;
//           const existente = await ParqueaderoExistente.findOne({ latitud, longitud });
  
//           if (!existente) {
//             return res.status(400).json({ error: "No se encontró un parqueadero existente con estas coordenadas." });
//           }
  
//           const parqueaderoExistente = await Post.findOne({ latitud, longitud });
  
//           if (parqueaderoExistente) {
//             return res.status(400).json({ error: "Ya existe un parqueadero con estas coordenadas." });
//           }
  
//       const parqueadero = new Post({
//         title,
//         content,
//         horarios,
//         tarifaCarro,
//         tarifaMoto,
//         telefono,
//         nosotros,
//         longitud,
//         latitud,
//         puestos,
//       })
  
  
//       await parqueadero.save();
//       res.send(parqueadero);
//     } catch (error) {
//       console.error("Error creating post:", error);
//       res.status(500).json({ error: error.message });
//     }
//   }
  
//   async function getAllPosts(req, res) {
//     try {
//       const posts = await Post.find();
//       res.send(posts);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   }
  
//   async function updatePost(req, res) {
//     try {
//       const post = await Post.findByIdAndUpdate(
//         req.params.id,
//         {
//           title: req.body.title,
//           content: req.body.content,
//           horarios: req.body.horarios,
//           tarifaCarro: req.body.tarifaCarro,
//           tarifaMoto: req.body.tarifaMoto,
//           telefono: req.body.telefono,
//           nosotros: req.body.nosotros,
//           longitud: req.body.longitud,
//           latitud: req.body.latitud,
//           puestos: req.body.puestos,
//         },
//         { new: true }
//       );
//       if (!post) return res.status(404).send("Post not found");
//       res.send(post);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   }
  
//   async function getPostById(req, res) {
//     try {
//       const post = await Post.findById(req.params.id);
//       if (!post) return res.status(404).send("Post not found");
//       res.send(post);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   }
  
//   async function deletePost(req, res) {
//     try {
//       const post = await Post.findByIdAndDelete(req.params.id);
//       if (!post) return res.status(404).send("Post not found");
//       res.send(post);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   }
  
//   module.exports = {
//     createPost,
//     getAllPosts,
//     updatePost,
//     getPostById,
//     deletePost
  //};

const Parqueadero = require("../models/post");
const ParqueaderoExistente = require("../models/parqueaderoExistente");

async function createPost(req, res) {
  try {
    const { title, content, horarios, tarifaCarro, tarifaMoto, telefono, nosotros, latitud, longitud, puestos } = req.body;
        const existente = await ParqueaderoExistente.findOne({ latitud, longitud });

        if (!existente) {
          return res.status(400).json({ error: "No se encontró un parqueadero existente con estas coordenadas." });
        }

        const parqueaderoExistente = await Parqueadero.findOne({ title, content, telefono, latitud, longitud });

        if (parqueaderoExistente) {
          return res.status(400).json({ error: "Ya existe un parqueadero con estas coordenadas." });
        }

    const parqueadero = new Parqueadero({
      title,
      content,
      horarios,
      tarifaCarro,
      tarifaMoto,
      telefono,
      nosotros,
      latitud,
      longitud,
      puestos,
    });


    await parqueadero.save();
    res.send(parqueadero);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: error.message });
  }
}

async function getAllPosts(req, res) {
  try {
    const posts = await Parqueadero.find();
    res.send(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updatePost(req, res) {
  try {
    const post = await Parqueadero.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        content: req.body.content,
        horarios: req.body.horarios,
        tarifaCarro: req.body.tarifaCarro,
        tarifaMoto: req.body.tarifaMoto,
        telefono: req.body.telefono,
        nosotros: req.body.nosotros,
        longitud: req.body.longitud,
        latitud: req.body.latitud,
        puestos: req.body.puestos,
      },
      { new: true }
    );
    if (!post) return res.status(404).send("Post not found");
    res.send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getPostById(req, res) {
  try {
    const post = await Parqueadero.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deletePost(req, res) {
  try {
    const post = await Parqueadero.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  createPost,
  getAllPosts,
  updatePost,
  getPostById,
  deletePost
};
