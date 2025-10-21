const express = require("express");
const path = require("path");
const app = express();

// Statik dosyaları serve et (bundle.js, index.html, vb.)
app.use(express.static("public"));

// Tüm route'ları React Router'a yönlendir (SPA için)
// Express 5.x için catch-all route
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 IG Yazılım server running on http://localhost:${port}`);
  console.log(`📦 React app is ready!`);
  console.log(`🌍 SEO optimized for all Turkey!`);
});
