const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// IMPORT MODELS
require('./models/profilepic');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/photo-log-react`);

app.use(bodyParser.json());

//IMPORT ROUTES
require('./routes/productRoutes')(app);


  const path = require('path');
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req,res) => {
    const index = path.join(__dirname, 'client', 'build', 'index.html');
    res.sendFile(index);
      // res.sendFile(path.join(__dirname, './client/build/index.html'))
  })


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});