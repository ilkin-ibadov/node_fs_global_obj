// Node.js File System Operations

const fs = require("fs");

// // Synchronous File Read
try {
  const data = fs.readFileSync("file.txt", "utf8");
  console.log("Synchronous read:", data);
} catch (err) {
  console.error("Error reading file synchronously:", err);
}

// // Asynchronous File Read
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file asynchronously:", err);
  } else {
    console.log("Asynchronous read:", data);
  }
});

// // Asynchronous File Open
fs.open("file.txt", "r", (err, fd) => {
  if (err) throw err;
  console.log("File opened with file descriptor:", fd);

  // Close the file
  fs.close(fd, (err) => {
    if (err) throw err;
    console.log("File closed");
  });
});

// // Synchronous File Open
try {
  const fd = fs.openSync("file.txt", "r");
  console.log("File opened with file descriptor:", fd);
  fs.closeSync(fd);
  console.log("File closed");
} catch (err) {
  console.error("Error opening file synchronously:", err);
}

// // Asynchronous File Write
fs.writeFile("file.txt", "Hello, world!", (err) => {
  if (err) throw err;
  console.log("File has been written");
});

// // Synchronous File Write
try {
  fs.writeFileSync("file.txt", "Hello, world!");
  console.log("File has been written");
} catch (err) {
  console.error("Error writing file synchronously:", err);
}

// // Asynchronous File Information
fs.stat("source.txt", (err, stats) => {
  if (err) throw err;
  console.log("File Stats:", stats);
});

// // Synchronous File Information
try {
  const stats = fs.statSync("file.txt");
  console.log("File Stats:", stats);
} catch (err) {
  console.error("Error getting file stats synchronously:", err);
}

// // Asynchronous File Deletion
fs.unlink("file.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});

// // Synchronous File Deletion
try {
  fs.unlinkSync("file.txt");
  console.log("File deleted");
} catch (err) {
  console.error("Error deleting file synchronously:", err);
}

// // Other File Operations
// Rename a File
fs.rename("newName.txt", "source.txt", (err) => {
  if (err) throw err;
  console.log("File renamed");
});

// // Copy a File
fs.copyFile("source.txt", "destination.txt", (err) => {
  if (err) throw err;
  console.log("File copied");
});

// Append text
const additionalContent = "\nThis is an appended line.";
fs.appendFile("output.txt", additionalContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Content has been appended!");
});

console.log();
