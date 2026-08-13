import { useNavigate } from 'react-router-dom'
import './StudyMaterials.css'

function StudyMaterials() {

  const navigate = useNavigate()

  const exams = [
    {
      name: 'WBJEE',
      icon: '🎓',
      iconClass: 'wbjee-icon',
      description: 'Complete study materials for WBJEE preparation.',
      path: '/study-materials/wbjee',
    },
    {
      name: 'JEE Main',
      icon: '📘',
      iconClass: 'jee-icon',
      description: 'Complete study materials for JEE Main preparation.',
      path: '/study-materials/jee-main',
    },
    {
      name: 'NEET',
      icon: '🩺',
      iconClass: 'neet-icon',
      description: 'Complete study materials for NEET preparation.',
      path: '/study-materials/neet',
    },
  ]

  return (
    <main className="study-materials-page">

      <div className="study-materials-overlay">

        <div className="study-materials-modal">

          {/* CLOSE / BACK */}

          <button
            className="study-materials-close"
            onClick={() => navigate('/')}
            type="button"
          >
            ×
          </button>


          {/* HEADER */}

          <div className="study-materials-header">

            <div className="study-materials-icon">
              📚
            </div>

            <span>
              DREAMCAMPUS
            </span>

            <h2>
              Study Materials
            </h2>

            <p>
              Select your exam to continue
            </p>

          </div>


          {/* EXAM OPTIONS */}

          <div className="study-exam-options">

            {exams.map((exam) => (

              <button
                key={exam.name}
                className="study-exam-card"
                onClick={() => navigate(exam.path)}
                type="button"
              >

                <div
                  className={`study-exam-icon ${exam.iconClass}`}
                >
                  {exam.icon}
                </div>


                <div className="study-exam-info">

                  <h3>
                    {exam.name}
                  </h3>

                  <p>
                    {exam.description}
                  </p>

                </div>


                <span className="study-arrow">
                  →
                </span>

              </button>

            ))}

          </div>


          {/* FOOTER */}

          <div className="study-materials-footer">
            Choose your exam to access your preparation materials
          </div>

        </div>

      </div>

    </main>
  )
}

export default StudyMaterials