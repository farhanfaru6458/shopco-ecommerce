const { Sequelize } = require("sequelize");

const combinations = [
  "postgresql://postgres:postgres@localhost:5432/postgres",
  "postgresql://postgres:admin@localhost:5432/postgres",
  "postgresql://postgres:root@localhost:5432/postgres",
  "postgresql://postgres:password@localhost:5432/postgres",
  "postgresql://postgres@localhost:5432/postgres",
  "postgresql://postgres:123456@localhost:5432/postgres",
  "postgresql://postgres:1234@localhost:5432/postgres",
];

async function test() {
  for (const url of combinations) {
    console.log(`Testing URL: ${url.replace(/:[^:@]+@/, ":****@")}`);
    const sequelize = new Sequelize(url, {
      dialect: "postgres",
      logging: false,
      dialectOptions: {
        // No SSL for local connections
      }
    });
    try {
      await sequelize.authenticate();
      console.log(`SUCCESS: Connected using ${url}`);
      
      // Let's check if we can create a database for our app or if a database already exists
      const [results] = await sequelize.query("SELECT datname FROM pg_database WHERE datistemplate = false;");
      console.log("Existing databases:", results.map(r => r.datname));
      
      await sequelize.close();
      return;
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }
  }
  console.log("No default credentials worked.");
}

test();
