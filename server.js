const express = require("express");
const app = express();

app.use(express.static("public")); // statik dosyalar için (HTML, CSS, JS)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
