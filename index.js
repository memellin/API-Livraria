const express = require("express");
const app = express();
const client = require("./db/db");

// Conexão com BD 
client.query("SELECT NOW()", (err, result) => {
 if (err) {
 console.error("Erro ao conectar ao banco:", err);
 } else {
 console.log("Banco conectado:", result.rows);
 }
})

app.use(express.json());

// Importa as rotas de usuários
const userRoutes = require("./routes/users");
const moviesRoutes = require("./routes/movie")

app.use("/users", userRoutes);
app.use("/movies", moviesRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API rodando dentro do Codespaces!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
