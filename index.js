const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Importing models
require("./models/profilepic");
require("./models/status"); 
require("./models/description");


// Establishing mongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/photo-log-react`
);

app.use(bodyParser.json());

// Importing productRoutes - functional on Live app
require("./routes/productRoutes")(app);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  const index = path.join(__dirname, "client", "build", "index.html");
  res.sendFile(index);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port http://localhost:${PORT}`);
});
