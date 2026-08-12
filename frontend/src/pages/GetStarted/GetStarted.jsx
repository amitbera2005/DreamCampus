import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './GetStarted.css'

import RankPredictorModal from '../RankPredictor/RankPredictorModal'


function GetStarted() {

  const navigate = useNavigate()

  const [showRankPredictor, setShowRankPredictor] = useState(false)


  const features = [

    {
      title: 'Rank Predictor',
      description:
        'Predict your expected rank and discover suitable colleges.',
      icon: '🎯',
      type: 'rank-predictor',
    },

    {
      title: 'Study Materials',
      description:
        'Access complete preparation materials.',
      icon: '📚',
      path: '/study-materials',
    },

    {
      title: 'Previous Year Questions',
      description:
        'Practice previous year question papers.',
      icon: '📝',
      path: '/previous-papers',
    },

    {
      title: 'AI Dashboard',
      description:
        'Your AI-powered student dashboard.',
      icon: '🤖',
      path: '/ai-dashboard',
    },

    {
      title: 'College Details',
      description:
        'Explore engineering and medical colleges.',
      icon: '🎓',
      path: '/college-details',
    },

  ]


  return (
    <>

      <div className="get-started-page">


        {/* ============================= */}
        {/* HEADING */}
        {/* ============================= */}

        <div className="get-started-heading">

          <span>
            DreamCampus
          </span>


          <h1>

            Everything You Need

            <br />

            <strong>
              In One Place
            </strong>

          </h1>


          <p>
            Choose a feature and start your journey.
          </p>

        </div>


        {/* ============================= */}
        {/* FEATURES */}
        {/* ============================= */}

        <div className="get-started-container">


          {features.map((feature, index) => (

            <div
              className="get-started-card"
              key={feature.title}
              style={{
                animationDelay: `${index * 0.1}s`
              }}

              onClick={() => {

                if (feature.type === 'rank-predictor') {

                  setShowRankPredictor(true)

                } else {

                  navigate(feature.path)

                }

              }}
            >


              <div className="get-started-icon">
                {feature.icon}
              </div>


              <div className="get-started-info">

                <h2>
                  {feature.title}
                </h2>

                <p>
                  {feature.description}
                </p>

              </div>


              <div className="get-started-arrow">
                →
              </div>


            </div>

          ))}

        </div>

      </div>


      {/* ============================= */}
      {/* RANK PREDICTOR MODAL */}
      {/* ============================= */}

      {showRankPredictor && (

        <RankPredictorModal
          onClose={() =>
            setShowRankPredictor(false)
          }
        />

      )}

    </>
  )
}

export default GetStarted