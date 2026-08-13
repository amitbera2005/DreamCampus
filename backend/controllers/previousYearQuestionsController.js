const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

// Get all previous year questions
const getAllQuestions = async (req, res) => {

  try {

    const result = await pool.query(`
      SELECT
        id,
        exam,
        year,
        subject,
        title,
        pdf_url
      FROM previous_year_questions
      ORDER BY year DESC, exam, subject
    `)

    res.json({
      success: true,
      data: result.rows
    })

  } catch (error) {

    console.error(
      'Error loading previous year questions:',
      error
    )

    res.status(500).json({
      success: false,
      message: 'Failed to load previous year questions'
    })

  }

}


// Get questions by exam
const getQuestionsByExam = async (req, res) => {

  try {

    const { exam } = req.params

    const result = await pool.query(
      `
      SELECT
        id,
        exam,
        year,
        subject,
        title,
        pdf_url
      FROM previous_year_questions
      WHERE exam = $1
      ORDER BY year DESC, subject
      `,
      [exam]
    )

    res.json({
      success: true,
      data: result.rows
    })

  } catch (error) {

    console.error(
      'Error loading questions by exam:',
      error
    )

    res.status(500).json({
      success: false,
      message: 'Failed to load previous year questions'
    })

  }

}


module.exports = {
  getAllQuestions,
  getQuestionsByExam
}
