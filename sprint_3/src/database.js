const mongoose = require('mongoose');

const MONGODB_URI = `mongodb+srv://master_team:12345678Q@cluster0.1lkcr.mongodb.net/MasterDB?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;