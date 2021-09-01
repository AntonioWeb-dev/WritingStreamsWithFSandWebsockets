const fs = require("fs");


for(let i=0;i<1e5;i++) {
  fs.appendFile('text.txt', `appending data: ${i}\n`, (err) => {
    if(err) {
      console.log(err);
    }
  });
}
