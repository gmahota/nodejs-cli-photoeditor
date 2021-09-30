const express = require("express");


const state = require("./services/robots/state.js");
const zoe = require("./services/zoe/index.js");

const app = express();
const port = process.env.PORT || 4000;

app.get("/", async (req, res) => {
  
  res.send("Hello World!");
});

app.get("/api/robot/:textsearch", async (req, res) => {
  const content = {
    searchTerm: req.params.textsearch,
    lang: "en",
    maximumSentences: 7,
  };

  state.save(content);

  await robots.text(content);

  await robots.image();

  await robots.video();

  res.send(content.sourceContentOriginal);
});


//Memorabilia
app.get('/api/zoe/images/convert/:count', async (req, res) => {

  const content = {
    sentences:Array.from({length:req.params.count},(v,k)=>k+1) ,
    lang: "pt"
  };

  await zoe.images.ConvertAll(content);

  res.send(content);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
