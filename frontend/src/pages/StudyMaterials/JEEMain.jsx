import { useNavigate } from 'react-router-dom'

function JEEMain() {

  const navigate = useNavigate()

  const subjects = [
    {
      name: 'Mathematics',
      icon: '📐',
      description: 'Complete Mathematics preparation resources for JEE Main.',
      path: '/study-materials/mathematics',
    },
    {
      name: 'Physics',
      icon: '⚡',
      description: 'Complete Physics preparation resources for JEE Main.',
      path: '/study-materials/physics',
    },
    {
      name: 'Chemistry',
      icon: '🧪',
      description: 'Complete Chemistry preparation resources for JEE Main.',
      path: '/study-materials/chemistry',
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

          <div className="exam-materials-icon jee-main-icon">
            📘
          </div>

          <span>
            JEE MAIN
          </span>

          <h1>
            JEE Main Study Materials
          </h1>

          <p>
            Choose a subject and start your JEE Main preparation.
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
          JEE Main • Learn • Practice • Improve
        </div>

      </div>

    </main>
  )
}

export default JEEMain