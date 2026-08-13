import { useNavigate } from 'react-router-dom'

function NEET() {

  const navigate = useNavigate()

  const subjects = [
    {
      name: 'Physics',
      icon: '⚡',
      description: 'Complete Physics preparation resources for NEET.',
      path: '/study-materials/physics',
    },
    {
      name: 'Chemistry',
      icon: '🧪',
      description: 'Complete Chemistry preparation resources for NEET.',
      path: '/study-materials/chemistry',
    },
    {
      name: 'Biology',
      icon: '🧬',
      description: 'Complete Biology preparation resources for NEET.',
      path: '/study-materials/biology',
    },
  ]

  return (
    <main className="exam-materials-page">

      <div className="exam-materials-container">

        <button
          className="exam-back-button"
          onClick={() => navigate('/study-materials')}
          type="button"
        >
          ← Change Exam
        </button>


        <div className="exam-materials-header">

          <div className="exam-materials-icon neet-main-icon">
            🩺
          </div>

          <span>
            NEET
          </span>

          <h1>
            NEET Study Materials
          </h1>

          <p>
            Choose a subject and start your NEET preparation.
          </p>

        </div>


        <div className="subject-options">

          {subjects.map((subject) => (

            <div
              className="subject-option-card"
              key={subject.name}
            >

              <div className="subject-option-icon">
                {subject.icon}
              </div>


              <div className="subject-option-info">

                <h2>
                  {subject.name}
                </h2>

                <p>
                  {subject.description}
                </p>

              </div>


              <button
                className="subject-view-button"
                type="button"
                onClick={() => navigate(subject.path)}
              >
                View →
              </button>

            </div>

          ))}

        </div>


        <div className="exam-materials-footer">
          NEET • Learn • Practice • Improve
        </div>

      </div>

    </main>
  )
}

export default NEET