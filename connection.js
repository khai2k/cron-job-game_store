var sql = require("mssql");

// const dbSettings = {
//   user: "sa",
//   password: "khai12345@",
//   server: "103.142.139.104:1433",
//   database: "game_store",
//   options: {
//     encrypt: true, // for azure
//     trustServerCertificate: true, // change to true for local dev / self-signed certs
//   },
// };

const dbSettings = {
  server: "103.142.139.104",
  database: "game_store",
  authentication: {
    type: "default",
    options: {
      userName: "sa",
      password: "khai12345@",
    },
  },
  options: {
    port: 1433, // <-- add your custom port here
    // encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sql, getConnection };
