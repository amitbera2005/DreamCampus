import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PreviousYearQuestions.css'

function PreviousYearQuestions() {

  const navigate = useNavigate()

  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const loadQuestions = async () => {

      try {

        const response = await fetch(
          'http://localhost:5000/api/previous-year-questions'
        )

        const result = await response.json()

        if (result.success) {
          setQuestions(result.data)
        } else {
          console.error(
            'Failed to load previous year questions'
          )
        }

      } catch (error) {

        console.error(
          'Error loading previous year questions:',
          error
        )

      } finally {

        setLoading(false)

      }

    }

    loadQuestions()

  }, [])


  const exams = [
    {
      name: 'WBJEE',
      icon: '🎓',
      iconClass: 'pyq-wbjee-icon',
      description: 'Previous year questions for WBJEE.',
      exam: 'WBJEE',
    },
    {
      name: 'JEE Main',
      icon: '📘',
      iconClass: 'pyq-jee-icon',
      description: 'Previous year questions for JEE Main.',
      exam: 'JEE Main',
    },
    {
      name: 'NEET',
      icon: '🩺',
      iconClass: 'pyq-neet-icon',
      description: 'Previous year questions for NEET.',
      exam: 'NEET',
    },
  ]


  const openExam = (exam) => {

    navigate(
      `/previous-year-questions/${exam.exam
        .toLowerCase()
        .replace(' ', '-')}`
    )

  }


  return (
    <main className="pyq-page">

      <div className="pyq-overlay">

        <div className="pyq-modal">

          {/* CLOSE / BACK */}

          <button
            className="pyq-close"
            onClick={() => navigate('/')}
            type="button"
          >
            ×
          </button>


          {/* HEADER */}

          <div className="pyq-header">

            <div className="pyq-main-icon">
              📝
            </div>

            <span>
              DREAMCAMPUS
            </span>

            <h2>
              Previous Year Questions
            </h2>

            <p>
              Select your exam to continue
            </p>

          </div>


          {/* LOADING */}

          {loading ? (

            <div className="pyq-loading">
              Loading previous year questions...
            </div>

          ) : (

            <div className="pyq-exam-options">

              {exams.map((exam) => {

                const examQuestions =
                  questions.filter(
                    (item) =>
                      item.exam === exam.exam
                  )

                return (

                  <button
                    key={exam.name}
                    className="pyq-exam-card"
                    onClick={() =>
                      openExam(exam)
                    }
                    type="button"
                  >

                    <div
                      className={`pyq-exam-icon ${exam.iconClass}`}
                    >
                      {exam.icon}
                    </div>


                    <div className="pyq-exam-info">

                      <h3>
                        {exam.name}
                      </h3>

                      <p>
                        {exam.description}
                      </p>

                      <small>
                        {examQuestions.length}{' '}
                        question sets available
                      </small>

                    </div>


                    <span className="pyq-arrow">
                      →
                    </span>

                  </button>

                )

              })}

            </div>

          )}


          {/* FOOTER */}

          <div className="pyq-footer">
            Practice previous year questions and improve your preparation
          </div>

        </div>

      </div>

    </main>
  )
}

export default PreviousYearQuestions