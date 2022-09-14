const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send(`Sua imagem está rodando na porta ${port}`)
});

app.listen(port, () =>{
  console.log(`Executando na porta ${port}`)
});

