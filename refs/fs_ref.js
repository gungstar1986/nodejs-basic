const fs = require('fs');
const path = require('path');


// Create dir "dir" ------------------------------------------------------- !
fs.mkdir(path.join(__dirname, "notes"), err => {
    if (err) throw err;
    console.log("Dir was created")
});

fs.mkdir(path.join(__dirname, "../dir"), err => {
    if (err) throw err;
    console.log("dir! was created")
});


// Create, Modify and Read file ---------------------------------------------- !
// Create new file
fs.writeFile(path.join(__dirname, "../dir", "file.txt"),
    "text in the file",
    (err) => {
        if (err) throw err;
        console.log("file was created");

        // Modified file
        fs.appendFile(
            path.join(__dirname, "../dir", "file.txt"),
            " added new content into the file",
            (err) => {
                if (err) throw err;
                console.log("file was modified")
            }
        );

        // Read file
        fs.readFile(path.join(__dirname, "../dir", "file.txt"),
            "utf-8", // Encoding to utf-8
            (err, data) => {
                if (err) throw err;
                console.log(data)
            }
        );
    }
);


// Rename file
fs.rename(
    path.join(__dirname, "../dir", "file.txt"),
    path.join(__dirname, "../dir", "renamed file.txt"),
    err => {
        if (err) throw err;
        console.log("file was renamed")
    }
);


// Create os_ref.js :-)
// fs.writeFile(path.join(__dirname, "os_ref.js"), "", err => {
//     if (err) throw err;
// });
