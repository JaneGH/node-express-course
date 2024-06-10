const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile("temp.txt", "Line 1\n");
    console.log("First line written.");
    await writeFile("temp.txt", "Line 2\n", { flag: 'a' }); // 'a' flag appends to the file
    console.log("Second line written.");
    await writeFile("temp.txt", "Line 3\n", { flag: 'a' });
    console.log("Third line written.");
  } catch (error) {
    console.error("Error: ", error);
  }
}

async function reader() {
    try {
      const data = await readFile("temp.txt", "utf8");
      console.log("File contents:", data);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  }
  
  async function readWrite() {
    await writer();
    await reader();
  }
  
  readWrite();