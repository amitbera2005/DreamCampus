const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

pool.on('connect', () => {
  console.log('Database connection established')
})

pool.on('error', (error) => {
  console.error(
    'Unexpected PostgreSQL error:',
    error
  )
})

module.exports = pool
