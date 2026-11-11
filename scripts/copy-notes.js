// Copies the built Docusaurus site into the portfolio build at /notes
const fs = require("fs");
const path = require("path");
const src = path.join(__dirname, "..", "notes", "build");
const dest = path.join(__dirname, "..", "build", "notes");
fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
console.log("Copied notes build to", dest);
