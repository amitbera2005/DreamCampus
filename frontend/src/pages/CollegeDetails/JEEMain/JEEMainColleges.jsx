import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './JEEMainColleges.css'


function JEEMainColleges() {

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')


  /*
   * =============================
   * TOP 20 JEE MAIN COLLEGES
   * =============================
   *
   * Overall College Rank
   * This is NOT cutoff rank.
   *
   * IITs are not included because
   * IIT admission is through JEE Advanced.
   */

  const colleges = [

    {
      id: 1,
      name: 'National Institute of Technology Tiruchirappalli',
      location: 'Tiruchirappalli, Tamil Nadu',
      image: '/JEEMain/nit-trichy.jpg',
    },

    {
      id: 2,
      name: 'National Institute of Technology Rourkela',
      location: 'Rourkela, Odisha',
      image: '/JEEMain/nit-rourkela.jpg',
    },

    {
      id: 3,
      name: 'National Institute of Technology Karnataka, Surathkal',
      location: 'Surathkal, Karnataka',
      image: '/JEEMain/nit-surathkal.jpg',
    },

    {
      id: 4,
      name: 'National Institute of Technology Warangal',
      location: 'Warangal, Telangana',
      image: '/JEEMain/nit-warangal.jpg',
    },

    {
      id: 5,
      name: 'National Institute of Technology Calicut',
      location: 'Kozhikode, Kerala',
      image: '/JEEMain/nit-calicut.jpg',
    },

    {
      id: 6,
      name: 'Visvesvaraya National Institute of Technology',
      location: 'Nagpur, Maharashtra',
      image: '/JEEMain/vnit-nagpur.jpg',
    },

    {
      id: 7,
      name: 'National Institute of Technology Durgapur',
      location: 'Durgapur, West Bengal',
      image: '/JEEMain/nit-durgapur.jpg',
    },

    {
      id: 8,
      name: 'National Institute of Technology Silchar',
      location: 'Silchar, Assam',
      image: '/JEEMain/nit-silchar.jpg',
    },

    {
      id: 9,
      name: 'Malaviya National Institute of Technology Jaipur',
      location: 'Jaipur, Rajasthan',
      image: '/JEEMain/mnit-jaipur.jpg',
    },

    {
      id: 10,
      name: 'National Institute of Technology Kurukshetra',
      location: 'Kurukshetra, Haryana',
      image: '/JEEMain/nit-kurukshetra.jpg',
    },

    {
      id: 11,
      name: 'National Institute of Technology Jamshedpur',
      location: 'Jamshedpur, Jharkhand',
      image: '/JEEMain/nit-jamshedpur.jpg',
    },

    {
      id: 12,
      name: 'National Institute of Technology Raipur',
      location: 'Raipur, Chhattisgarh',
      image: '/JEEMain/nit-raipur.jpg',
    },

    {
      id: 13,
      name: 'National Institute of Technology Hamirpur',
      location: 'Hamirpur, Himachal Pradesh',
      image: '/JEEMain/nit-hamirpur.jpg',
    },

    {
      id: 14,
      name: 'Motilal Nehru National Institute of Technology Allahabad',
      location: 'Prayagraj, Uttar Pradesh',
      image: '/JEEMain/mnnit-allahabad.jpg',
    },

    {
      id: 15,
      name: 'Indian Institute of Information Technology Allahabad',
      location: 'Prayagraj, Uttar Pradesh',
      image: '/JEEMain/iiit-allahabad.jpg',
    },

    {
      id: 16,
      name: 'Indian Institute of Information Technology Lucknow',
      location: 'Lucknow, Uttar Pradesh',
      image: '/JEEMain/iiit-lucknow.jpg',
    },

    {
      id: 17,
      name: 'Indian Institute of Information Technology Design and Manufacturing Jabalpur',
      location: 'Jabalpur, Madhya Pradesh',
      image: '/JEEMain/iiitdm-jabalpur.jpg',
    },

    {
      id: 18,
      name: 'Indian Institute of Information Technology Guwahati',
      location: 'Guwahati, Assam',
      image: '/JEEMain/iiit-guwahati.jpg',
    },

    {
      id: 19,
      name: 'Delhi Technological University',
      location: 'New Delhi, Delhi',
      image: '/JEEMain/dtu.jpg',
    },

    {
      id: 20,
      name: 'Netaji Subhas University of Technology',
      location: 'New Delhi, Delhi',
      image: '/JEEMain/nsut.jpg',
    },

  ]


  /*
   * =============================
   * SEARCH
   * =============================
   */

  const filteredColleges = useMemo(() => {

    const search = searchTerm
      .trim()
      .toLowerCase()


    if (!search) {
      return colleges
    }


    return colleges.filter((college) =>

      college.name
        .toLowerCase()
        .includes(search)

      ||

      college.location
        .toLowerCase()
        .includes(search)

    )

  }, [searchTerm])


  /*
   * =============================
   * BACK
   * =============================
   */

  const handleBack = () => {

    navigate('/college-details')

  }


  /*
   * =============================
   * COLLEGE CLICK
   * =============================
   */

  const handleCollegeClick = (college) => {

    navigate(
      `/college-details/jee-main/${college.id}`
    )

  }


  return (

    <main className="jee-main-college-page">


      {/* ============================= */}
      {/* HEADER */}
      {/* ============================= */}

      <section className="jee-main-college-header">


        <button
          className="jee-main-back-button"
          onClick={handleBack}
        >
          ← Back
        </button>


        <div className="jee-main-heading">

          <span>
            COLLEGE DETAILS
          </span>


          <h1>
            JEE Main Colleges
          </h1>


          <p>
            Explore top engineering colleges through JEE Main.
          </p>

        </div>

      </section>


      {/* ============================= */}
      {/* SEARCH */}
      {/* ============================= */}

      <section className="jee-main-search-section">


        <div className="jee-main-search-box">

          <span className="jee-main-search-icon">
            🔍
          </span>


          <input
            type="text"
            placeholder="Search college or location..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />


          {searchTerm && (

            <button
              className="jee-main-search-clear"
              onClick={() => setSearchTerm('')}
            >
              ×
            </button>

          )}

        </div>


        <p className="jee-main-result-count">

          {filteredColleges.length}

          {' '}

          {filteredColleges.length === 1
            ? 'college'
            : 'colleges'}

          {' '}
          found

        </p>

      </section>


      {/* ============================= */}
      {/* COLLEGE GRID */}
      {/* ============================= */}

      <section className="jee-main-college-grid">


        {filteredColleges.map((college) => (

          <article
            key={college.id}
            className="jee-main-college-card"
            onClick={() =>
              handleCollegeClick(college)
            }
          >


            {/* ============================= */}
            {/* IMAGE */}
            {/* ============================= */}

            <div className="jee-main-college-image">

              <img
                src={college.image}
                alt={college.name}
                onError={(e) => {

                  console.error(
                    'Image not found:',
                    college.image
                  )

                  e.currentTarget.style.display = 'none'

                }}
              />


              <div className="jee-main-image-placeholder">
                🏫
              </div>

            </div>


            {/* ============================= */}
            {/* COLLEGE INFO */}
            {/* ============================= */}

            <div className="jee-main-college-info">


              <span className="jee-main-college-rank">

                #{college.id}

              </span>


              <h2>
                {college.name}
              </h2>


              <p>
                📍 {college.location}
              </p>

            </div>


            {/* ============================= */}
            {/* ARROW */}
            {/* ============================= */}

            <div className="jee-main-card-arrow">

              →

            </div>


          </article>

        ))}


        {/* ============================= */}
        {/* NO RESULT */}
        {/* ============================= */}

        {filteredColleges.length === 0 && (

          <div className="jee-main-no-result">

            <div>
              🔍
            </div>


            <h2>
              No college found
            </h2>


            <p>
              Try searching with another college
              name or location.
            </p>


            <button
              onClick={() =>
                setSearchTerm('')
              }
            >
              Show All Colleges
            </button>

          </div>

        )}

      </section>


    </main>

  )
}


export default JEEMainColleges