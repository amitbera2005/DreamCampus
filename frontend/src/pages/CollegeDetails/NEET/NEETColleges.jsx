import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import './NEETColleges.css'


function NEETColleges() {

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')


  /*
   * =============================
   * TOP 20 NEET MEDICAL COLLEGES
   * =============================
   *
   * Overall College Rank
   * This is NOT NEET cutoff rank.
   *
   * Colleges are selected for
   * undergraduate medical education.
   */

const colleges = [

  {
    id: 1,
    name: 'All India Institute of Medical Sciences, New Delhi',
    location: 'New Delhi, Delhi',
    image: '/NEET/aiims-new-delhi.jpg',
  },

  {
    id: 2,
    name: 'Post Graduate Institute of Medical Education and Research',
    location: 'Chandigarh, Chandigarh',
    image: '/NEET/pgimer-chandigarh.jpg',
  },

  {
    id: 3,
    name: 'Christian Medical College, Vellore',
    location: 'Vellore, Tamil Nadu',
    image: '/NEET/cmc-vellore.jpg',
  },

  {
    id: 4,
    name: 'Jawaharlal Institute of Postgraduate Medical Education and Research',
    location: 'Puducherry, Puducherry',
    image: '/NEET/jipmer-puducherry.jpg',
  },

  {
    id: 5,
    name: 'Sanjay Gandhi Postgraduate Institute of Medical Sciences',
    location: 'Lucknow, Uttar Pradesh',
    image: '/NEET/sgpgi-lucknow.jpg',
  },

  {
    id: 6,
    name: 'Institute of Medical Sciences, Banaras Hindu University',
    location: 'Varanasi, Uttar Pradesh',
    image: '/NEET/ims-bhu.jpg',
  },

  {
    id: 7,
    name: 'National Institute of Mental Health and Neuro Sciences',
    location: 'Bengaluru, Karnataka',
    image: '/NEET/nimhans-bengaluru.jpg',
  },

  {
    id: 8,
    name: 'King George Medical University',
    location: 'Lucknow, Uttar Pradesh',
    image: '/NEET/kgmu-lucknow.jpg',
  },

  {
    id: 9,
    name: 'Amrita Vishwa Vidyapeetham',
    location: 'Coimbatore, Tamil Nadu',
    image: '/NEET/amrita-vishwa-vidyapeetham.jpg',
  },

  {
    id: 10,
    name: 'Kasturba Medical College, Manipal',
    location: 'Manipal, Karnataka',
    image: '/NEET/kmc-manipal.jpg',
  },

  {
    id: 11,
    name: 'Saveetha Institute of Medical and Technical Sciences',
    location: 'Chennai, Tamil Nadu',
    image: '/NEET/saveetha.jpg',
  },

  {
    id: 12,
    name: 'Madras Medical College & Government General Hospital',
    location: 'Chennai, Tamil Nadu',
    image: '/NEET/madras-medical-college.jpg',
  },

  {
    id: 13,
    name: 'All India Institute of Medical Sciences, Rishikesh',
    location: 'Rishikesh, Uttarakhand',
    image: '/NEET/aiims-rishikesh.jpg',
  },

  {
    id: 14,
    name: 'All India Institute of Medical Sciences, Bhubaneswar',
    location: 'Bhubaneswar, Odisha',
    image: '/NEET/aiims-bhubaneswar.jpg',
  },

  {
    id: 15,
    name: 'Siksha O Anusandhan',
    location: 'Bhubaneswar, Odisha',
    image: '/NEET/siksha-o-anusandhan.jpg',
  },

  {
    id: 16,
    name: 'Sree Chitra Tirunal Institute for Medical Sciences and Technology',
    location: 'Thiruvananthapuram, Kerala',
    image: '/NEET/sctimst.jpg',
  },

  {
    id: 17,
    name: 'SRM Institute of Science and Technology',
    location: 'Chennai, Tamil Nadu',
    image: '/NEET/srm.jpg',
  },

  {
    id: 18,
    name: 'All India Institute of Medical Sciences, Jodhpur',
    location: 'Jodhpur, Rajasthan',
    image: '/NEET/aiims-jodhpur.jpg',
  },

  {
    id: 19,
    name: 'Datta Meghe Institute of Higher Education and Research',
    location: 'Wardha, Maharashtra',
    image: '/NEET/dmiher.jpg',
  },

  {
    id: 20,
    name: 'Sri Ramachandra Institute of Higher Education and Research',
    location: 'Chennai, Tamil Nadu',
    image: '/NEET/sri-ramachandra.jpg',
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
      `/college-details/neet/${college.id}`
    )

  }


  return (

    <main className="neet-college-page">


      {/* ============================= */}
      {/* HEADER */}
      {/* ============================= */}

      <section className="neet-college-header">


        <button
          className="neet-back-button"
          onClick={handleBack}
        >
          ← Back
        </button>


        <div className="neet-heading">

          <span>
            COLLEGE DETAILS
          </span>


          <h1>
            NEET Colleges
          </h1>


          <p>
            Explore top medical colleges through NEET.
          </p>

        </div>

      </section>


      {/* ============================= */}
      {/* SEARCH */}
      {/* ============================= */}

      <section className="neet-search-section">


        <div className="neet-search-box">

          <span className="neet-search-icon">
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
              className="neet-search-clear"
              onClick={() => setSearchTerm('')}
            >
              ×
            </button>

          )}

        </div>


        <p className="neet-result-count">

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

      <section className="neet-college-grid">


        {filteredColleges.map((college) => (

          <article
            key={college.id}
            className="neet-college-card"
            onClick={() =>
              handleCollegeClick(college)
            }
          >


            {/* ============================= */}
            {/* IMAGE */}
            {/* ============================= */}

            <div className="neet-college-image">

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


              <div className="neet-image-placeholder">
                🏥
              </div>

            </div>


            {/* ============================= */}
            {/* COLLEGE INFO */}
            {/* ============================= */}

            <div className="neet-college-info">


              <span className="neet-college-rank">

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

            <div className="neet-card-arrow">

              →

            </div>


          </article>

        ))}


        {/* ============================= */}
        {/* NO RESULT */}
        {/* ============================= */}

        {filteredColleges.length === 0 && (

          <div className="neet-no-result">

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


export default NEETColleges