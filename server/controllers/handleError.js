const { join } = require("path");

const handleErrorNotFound = (req, res) => {
  res
    .status(404)
    .sendFile(join(__dirname, "..", "..", "public", "html", "404.html"));
};
const handleErrorServer = (err, req, res) => {
  console.log(err);
  res
    .status(500)
    .sendFile(join(__dirname, "..", "..", "public", "html", "500.html"));
};

module.exports = { handleErrorNotFound, handleErrorServer };
