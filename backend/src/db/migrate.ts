import { drizzle } from 'drizzle-orm/mysql2'
import { migrate } from 'drizzle-orm/mysql2/migrator'
import mysql from 'mysql2/promise'

// Migration function
async function runMigration() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'myapp',
  })

  const db = drizzle(connection)

  console.log('Running migrations...')
  
  await migrate(db, {
    migrationsFolder: './drizzle',
  })

  console.log('Migrations completed!')
  await connection.end()
}

runMigration().catch(console.error)