const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/photo-log-react`);

app.use(bodyParser.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.get('/', (req, res) => {
    return res.send('This is the Backend of PhotoLog.')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
});
