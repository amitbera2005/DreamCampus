import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './WBJEEColleges.css'


function WBJEEColleges() {

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')


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
      name: 'MAKAUT',
      location: 'Nadia, West Bengal',
      image: '/colleges/makaut.jpg',
    },

    {
      id: 4,
      name: 'Haldia Institute of Technology',
      location: 'Haldia, West Bengal',
      image: '/colleges/hit.jpg',
    },

    {
      id: 5,
      name: 'Heritage Institute of Technology',
      location: 'Kolkata, West Bengal',
      image: '/colleges/heritage.jpg',
    },

    {
      id: 6,
      name: 'Techno India University',
      location: 'Kolkata, West Bengal',
      image: '/colleges/techno-india.jpg',
    },

    {
      id: 7,
      name: 'Institute of Engineering and Management',
      location: 'Kolkata, West Bengal',
      image: '/colleges/iem.jpg',
    },

    {
      id: 8,
      name: 'Kalyani Government Engineering College',
      location: 'Kalyani, West Bengal',
      image: '/colleges/kgec.jpg',
    },

    {
      id: 9,
      name: 'Jalpaiguri Government Engineering College',
      location: 'Jalpaiguri, West Bengal',
      image: '/colleges/jgec.jpg',
    },

    {
      id: 10,
      name: 'Government College of Engineering and Textile Technology',
      location: 'Berhampore, West Bengal',
      image: '/colleges/gcett.jpg',
    },

    {
      id: 11,
      name: 'Government College of Engineering and Textile Technology',
      location: 'Serampore, West Bengal',
      image: '/colleges/gcett-serampore.jpg',
    },

    {
      id: 12,
      name: 'RCC Institute of Information Technology',
      location: 'Kolkata, West Bengal',
      image: '/colleges/rcciit.jpg',
    },

    {
      id: 13,
      name: 'Netaji Subhash Engineering College',
      location: 'Kolkata, West Bengal',
      image: '/colleges/nsec.jpg',
    },

    {
      id: 14,
      name: 'Meghnad Saha Institute of Technology',
      location: 'Kolkata, West Bengal',
      image: '/colleges/msit.jpg',
    },

    {
      id: 15,
      name: 'Techno Main Salt Lake',
      location: 'Kolkata, West Bengal',
      image: '/colleges/techno-main.jpg',
    },

    {
      id: 16,
      name: 'Academy of Technology',
      location: 'Hooghly, West Bengal',
      image: '/colleges/aot.jpg',
    },

    {
      id: 17,
      name: 'Narula Institute of Technology',
      location: 'Kolkata, West Bengal',
      image: '/colleges/narula.jpg',
    },

    {
      id: 18,
      name: 'Halder College of Engineering',
      location: 'Kolkata, West Bengal',
      image: '/colleges/halder.jpg',
    },

    {
      id: 19,
      name: 'Bengal Institute of Technology',
      location: 'Kolkata, West Bengal',
      image: '/colleges/bit.jpg',
    },

    {
      id: 20,
      name: 'Future Institute of Engineering and Management',
      location: 'Kolkata, West Bengal',
      image: '/colleges/fiem.jpg',
    },

  ]


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


  const handleBack = () => {

    navigate('/college-details')

  }


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


            {/* IMAGE */}

            <div className="wbjee-college-image">

              <img
                src={college.image}
                alt={college.name}
              />

            </div>


            {/* INFO */}

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


            {/* ARROW */}

            <div className="wbjee-card-arrow">
              →
            </div>


          </article>

        ))}


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