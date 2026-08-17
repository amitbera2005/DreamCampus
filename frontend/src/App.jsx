import WBJEE from './pages/Exam/WBJEE/WBJEE'
import JEEMain from './pages/Exam/JEEMain/JEEMain'
import NEET from './pages/Exam/NEET/NEET'
import GetStarted from './pages/GetStarted/GetStarted'


import WBJEEPredictor from './pages/RankPredictor/WBJEE'
import JEEMainPredictor from './pages/RankPredictor/JEEMain'
import NEETPredictor from './pages/RankPredictor/NEET'


import StudyMaterials from './pages/StudyMaterials/StudyMaterials'
import WBJEEMaterials from './pages/StudyMaterials/WBJEE'
import JEEMainMaterials from './pages/StudyMaterials/JEEMain'
import NEETMaterials from './pages/StudyMaterials/NEET'


/* ============================= */
/* COMMON STUDY MATERIAL PAGES   */
/* ============================= */

import Physics from './pages/StudyMaterials/Physics'
import Chemistry from './pages/StudyMaterials/Chemistry'
import Mathematics from './pages/StudyMaterials/Mathematics'
import Biology from './pages/StudyMaterials/Biology'


/* ============================= */
/* PREVIOUS YEAR QUESTIONS       */
/* ============================= */

import PreviousYearQuestions
  from './pages/PreviousYearQuestions/PreviousYearQuestions'

import PYQExam
  from './pages/PreviousYearQuestions/PYQExam'


import {
  useEffect,
  useState,
} from 'react'


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom'


import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'


import AIDashboard
  from './pages/AIDashboard/AIDashboard'


/* ============================= */
/* COLLEGE DETAILS               */
/* ============================= */

import CollegeDetails
  from './pages/CollegeDetails/CollegeDetails'

import WBJEEColleges
  from './pages/CollegeDetails/WBJEE/WBJEEColleges'

import JEEMainColleges
  from './pages/CollegeDetails/JEEMain/JEEMainColleges'

import CollegePage
  from './pages/CollegeDetails/CollegePage/CollegePage'

import NEETColleges
  from './pages/CollegeDetails/NEET/NEETColleges'


/* ============================= */
/*     SCROLL TO TOP             */
/* ============================= */

function ScrollToTop() {

  const { pathname } = useLocation()


  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })

  }, [pathname])


  return null
}


/* ============================= */
/*     PROTECTED FEATURE PAGE    */
/* ============================= */

function ProtectedPage({
  isLoggedIn,
  onLogin,
  title,
  description,
}) {

  const navigate = useNavigate()


  if (!isLoggedIn) {

    return (

      <main className="protected-page">

        <div className="protected-card">

          <div className="protected-icon">
            🔒
          </div>


          <h2>
            Login Required
          </h2>


          <p>
            Please login to access {title}.
          </p>


          <button onClick={onLogin}>
            Login
          </button>


          <button
            className="back-home-button"
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </button>

        </div>

      </main>

    )
  }


  return (

    <main className="feature-page">

      <div className="feature-page-content">

        <span>
          DreamCampus
        </span>


        <h1>
          {title}
        </h1>


        <p>
          {description}
        </p>

      </div>

    </main>

  )
}


/* ============================= */
/*   PROTECTED COMPONENT PAGE    */
/* ============================= */

function ProtectedComponent({
  isLoggedIn,
  onLogin,
  title,
  children,
}) {

  const navigate = useNavigate()


  if (!isLoggedIn) {

    return (

      <main className="protected-page">

        <div className="protected-card">

          <div className="protected-icon">
            🔒
          </div>


          <h2>
            Login Required
          </h2>


          <p>
            Please login to access {title}.
          </p>


          <button onClick={onLogin}>
            Login
          </button>


          <button
            className="back-home-button"
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </button>

        </div>

      </main>

    )
  }


  return children
}


/* ============================= */
/*            APP                */
/* ============================= */

function App() {

  return (

    <BrowserRouter>

      <AppContent />

    </BrowserRouter>

  )
}


/* ============================= */
/*         APP CONTENT           */
/* ============================= */

function AppContent() {

  const navigate = useNavigate()


  /*
   * =============================
   * LOGIN STATE
   * =============================
   *
   * Refresh korleo login thakbe.
   */

  const [isLoggedIn, setIsLoggedIn] = useState(() => {

    return (
      localStorage.getItem(
        'dreamCampusStudent'
      ) !== null
    )

  })


  /*
   * =============================
   * STUDENT DATA
   * =============================
   */

  const [student, setStudent] = useState(() => {

    try {

      const savedStudent =
        localStorage.getItem(
          'dreamCampusStudent'
        )


      return savedStudent
        ? JSON.parse(savedStudent)
        : null

    } catch {

      return null

    }

  })


  /*
   * =============================
   * PROFILE PICTURE
   * =============================
   */

const [profilePic, setProfilePic] = useState(null)

useEffect(() => {

  if (!student?.userId) {
    setProfilePic(null)
    return
  }

  const profilePicKey =
    `dreamCampusProfilePic_${student.userId}`

  const savedProfilePic =
    localStorage.getItem(profilePicKey)

  setProfilePic(savedProfilePic || null)

}, [student])


  /* ============================= */
  /* LOGIN */
  /* ============================= */

  const handleLogin = (studentData) => {

    localStorage.setItem(
      'dreamCampusStudent',
      JSON.stringify(studentData)
    )


    setStudent(studentData)


    setIsLoggedIn(true)


    navigate('/')

  }


  /* ============================= */
  /* LOGOUT */
  /* ============================= */

const handleLogout = () => {

  localStorage.removeItem('dreamCampusStudent')

  setStudent(null)

  setIsLoggedIn(false)

  setProfilePic(null)

  navigate('/')
}

  return (

    <>

      {/* ============================= */}
      {/* SCROLL TO TOP                  */}
      {/* ============================= */}

      <ScrollToTop />


      {/* ============================= */}
      {/* NAVBAR                         */}
      {/* ============================= */}

      <Navbar
        isLoggedIn={isLoggedIn}
        student={student}
        onLogin={() => navigate('/login')}
        onLogout={handleLogout}
        profilePic={profilePic}
        setProfilePic={setProfilePic}
      />


      {/* ============================= */}
      {/* ROUTES                         */}
      {/* ============================= */}

      <Routes>


        {/* ============================= */}
        {/* HOME                          */}
        {/* ============================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ============================= */}
        {/* LOGIN                         */}
        {/* ============================= */}

        <Route
          path="/login"
          element={

            isLoggedIn ? (

              <Navigate
                to="/"
                replace
              />

            ) : (

              <Login
                onClose={() => navigate('/')}
                onLogin={handleLogin}
              />

            )

          }
        />


        {/* ============================= */}
        {/* GET STARTED                   */}
        {/* ============================= */}

        <Route
          path="/get-started"
          element={<GetStarted />}
        />


        {/* ============================= */}
        {/* EXAM INFORMATION PAGES       */}
        {/* ============================= */}

        <Route
          path="/exams/wbjee"
          element={<WBJEE />}
        />


        <Route
          path="/exams/jee-main"
          element={<JEEMain />}
        />


        <Route
          path="/exams/neet"
          element={<NEET />}
        />


        {/* ============================= */}
        {/* RANK PREDICTOR MAIN           */}
        {/* ============================= */}

        <Route
          path="/rank-predictor"
          element={

            <ProtectedPage
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="Rank Predictor"
              description="Predict your expected rank using your exam performance."
            />

          }
        />


        {/* ============================= */}
        {/* WBJEE RANK PREDICTOR          */}
        {/* ============================= */}

        <Route
          path="/rank-predictor/wbjee"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="WBJEE Rank Predictor"
            >

              <WBJEEPredictor />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* JEE MAIN RANK PREDICTOR       */}
        {/* ============================= */}

        <Route
          path="/rank-predictor/jee-main"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="JEE Main Rank Predictor"
            >

              <JEEMainPredictor />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* NEET RANK PREDICTOR           */}
        {/* ============================= */}

        <Route
          path="/rank-predictor/neet"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="NEET Rank Predictor"
            >

              <NEETPredictor />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* STUDY MATERIALS               */}
        {/* ============================= */}

        <Route
          path="/study-materials"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="Study Materials"
            >

              <StudyMaterials />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* WBJEE STUDY MATERIALS         */}
        {/* ============================= */}

        <Route
          path="/study-materials/wbjee"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="WBJEE Study Materials"
            >

              <WBJEEMaterials />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* JEE MAIN STUDY MATERIALS      */}
        {/* ============================= */}

        <Route
          path="/study-materials/jee-main"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="JEE Main Study Materials"
            >

              <JEEMainMaterials />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* NEET STUDY MATERIALS          */}
        {/* ============================= */}

        <Route
          path="/study-materials/neet"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="NEET Study Materials"
            >

              <NEETMaterials />

            </ProtectedComponent>

          }
        />


        {/* ===================================== */}
        {/* COMMON PHYSICS PAGE                  */}
        {/* ===================================== */}

        <Route
          path="/study-materials/physics"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="Physics"
            >

              <Physics />

            </ProtectedComponent>

          }
        />


        {/* ===================================== */}
        {/* COMMON CHEMISTRY PAGE                */}
        {/* ===================================== */}

        <Route
          path="/study-materials/chemistry"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="Chemistry"
            >

              <Chemistry />

            </ProtectedComponent>

          }
        />


        {/* ===================================== */}
        {/* COMMON MATHEMATICS PAGE              */}
        {/* ===================================== */}

        <Route
          path="/study-materials/mathematics"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="Mathematics"
            >

              <Mathematics />

            </ProtectedComponent>

          }
        />


        {/* ===================================== */}
        {/* NEET BIOLOGY PAGE                    */}
        {/* ===================================== */}

        <Route
          path="/study-materials/biology"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="Biology"
            >

              <Biology />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* PREVIOUS YEAR QUESTIONS       */}
        {/* ============================= */}

        <Route
          path="/previous-year-questions"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="Previous Year Questions"
            >

              <PreviousYearQuestions />

            </ProtectedComponent>

          }
        />


        <Route
          path="/previous-year-questions/:exam"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="Previous Year Questions"
            >

              <PYQExam />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* AI DASHBOARD                  */}
        {/* ============================= */}

        <Route
          path="/ai-dashboard"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="AI Dashboard"
            >

              <AIDashboard />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* COLLEGE DETAILS               */}
        {/* ============================= */}

        <Route
          path="/college-details"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="College Details"
            >

              <CollegeDetails />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* WBJEE COLLEGE LIST            */}
        {/* ============================= */}

        <Route
          path="/college-details/wbjee"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="WBJEE College Details"
            >

              <WBJEEColleges />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* JEE MAIN COLLEGE LIST         */}
        {/* ============================= */}

        <Route
          path="/college-details/jee-main"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="JEE Main College Details"
            >

              <JEEMainColleges />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* INDIVIDUAL COLLEGE DETAILS    */}
        {/* ============================= */}

        <Route
          path="/college-details/:exam/:collegeId"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="College Details"
            >

              <CollegePage />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* NEET COLLEGE LIST             */}
        {/* ============================= */}

        <Route
          path="/college-details/neet"
          element={

            <ProtectedComponent
              isLoggedIn={isLoggedIn}
              onLogin={() => navigate('/login')}
              title="NEET College Details"
            >

              <NEETColleges />

            </ProtectedComponent>

          }
        />


        {/* ============================= */}
        {/* PROFILE                       */}
        {/* ============================= */}

        <Route
          path="/profile"
          element={

            isLoggedIn ? (

              <Profile
                student={student}
                onLogout={handleLogout}
                profilePic={profilePic}
                setProfilePic={setProfilePic}
              />

            ) : (

              <Navigate
                to="/"
                replace
              />

            )

          }
        />


        {/* ============================= */}
        {/* UNKNOWN URL                   */}
        {/* ============================= */}

        <Route
          path="*"
          element={

            <Navigate
              to="/"
              replace
            />

          }
        />


      </Routes>

    </>

  )
}


export default App