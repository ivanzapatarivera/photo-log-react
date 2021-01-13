const logger = require("morgan");
const nodemon = require("nodemon");
const bodyParser = require("body-parser");

// var Image = require('../models/imageupload.js');
const express = require("express");
const path = require("path");
const crypto = require("crypto"); //to generate file name
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const app = express();

let conn = mongoose.createConnection(
  process.env.MONGODB_URI || "mongodb://localhost/photo-log-react-images",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

conn.once("open", () => {
  //initialize our stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("imageUpload");
});

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/photo-log-react-images";

let storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const fileInfo = {
        filename: file.originalname,
        bucketName: "imageUpload",
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("upload"), (req, res) => {
  res.redirect("/");
});

app.get("/files", (req, res) => {
  gfs.files.find({}).toArray((err, files) => {
    console.log(res.json(files))
  })
})

app.get("/image/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    //check if files exist
    if (!file || file.length == 0) {
      return res.status(404).json({
        err: "No files exist",
      });
    }
    //check if image
    if (file.contentType === "image/jpeg" || file.contentType === "img/png" || file.contentType === "image/png") {
      //read output to browser
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

module.exports = app;


// const path = require("path");
// const multer = require("multer");
// const express = require("express");

// const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/photo-log-react";


// const storage = multer.diskStorage({
//    destination: mongoURI,
//    filename: function(req, file, cb){
//       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//    }
// });

// const upload = multer({
//    storage: storage,
//    limits:{fileSize: 1000000},
// }).single("myImage");
// const router = express.Router();
// router.post("/upload", (req, res) => {
//    upload(req, res, (err) => {
//       console.log("Request ---", req.body);
//       console.log("Request file ---", req.file);//Here you get file.
//       /*Now do where ever you want to do*/
//       if(!err)
//          return res.send(200).end();
//    });
// });

// router.get("/files", (req, res) => {

// })

// module.exports = router;

