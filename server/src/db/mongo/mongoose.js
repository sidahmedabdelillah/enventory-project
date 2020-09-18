const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(
    "mongodb://db/mydb"
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      seUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log('Mongoose connected!');
    }
  );
};
