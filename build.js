const fs = require("fs");

fs.copyFileSync("app.js", "app-build.js");

console.log("Application built successfully!");