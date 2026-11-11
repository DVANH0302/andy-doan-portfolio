// Copies the built Docusaurus site into the portfolio build at /blogs
const fs = require("fs");
const path = require("path");
const src = path.join(__dirname, "..", "blogs", "build");
const dest = path.join(__dirname, "..", "build", "blogs");
fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
console.log("Copied blogs build to", dest);
