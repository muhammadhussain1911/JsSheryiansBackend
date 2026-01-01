const fs = require('fs');

// fs.writeFile("index.txt", "File Created Successfully", function(err){
//   if (err) console.log("File not created.")
//     else console.log("File Created.")
// })

// fs.appendFile("index.txt","\nText appended successfully", (err)=> {
//   if (err) console.log("File not appended")
//     else console.log("File appended")
// })

// fs.rename("index.txt", "create.txt", function(err){
//   if (err) conso le.log("File not renamed");
//   else console.log("File renamed");
// }) // The code is not running line by line because Node.js executes file system operations asynchronously (non-blocking).
// Output:
// File not renamed
// File appended
// File Created.

// To ensure these operations happen sequentially, you have several options:
// Option 1: Nest the Callbacks 
// const fs = require('fs');

// fs.writeFile("index.txt", "File Created Successfully", function(err){
//   if (err) return console.log("File not created.");
//   console.log("File Created.");

//   fs.appendFile("index.txt","\nText appended successfully", (err)=> {
//     if (err) return console.log("File not appended");
//     console.log("File appended");

//     fs.rename("index.txt", "create.txt", function(err){
//       if (err) return console.log("File not renamed");
//       console.log("File renamed");
//     });
//   });
// });

// Option 2: Use Promises (Modern Approach)

// const fs = require('fs').promises;

// async function run() {
//   try {
//     await fs.writeFile("index.txt", "File Created Successfully");
//     console.log("File Created.");

//     await fs.appendFile("index.txt", "\nText appended successfully");
//     console.log("File appended.");

//     await fs.rename("index.txt", "create.txt");
//     console.log("File renamed.");
//   } catch (err) {
//     console.error("Error:", err);
//   }
// }

// run();

// fs.copyFile("create.txt", "./copy/copyFile.txt", (err)=>{
//   if (err) console.log(err.message);
//   else console.log("File Copied");
// })

// fs.unlink("./copy/copyfile.txt", function(err){
//   if (err) console.log(err)
//     else console.log("File removed.")
// })

// fs.rmdir('./dummy', {recursive: true}, (err)=>{
//   if (err) console.log("Error removing directory.", err);
//   else console.log("Folder removed successfully.");
// }) // In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead.

// fs.rm("./copy", {recursive: true}, function(err){
//   if (err) console.log(err.info);
//   else console.log("Directory Removed");
// })

// fs.readFile("create.txt", (err, data) => {
//   if (err) console.log(err);
//   const text = data.toString('utf-8')
//   console.log(text);
// })

