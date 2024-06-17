const { writeFile } = require("fs");

console.log("start...");

// First line
writeFile("./temporary/fileB.txt", "Line 1\n", (err, result) => {
  console.log("First line written");
  if (err) {
    console.log("Error: ", err);
  } else {
    // Second line
    writeFile("./temporary/fileB.txt", "Line 2\n", { flag: "a" }, (err, result) => {
      console.log("Second line written");
      if (err) {
        console.log("Error: ", err);
      } else {
        // Third line
        writeFile("./temporary/fileB.txt", "Line 3\n", { flag: "a" }, (err, result) => {
          console.log("Third line written");
          if (err) {
            console.log("Error: ", err);
          } else {
            console.log("Success");
          }
        });
      }
    });
  }
});