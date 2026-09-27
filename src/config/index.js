function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getPort(name, defaultValue) {
  const value = process.env[name] || defaultValue;
  const port = Number(value);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Environment variable ${name} must be a valid port`);
  }

  return port;
}

const database = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: getRequiredEnv("PGHOST"),
      port: getPort("PGPORT", 5432),
      user: getRequiredEnv("PGUSER"),
      password: getRequiredEnv("PGPASSWORD"),
      database: getRequiredEnv("PGDATABASE"),
    };

module.exports = {
  port: getPort("PORT", 3001),
  database,
};
