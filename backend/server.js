const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
require('dotenv').config()

const app = express()

const studyMaterialsRouter =
  require('./routes/studyMaterials')

  const previousYearQuestionsRouter =
  require('./routes/previousYearQuestions')

  const aiRouter =
  require('./routes/ai')


// ========================================
// MIDDLEWARE
// ========================================

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174'
  ]
}))
app.use(express.json())

app.use(
  '/api/study-materials',
  studyMaterialsRouter
)

app.use(
  '/api/previous-year-questions',
  previousYearQuestionsRouter
)

app.use(
  '/api/ai',
  aiRouter
)
// ========================================
// POSTGRESQL CONNECTION
// ========================================

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})


// ========================================
// TEST DATABASE CONNECTION
// ========================================

pool.query('SELECT NOW()')
  .then(() => {
    console.log('PostgreSQL connected successfully')
  })
  .catch((error) => {
    console.error(
      'PostgreSQL connection failed:',
      error.message
    )
  })


// ========================================
// TEST ROUTE
// ========================================

app.get('/', (req, res) => {

  res.json({
    message: 'DreamCampus Backend is running'
  })

})


// ========================================
// DATABASE TEST ROUTE
// ========================================

app.get('/api/test-db', async (req, res) => {

  try {

    const result = await pool.query(
      'SELECT NOW() AS current_time'
    )

    res.json({
      success: true,
      message: 'PostgreSQL is connected',
      time: result.rows[0].current_time
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      success: false,
      message: 'Database connection failed'
    })

  }

})


// ========================================
// START SERVER
// ========================================

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {

  console.log(
    `DreamCampus backend running on port ${PORT}`
  )

})
