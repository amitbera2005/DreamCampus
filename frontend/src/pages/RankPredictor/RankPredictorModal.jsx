import { useNavigate } from 'react-router-dom'
import './RankPredictorModal.css'

function RankPredictorModal({ onClose }) {
  const navigate = useNavigate()

  const selectExam = (path) => {
    onClose()
    navigate(path)
  }

  return (
    <div
      className="predictor-modal-overlay"
      onClick={onClose}
    >

      <div
        className="predictor-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}

        <button
          className="predictor-close"
          onClick={onClose}
        >
          ×
        </button>


        {/* HEADER */}

        <div className="predictor-modal-header">

          <div className="predictor-modal-icon">
            🎯
          </div>

          <span>
            DreamCampus
          </span>

          <h2>
            Rank Predictor
          </h2>

          <p>
            Select your examination to continue
          </p>

        </div>


        {/* EXAM OPTIONS */}

        <div className="predictor-exam-options">


          {/* WBJEE */}

          <button
            className="predictor-exam-card"
            onClick={() =>
              selectExam('/rank-predictor/wbjee')
            }
          >

            <div className="predictor-exam-icon wbjee-icon">
              ⚡
            </div>

            <div className="predictor-exam-info">

              <h3>
                WBJEE
              </h3>

              <p>
                West Bengal Joint Entrance Examination
              </p>

            </div>

            <span className="predictor-arrow">
              →
            </span>

          </button>


          {/* JEE MAIN */}

          <button
            className="predictor-exam-card"
            onClick={() =>
              selectExam('/rank-predictor/jee-main')
            }
          >

            <div className="predictor-exam-icon jee-icon">
              🚀
            </div>

            <div className="predictor-exam-info">

              <h3>
                JEE Main
              </h3>

              <p>
                Joint Entrance Examination Main
              </p>

            </div>

            <span className="predictor-arrow">
              →
            </span>

          </button>


          {/* NEET */}

          <button
            className="predictor-exam-card"
            onClick={() =>
              selectExam('/rank-predictor/neet')
            }
          >

            <div className="predictor-exam-icon neet-icon">
              🩺
            </div>

            <div className="predictor-exam-info">

              <h3>
                NEET
              </h3>

              <p>
                National Eligibility cum Entrance Test
              </p>

            </div>

            <span className="predictor-arrow">
              →
            </span>

          </button>

        </div>


        <div className="predictor-modal-footer">
          Choose your exam to start prediction
        </div>

      </div>

    </div>
  )
}

export default RankPredictorModal