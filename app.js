const express = require("express");
const app = express();
const port = 3003;

app.get('/', (req, res) =>{
  res.send(`Opa, a sua imagem está rodando na porta ${port}`)
});

app.listen(port, () =>{
  console.log(`Executando na porta ${port}`)
});

