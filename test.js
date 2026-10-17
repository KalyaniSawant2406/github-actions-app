const greet = require("./app");

if (greet() === "Hello! Application deployed using GitHub Actions.") {
console.log("Test passed successfully!");
} else {
console.error("Test failed!");
process.exit(1);
}
