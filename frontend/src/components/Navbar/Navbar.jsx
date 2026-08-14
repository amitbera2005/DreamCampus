import { useState } from 'react'
import logo from '../../assets/dreamcampus-logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

import RankPredictorModal from '../../pages/RankPredictor/RankPredictorModal'


function Navbar({
  isLoggedIn,
  student,
  profilePic,
  onLogin,
  onLogout
}) {

  const [profileOpen, setProfileOpen] = useState(false)

  const [showRankPredictor, setShowRankPredictor] = useState(false)


  return (
    <>
      <nav className="navbar">


        {/* ============================= */}
        {/* LOGO */}
        {/* ============================= */}

        <Link
          to="/"
          className="navbar-brand"
        >

          <div className="brand-icon">

            <img
              src={logo}
              alt="DreamCampus"
            />

          </div>


          <div className="brand-name">

            Dream<span>Campus</span>

          </div>

        </Link>


        {/* ============================= */}
        {/* NAVIGATION */}
        {/* ============================= */}

        <div className="navbar-menu">


          <Link
            to="/"
            className="nav-link"
          >
            Home
          </Link>


          {/* RANK PREDICTOR */}

          <button
            className="nav-link navbar-feature-button"
            onClick={() => setShowRankPredictor(true)}
          >
            Rank Predictor
          </button>


          <Link
            to="/study-materials"
            className="nav-link"
          >
            Study Materials
          </Link>


          <Link
            to="/previous-year-questions"
            className="nav-link"
          >
            Previous Year Questions
          </Link>

          <Link
            to="/ai-dashboard"
            className="nav-link"
          >
            AI Dashboard
          </Link>


          <Link
            to="/college-details"
            className="nav-link"
          >
            College Details
          </Link>

        </div>


        {/* ============================= */}
        {/* LOGIN / PROFILE */}
        {/* ============================= */}

        <div className="profile-area">

          {!isLoggedIn ? (

            <button
              className="login-btn"
              onClick={onLogin}
            >
              Login
            </button>

          ) : (

            <div className="profile-wrapper">

              <button
                className="profile-btn"
                onClick={() =>
                  setProfileOpen(!profileOpen)
                }
              >

                <div className="profile-avatar">

                  {profilePic ? (

                    <img
                      src={profilePic}
                      alt="Profile"
                    />

                  ) : (

                    '👤'

                  )}

                </div>


                <span>
                  Profile
                </span>


                <span className="profile-arrow">
                  ▾
                </span>

              </button>


              {profileOpen && (

                <div className="profile-dropdown">


                  <Link
                    to="/profile"
                    onClick={() =>
                      setProfileOpen(false)
                    }
                  >
                    👤 My Profile
                  </Link>


                  <button
                    onClick={() => {
                      setProfileOpen(false)
                      onLogout()
                    }}
                  >
                    🚪 Logout
                  </button>

                </div>

              )}

            </div>

          )}

        </div>

      </nav>


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

export default Navbar