const express = require("express");
const PORT = process.env.PORT || 8090;

const app = express();

app.use(express.static("front/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
