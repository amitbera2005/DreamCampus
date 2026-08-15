import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './WBJEEColleges.css'


function WBJEEColleges() {

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')


  /*
   * =============================
   * TOP 20 WBJEE COLLEGES
   * =============================
   *
   * Overall College Rank
   * This is NOT cutoff rank.
   */

  const colleges = [

    {
      id: 1,
      name: 'Jadavpur University',
      location: 'Kolkata, West Bengal',
      image: '/colleges/jadavpur-university.jpg',
    },

    {
      id: 2,
      name: 'University of Calcutta',
      location: 'Kolkata, West Bengal',
      image: '/colleges/calcutta-university.jpg',
    },

    {
      id: 3,
      name: 'Kalyani Government Engineering College',
      location: 'Kalyani, Nadia, West Bengal',
      image: '/colleges/kgec.jpg',
    },

    {
      id: 4,
      name: 'Jalpaiguri Government Engineering College',
      location: 'Jalpaiguri, West Bengal',
      image: '/colleges/jgec.jpg',
    },

    {
      id: 5,
      name: 'Government College of Engineering & Ceramic Technology',
      location: 'Kolkata, West Bengal',
      image: '/colleges/gcect.jpg',
    },

    {
      id: 6,
      name: 'Government College of Engineering and Leather Technology',
      location: 'Kolkata, West Bengal',
      image: '/colleges/gcelt.jpg',
    },

    {
      id: 7,
      name: 'Ramkrishna Mahato Government Engineering College',
      location: 'Purulia, West Bengal',
      image: '/colleges/rkmgec.jpg',
    },

    {
      id: 8,
      name: 'Cooch Behar Government Engineering College',
      location: 'Cooch Behar, West Bengal',
      image: '/colleges/cbgec.jpg',
    },

    {
      id: 9,
      name: 'Government College of Engineering and Textile Technology, Serampore',
      location: 'Serampore, Hooghly, West Bengal',
      image: '/colleges/gcetts.jpg',
    },

    {
      id: 10,
      name: 'Government College of Engineering and Textile Technology, Berhampore',
      location: 'Berhampore, Murshidabad, West Bengal',
      image: '/colleges/gcett-berhampore.jpg',
    },

    {
      id: 11,
      name: 'Aliah University',
      location: 'New Town, Kolkata, West Bengal',
      image: '/colleges/aliah-university.jpg',
    },

    {
      id: 12,
      name: 'Alipurduar Government Engineering and Management College',
      location: 'Alipurduar, West Bengal',
      image: '/colleges/agemc.jpg',
    },

    {
      id: 13,
      name: 'Maulana Abul Kalam Azad University of Technology',
      location: 'Haringhata, Nadia, West Bengal',
      image: '/colleges/makaut.jpg',
    },

    {
      id: 14,
      name: 'Institute of Engineering and Management',
      location: 'Kolkata, West Bengal',
      image: '/colleges/iem.jpg',
    },

    {
      id: 15,
      name: 'Heritage Institute of Technology',
      location: 'Kolkata, West Bengal',
      image: '/colleges/heritage.jpg',
    },

    {
      id: 16,
      name: 'Haldia Institute of Technology',
      location: 'Haldia, West Bengal',
      image: '/colleges/hit.jpg',
    },

    {
      id: 17,
      name: 'Techno Main Salt Lake',
      location: 'Kolkata, West Bengal',
      image: '/colleges/techno-main.jpg',
    },

    {
      id: 18,
      name: 'Netaji Subhash Engineering College',
      location: 'Kolkata, West Bengal',
      image: '/colleges/nsec.jpg',
    },

    {
      id: 19,
      name: 'RCC Institute of Information Technology',
      location: 'Kolkata, West Bengal',
      image: '/colleges/rcciit.jpg',
    },

    {
      id: 20,
      name: 'Meghnad Saha Institute of Technology',
      location: 'Kolkata, West Bengal',
      image: '/colleges/msit.jpg',
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
      `/college-details/wbjee/${college.id}`
    )

  }


  return (

    <main className="wbjee-college-page">


      {/* ============================= */}
      {/* HEADER */}
      {/* ============================= */}

      <section className="wbjee-college-header">


        <button
          className="wbjee-back-button"
          onClick={handleBack}
        >
          ← Back
        </button>


        <div className="wbjee-heading">


          <span>
            COLLEGE DETAILS
          </span>


          <h1>
            WBJEE Colleges
          </h1>


          <p>
            Explore top engineering colleges through WBJEE.
          </p>


        </div>


      </section>


      {/* ============================= */}
      {/* SEARCH */}
      {/* ============================= */}

      <section className="wbjee-search-section">


        <div className="wbjee-search-box">


          <span className="wbjee-search-icon">
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
              className="wbjee-search-clear"
              onClick={() => setSearchTerm('')}
            >
              ×
            </button>

          )}


        </div>


        <p className="wbjee-result-count">

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

      <section className="wbjee-college-grid">


        {filteredColleges.map((college) => (


          <article
            key={college.id}
            className="wbjee-college-card"
            onClick={() =>
              handleCollegeClick(college)
            }
          >


            {/* ============================= */}
            {/* IMAGE */}
            {/* ============================= */}

            <div className="wbjee-college-image">


              <img
                src={college.image}
                alt={college.name}
                onError={(e) => {

                  e.currentTarget.style.display =
                    'none'

                }}
              />


              <div className="wbjee-image-placeholder">
                🏫
              </div>


            </div>


            {/* ============================= */}
            {/* COLLEGE INFO */}
            {/* ============================= */}

            <div className="wbjee-college-info">


              <span className="wbjee-college-rank">

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

            <div className="wbjee-card-arrow">

              →

            </div>


          </article>


        ))}


        {/* ============================= */}
        {/* NO RESULT */}
        {/* ============================= */}

        {filteredColleges.length === 0 && (


          <div className="wbjee-no-result">


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


export default WBJEEColleges