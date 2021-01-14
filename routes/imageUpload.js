const logger = require("morgan");
const bodyParser = require("body-parser");

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

const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost/photo-log-react-images";

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

// Uploading images to albums
app.post("/upload", upload.single("upload"), (req, res) => {
  res.redirect("/");
});

app.get("/files", (req, res) => {
  gfs.files.find({}).toArray((err, files) => {
    console.log(res.json(files));
  });
});

// Uploading images to profile pictures
app.post("/profilepictures", upload.single("profilepictures"), (req, res) => {
  location.reload(false)
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
    if (
      file.contentType === "image/jpeg" ||
      file.contentType === "img/jpeg" ||
      file.contentType === "img/jpg" ||
      file.contentType === "img/jpg" ||
      file.contentType === "img/png" ||
      file.contentType === "image/png" ||
      file.contentType === "image/gif" ||
      file.contentType === "img/gif"
    ) {
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
