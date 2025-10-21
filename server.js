const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public")); // statik dosyalar için (HTML, CSS, JS)

// Ana sayfa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Hizmetler sayfası
app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "services.html"));
});

// Hakkımızda sayfası
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Portföy sayfası
app.get("/portfolio", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "portfolio.html"));
});

// İletişim sayfası
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// 404 sayfası
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 IG Yazılım server running on port ${port}`));
