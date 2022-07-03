// Require express and mongoose
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

// Connects mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetwork-nosql',
 {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Logs the mongoose queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));

