const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((e) => {
    console.log(`no connection becouse ${e}`);
  });
// module.exports = mongoose.connect;
module.exports = exports = mongoose;
