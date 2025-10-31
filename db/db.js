const { Client } = require("pg")

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client
  .connect()
  .then(() => console.log("Conectado ao banco de dados"))
  .catch((err) => console.log("oi", err))

module.exports = client;