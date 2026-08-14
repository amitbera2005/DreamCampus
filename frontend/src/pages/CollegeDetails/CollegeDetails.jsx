import { useNavigate } from 'react-router-dom'

import './CollegeDetails.css'


function CollegeDetails() {

  const navigate = useNavigate()


  const exams = [
    {
      name: 'WBJEE',
      description: 'Explore top engineering colleges through WBJEE.',
      icon: '🎓',
      iconClass: 'college-wbjee-icon',
      path: '/college-details/wbjee',
    },
    {
      name: 'JEE Main',
      description: 'Explore engineering colleges through JEE Main.',
      icon: '🏛️',
      iconClass: 'college-jee-icon',
      path: '/college-details/jee-main',
    },
    {
      name: 'NEET',
      description: 'Explore medical colleges through NEET.',
      icon: '🩺',
      iconClass: 'college-neet-icon',
      path: '/college-details/neet',
    },
  ]


  const handleExamSelect = (exam) => {
    navigate(exam.path)
  }


  const handleClose = () => {
    navigate(-1)
  }


  return (
    <div className="college-page">

      <div
        className="college-overlay"
        onClick={handleClose}
      >

        <div
          className="college-modal"
          onClick={(e) => e.stopPropagation()}
        >

          {/* CLOSE */}

          <button
            className="college-close"
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </button>


          {/* HEADER */}

          <div className="college-header">

            <div className="college-main-icon">
              🏫
            </div>

            <span>
              DREAMCAMPUS
            </span>

            <h2>
              Explore Colleges
            </h2>

            <p>
              Select your entrance exam to explore colleges.
            </p>

          </div>


          {/* EXAM OPTIONS */}

          <div className="college-exam-options">

            {exams.map((exam) => (

              <button
                key={exam.name}
                className="college-exam-card"
                onClick={() => handleExamSelect(exam)}
              >

                <div
                  className={`college-exam-icon ${exam.iconClass}`}
                >
                  {exam.icon}
                </div>


                <div className="college-exam-info">

                  <h3>
                    {exam.name}
                  </h3>

                  <p>
                    {exam.description}
                  </p>

                  <small>
                    Explore Colleges
                  </small>

                </div>


                <div className="college-arrow">
                  →
                </div>

              </button>

            ))}

          </div>


          {/* FOOTER */}

          <div className="college-footer">
            Find the right college for your future.
          </div>

        </div>

      </div>

    </div>
  )
}


export default CollegeDetails