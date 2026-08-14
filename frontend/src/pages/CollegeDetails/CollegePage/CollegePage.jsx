import { useNavigate, useParams } from 'react-router-dom'

import wbjeeColleges
  from '../../../data/colleges/wbjeeColleges'

import './CollegePage.css'


function CollegePage() {

  const navigate = useNavigate()

  const { collegeId } = useParams()


  const college = wbjeeColleges.find(
    (item) =>
      item.id === Number(collegeId)
  )


  /*
   * =============================
   * COLLEGE IMAGES
   * =============================
   */

  const collegeImages = {

    1: '/colleges/jadavpur-university.jpg',

    2: '/colleges/calcutta-university.jpg',

    3: '/colleges/makaut.jpg',

    4: '/colleges/hit.jpg',

    5: '/colleges/heritage.jpg',

    6: '/colleges/techno-india.jpg',

    7: '/colleges/iem.jpg',

    8: '/colleges/kgec.jpg',

    9: '/colleges/jgec.jpg',

    10: '/colleges/gcett.jpg',

    11: '/colleges/gcett-serampore.jpg',

    12: '/colleges/rcciit.jpg',

    13: '/colleges/nsec.jpg',

    14: '/colleges/msit.jpg',

    15: '/colleges/techno-main.jpg',

    16: '/colleges/aot.jpg',

    17: '/colleges/narula.jpg',

    18: '/colleges/halder.jpg',

    19: '/colleges/bit.jpg',

    20: '/colleges/fiem.jpg',

  }


  /*
   * =============================
   * COLLEGE NOT FOUND
   * =============================
   */

  if (!college) {

    return (

      <main className="college-page-error">

        <div>

          <h1>
            College Not Found
          </h1>


          <button
            onClick={() =>
              navigate('/college-details/wbjee')
            }
          >
            ← Back to WBJEE Colleges
          </button>

        </div>

      </main>

    )

  }


  const collegeImage =
    collegeImages[college.id]


  return (

    <main className="college-details-full-page">


      {/* ============================= */}
      {/* BACK */}
      {/* ============================= */}

      <button
        className="college-details-back"
        onClick={() =>
          navigate('/college-details/wbjee')
        }
      >
        ← Back to Colleges
      </button>


      {/* ============================= */}
      {/* HERO IMAGE */}
      {/* ============================= */}

      <section className="college-details-hero">

        <div className="college-details-image">

          <img
            src={collegeImage}
            alt={college.name}
          />

        </div>

      </section>


      {/* ============================= */}
      {/* BASIC INFORMATION */}
      {/* ============================= */}

      <section className="college-basic-info">

        <span>
          WBJEE COLLEGE
        </span>


        <h1>
          {college.name}
        </h1>


        <div className="college-basic-grid">


          <div>

            <small>
              COLLEGE RANK
            </small>

            <strong>
              #{college.rank}
            </strong>

          </div>


          <div>

            <small>
              FOUNDATION
            </small>

            <strong>
              {college.foundation}
            </strong>

          </div>


          <div>

            <small>
              LOCATION
            </small>

            <strong>
              {college.location}
            </strong>

          </div>


          <div>

            <small>
              CATEGORY
            </small>

            <strong>
              {college.category}
            </strong>

          </div>


        </div>


        {/* HISTORICAL ORIGIN */}

        <div className="college-history-info">

          <small>
            HISTORICAL ORIGIN
          </small>

          <p>
            National Council of Education,
            Bengal — {college.historicalOrigin}
          </p>

        </div>


      </section>


      {/* ============================= */}
      {/* ALL BRANCHES */}
      {/* ============================= */}

      <section className="college-info-section">

        <div className="college-section-heading">

          <span>
            ACADEMICS
          </span>

          <h2>
            All Available Branches
          </h2>

        </div>


        <div className="college-branch-grid">

          {college.branches.map(
            (branch, index) => (

              <div
                key={index}
                className="college-branch-card"
              >
                {branch}
              </div>

            )
          )}

        </div>

      </section>


      {/* ============================= */}
      {/* CUTOFF */}
      {/* ============================= */}

      <section className="college-info-section">

        <div className="college-section-heading">

          <span>
            WBJEE 2025 • ROUND 1 • GENERAL • HS
          </span>

          <h2>
            Branch-wise Cutoff
          </h2>

        </div>


        <div className="college-table-wrapper">

          <table>

            <thead>

              <tr>

                <th>
                  Branch
                </th>

                <th>
                  Opening Rank
                </th>

                <th>
                  Closing Rank
                </th>

              </tr>

            </thead>


            <tbody>

              {college.cutoffs.map(
                (item, index) => (

                  <tr key={index}>

                    <td>
                      {item.branch}
                    </td>

                    <td>
                      {item.opening}
                    </td>

                    <td>
                      {item.closing}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </section>


      {/* ============================= */}
      {/* STUDY COST */}
      {/* ============================= */}

      <section className="college-info-section">

        <div className="college-section-heading">

          <span>
            2025-26 ADMISSION FEES
          </span>

          <h2>
            Study Cost by Branch
          </h2>

        </div>


        <div className="college-table-wrapper">

          <table>

            <thead>

              <tr>

                <th>
                  Branch
                </th>

                <th>
                  Admission Fee
                </th>

              </tr>

            </thead>


            <tbody>

              {college.fees.map(
                (item, index) => (

                  <tr key={index}>

                    <td>
                      {item.branch}
                    </td>

                    <td>
                      {item.cost}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>


        <div className="college-fee-note">

          <p>
            * ₹5,210 applies to UG Engineering /
            Technology / Pharmacy courses except
            Information Technology.
          </p>

          <p>
            ** ₹30,360 is the stated 2025-26
            admission fee for Information Technology.
          </p>

          <p>
            These are admission charges and are not
            the complete lifetime course cost.
          </p>

        </div>

      </section>


      {/* ============================= */}
      {/* HOSTEL */}
      {/* ============================= */}

      <section className="college-info-section">

        <div className="college-section-heading">

          <span>
            CAMPUS LIFE
          </span>

          <h2>
            Hostel Cost
          </h2>

        </div>


        <div className="college-hostel-grid">


          <div>

            <small>
              HOSTEL ADMISSION
            </small>

            <strong>
              {college.hostel.admission}
            </strong>

          </div>


          <div>

            <small>
              MONTHLY SEAT RENT
            </small>

            <strong>
              {college.hostel.monthlySeatRent}
            </strong>

          </div>


          <div>

            <small>
              ELECTRICITY
            </small>

            <strong>
              {college.hostel.electricity}
            </strong>

          </div>


          <div>

            <small>
              ACCOMMODATION
            </small>

            <strong>
              {college.hostel.accommodation}
            </strong>

          </div>


        </div>


        <div className="college-single-info">

          <strong>
            Mess:
          </strong>

          {' '}

          {college.hostel.mess}

        </div>

      </section>


      {/* ============================= */}
      {/* PLACEMENT */}
      {/* ============================= */}

      <section className="college-info-section">

        <div className="college-section-heading">

          <span>
            CAREER
          </span>

          <h2>
            Placement
          </h2>

        </div>


        <div className="college-placement-grid">


          <div>

            <small>
              ENGINEERING MEDIAN SALARY
            </small>

            <strong>
              {college.placement.engineeringMedian}
            </strong>

          </div>


          <div>

            <small>
              STUDENTS PLACED
            </small>

            <strong>
              {college.placement.studentsPlaced}
            </strong>

          </div>


          <div>

            <small>
              CSE PLACEMENT
            </small>

            <strong>
              {college.placement.csePlacement}
            </strong>

          </div>


          <div>

            <small>
              CSE AVERAGE PACKAGE
            </small>

            <strong>
              {college.placement.cseAverage}
            </strong>

          </div>


          <div>

            <small>
              CSE HIGHEST PACKAGE
            </small>

            <strong>
              {college.placement.cseHighest}
            </strong>

          </div>


        </div>

      </section>


      {/* ============================= */}
      {/* DATA NOTE */}
      {/* ============================= */}

      <section className="college-data-note">

        <p>
          Cutoff: WBJEE 2025 Round 1,
          General category, West Bengal Domicile.
        </p>

        <p>
          College data can be updated from
          wbjeeColleges.js without changing this page.
        </p>

      </section>


    </main>

  )

}


export default CollegePage