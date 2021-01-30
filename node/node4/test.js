const fs = require("fs");

fs.readFile('index.html',(error,data)=>{
    if(error){
        console.log(error);
    }
    console.log(data.toString());
    console.log("Readed...");
});