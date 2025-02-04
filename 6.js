const fs = require('fs')
fs.readFile('2.js', "utf-8", (err, contents) => {
    if (err) console.log(err)
    else
        console.log(contents);

})