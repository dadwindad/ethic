import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { users } from './db/schema'

const app = new Hono()

// Middleware
app.use('*', logger())
app.use('*', cors())

// Database connection
const connection = await mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'ethic',
})

const db = drizzle(connection)

// Routes
app.get('/', (c) => {
  return c.json({ message: 'Hello from Hono!' })
})

// Users routes
app.get('/users', async (c) => {
  const allUsers = await db.select().from(users)
  return c.json(allUsers)
})

export default {
  port: 8000,
  fetch: app.fetch
}