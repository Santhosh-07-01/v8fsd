const fs = require('fs')
fs.appendFile('2.txt','Hiii', (err, contents) => {
    if (err) console.log(err)
    else
        fs.readFile('2.txt', "utf-8", (err, contents) => {
          if (err) console.log(err)
            else
                console.log(contents);
        
        })

})
