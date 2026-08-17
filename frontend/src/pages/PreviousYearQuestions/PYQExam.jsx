import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './PYQExam.css'


function PYQExam() {

  const navigate = useNavigate()
  const { exam } = useParams()

  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedYear, setSelectedYear] = useState(null)


  /* ============================= */
  /* EXAM NAME */
  /* ============================= */

  const examName = exam
    ? exam === 'jee-main'
      ? 'JEE Main'
      : exam.toUpperCase()
    : ''


  /* ============================= */
  /* LOAD QUESTIONS */
  /* ============================= */

  useEffect(() => {

    const loadQuestions = async () => {

      try {

        setLoading(true)

const response = await fetch(
  `https://dreamcampus.onrender.com/api/previous-year-questions/exam/${encodeURIComponent(examName)}`
)

        const result = await response.json()

        if (result.success) {

          setQuestions(result.data)

        } else {

          console.error(
            'Failed to load questions'
          )

        }

      } catch (error) {

        console.error(
          'Error loading questions:',
          error
        )

      } finally {

        setLoading(false)

      }

    }

    if (examName) {
      loadQuestions()
    }

  }, [examName])


  /* ============================= */
  /* YEARS */
  /* ============================= */

  const years = [2026, 2025]


  /* ============================= */
  /* SELECT YEAR */
  /* ============================= */

  const selectYear = (year) => {

    setSelectedYear(year)

  }


  /* ============================= */
  /* BACK */
  /* ============================= */

  const goBack = () => {

    if (selectedYear !== null) {

      setSelectedYear(null)

    } else {

      navigate(
        '/previous-year-questions'
      )

    }

  }


  /* ============================= */
  /* YEAR QUESTIONS */
  /* ============================= */

  const yearQuestions =
    questions.filter(
      (item) =>
        item.year === selectedYear
    )


  /* ============================= */
  /* SUBJECT ICON */
  /* ============================= */

  const getSubjectIcon = (subject) => {

    const value =
      subject.toLowerCase()

    if (
      value.includes('physics')
    ) {
      return '⚡'
    }

    if (
      value.includes('chemistry')
    ) {
      return '🧪'
    }

    if (
      value.includes('mathematics') ||
      value.includes('math')
    ) {
      return '📐'
    }

    if (
      value.includes('biology')
    ) {
      return '🧬'
    }

    return '📘'

  }


  /* ============================= */
  /* SUBJECT CLASS */
  /* ============================= */

  const getSubjectClass = (subject) => {

    const value =
      subject.toLowerCase()

    if (
      value.includes('physics')
    ) {
      return 'pyq-subject-physics'
    }

    if (
      value.includes('chemistry')
    ) {
      return 'pyq-subject-chemistry'
    }

    if (
      value.includes('mathematics') ||
      value.includes('math')
    ) {
      return 'pyq-subject-mathematics'
    }

    if (
      value.includes('biology')
    ) {
      return 'pyq-subject-biology'
    }

    return 'pyq-subject-default'

  }


  return (
    <main className="pyq-exam-page">

      <div className="pyq-exam-overlay">

        <div className="pyq-exam-modal">


          {/* ============================= */}
          {/* CLOSE */}
          {/* ============================= */}

          <button
            className="pyq-exam-close"
            onClick={() =>
              navigate('/')
            }
            type="button"
          >
            ×
          </button>


          {/* ============================= */}
          {/* HEADER */}
          {/* ============================= */}

          <div className="pyq-exam-header">

            <div className="pyq-exam-main-icon">
              📝
            </div>

            <span>
              DREAMCAMPUS
            </span>

            <h2>
              {examName}
            </h2>

            <p>
              Previous Year Questions
            </p>

          </div>


          {/* ============================= */}
          {/* LOADING */}
          {/* ============================= */}

          {loading ? (

            <div className="pyq-exam-loading">

              <div className="pyq-spinner">
                ⟳
              </div>

              <p>
                Loading question papers...
              </p>

            </div>

          ) : questions.length === 0 ? (

            /* ============================= */
            /* NO DATA */
            /* ============================= */

            <div className="pyq-no-data">

              <div>
                📭
              </div>

              <h3>
                No Question Papers Found
              </h3>

              <p>
                No previous year questions are
                available for {examName}.
              </p>

            </div>

          ) : selectedYear === null ? (

            /* ============================= */
            /* YEAR SELECTION */
            /* ============================= */

            <div className="pyq-year-section">

              <div className="pyq-section-title">

                <span>
                  📅
                </span>

                <div>

                  <h3>
                    Select Year
                  </h3>

                  <p>
                    Choose a year to view
                    question papers.
                  </p>

                </div>

              </div>


              <div className="pyq-year-grid">

                {years.map((year) => {

                  const count =
                    questions.filter(
                      (item) =>
                        item.year === year
                    ).length

                  return (

                    <button
                      key={year}
                      className="pyq-year-card"
                      onClick={() =>
                        selectYear(year)
                      }
                      type="button"
                    >

                      <div className="pyq-year-icon">
                        📄
                      </div>

                      <div className="pyq-year-info">

                        <h3>
                          {year}
                        </h3>

                        <p>
                          {count}{' '}
                          question{' '}
                          {count === 1
                            ? 'set'
                            : 'sets'}
                        </p>

                      </div>

                      <span className="pyq-year-arrow">
                        →
                      </span>

                    </button>

                  )

                })}

              </div>

            </div>

          ) : (

            /* ============================= */
            /* SUBJECT / PDF SECTION */
            /* ============================= */

            <div className="pyq-subject-section">


              <button
                className="pyq-back-button"
                onClick={goBack}
                type="button"
              >
                ← Back to Years
              </button>


              <div className="pyq-selected-year">

                <div className="pyq-selected-year-icon">
                  📅
                </div>

                <div>

                  <span>
                    {examName}
                  </span>

                  <h3>
                    {selectedYear}
                  </h3>

                </div>

              </div>


              <div className="pyq-section-title">

                <span>
                  📚
                </span>

                <div>

                  <h3>
                    Question Papers
                  </h3>

                  <p>
                    Select a subject to open
                    the question paper.
                  </p>

                </div>

              </div>


              <div className="pyq-subject-list">

                {yearQuestions.map(
                  (item) => (

                    <div
                      className="pyq-subject-card"
                      key={item.id}
                    >

                      <div
                        className={`pyq-subject-icon ${getSubjectClass(
                          item.subject
                        )}`}
                      >

                        {getSubjectIcon(
                          item.subject
                        )}

                      </div>


                      <div className="pyq-subject-info">

                        <h3>
                          {item.subject}
                        </h3>

                        <p>
                          {item.title}
                        </p>

                      </div>


                      <div className="pyq-pdf-actions">

                        {item.pdf_url ? (

                          <>

                            <a
                              href={item.pdf_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="pyq-view-button"
                            >
                              View PDF
                            </a>

                            <a
                              href={item.pdf_url}
                              download
                              className="pyq-download-button"
                            >
                              ↓
                            </a>

                          </>

                        ) : (

                          <span className="pyq-no-pdf">
                            PDF unavailable
                          </span>

                        )}

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          )}


          {/* ============================= */}
          {/* FOOTER */}
          {/* ============================= */}

          {!loading &&
            questions.length > 0 && (

            <div className="pyq-exam-footer">

              Practice previous year questions
              and improve your preparation.

            </div>

          )}

        </div>

      </div>

    </main>
  )
}


export default PYQExam