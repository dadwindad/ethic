export default {
    schema: './src/db/schema.ts',
    out: './drizzle',
    driver: 'mysql2',
    dbCredentials: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'myapp',
    },
  } satisfies Config;