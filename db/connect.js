const mongoose = require("mongoose");

/**
 * @param Url takes a url and creates a mongo connection to that url
 */
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
