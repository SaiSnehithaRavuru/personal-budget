const express=require('express');
const fs=require('fs');
const app=express();
const port=3000;

app.use('/',express.static('public'));

    

app.get('/hello',(req,res)=>{
    res.send('Hello World!');
});

app.get('/budget',(req,res)=>{
    fs.readFile("budget-data.json", "utf8", (err, budget) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }else{
            res.json(JSON.parse(budget));
        }
      });
});

app.listen(port,()=>{
    console.log(`App is Listening at http://localhost:${port}`);
});