import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import wbjeeColleges from '../../../data/colleges/wbjeeColleges'
import jeeMainColleges from '../../../data/colleges/jeeMainColleges'
import neetColleges from '../../../data/colleges/neetColleges'

import './CollegePage.css'


function CollegePage() {

  const { collegeId, exam } = useParams()

  const navigate = useNavigate()


  /*
   * =============================
   * EXAM TYPE
   * =============================
   */

  const isJEE = exam === 'jee-main'
  const isNEET = exam === 'neet'


  /*
   * =============================
   * COLLEGE DATA
   * =============================
   */

  const collegeList = isNEET
    ? neetColleges
    : isJEE
      ? jeeMainColleges
      : wbjeeColleges


  const college = useMemo(() => {

    return collegeList.find(
      (item) =>
        String(item.id) === String(collegeId)
    )

  }, [collegeId, collegeList])


  /*
   * =============================
   * CATEGORY
   * =============================
   */

  const categories = isNEET
    ? [
        {
          key: 'open',
          label: 'General',
        },
        {
          key: 'obcA',
          label: 'OBC',
        },
        {
          key: 'sc',
          label: 'SC',
        },
        {
          key: 'st',
          label: 'ST',
        },
        {
          key: 'ews',
          label: 'EWS',
        },
      ]

    : isJEE
      ? [
          {
            key: 'open',
            label: 'OPEN',
          },
          {
            key: 'obcA',
            label: 'OBC-A-NCL',
          },
          {
            key: 'obcB',
            label: 'OBC-B-NCL',
          },
          {
            key: 'sc',
            label: 'SC',
          },
          {
            key: 'st',
            label: 'ST',
          },
          {
            key: 'ews',
            label: 'EWS',
          },
        ]

      : [
          {
            key: 'open',
            label: 'General',
          },
          {
            key: 'obcA',
            label: 'OBC-A',
          },
          {
            key: 'obcB',
            label: 'OBC-B',
          },
          {
            key: 'sc',
            label: 'SC',
          },
          {
            key: 'st',
            label: 'ST',
          },
          {
            key: 'ews',
            label: 'EWS',
          },
        ]


  const [selectedCategory, setSelectedCategory] =
    useState('open')


  /*
   * =============================
   * BACK ROUTE
   * =============================
   */

  const collegesRoute = isNEET
    ? '/college-details/neet'
    : isJEE
      ? '/college-details/jee-main'
      : '/college-details/wbjee'


  /*
   * =============================
   * NOT FOUND
   * =============================
   */

  if (!college) {

    return (

      <main className="ju-page ju-not-found">

        <div className="ju-not-found-card">

          <div className="ju-not-found-icon">
            !
          </div>


          <h1>
            College Not Found
          </h1>


          <p>
            The requested college could not be found.
          </p>


          <button
            type="button"
            onClick={() =>
              navigate(collegesRoute)
            }
          >
            Back to Colleges
          </button>

        </div>

      </main>

    )
  }


  /*
   * =============================
   * CUTOFF DATA
   * =============================
   */

  const cutoffData =
    college.cutoffs?.[selectedCategory] || []


  return (

    <main className="ju-page">


      {/* ============================= */}
      {/* BACK BUTTON */}
      {/* ============================= */}

      <button
        type="button"
        className="ju-back-button"
        onClick={() =>
          navigate(collegesRoute)
        }
      >

        <span>
          ←
        </span>

        {isNEET
          ? 'Back to NEET Colleges'
          : isJEE
            ? 'Back to JEE Main Colleges'
            : 'Back to WBJEE Colleges'}

      </button>


      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}

      <section className="ju-hero">


        <div className="ju-hero-image-wrap">

          <img
            src={college.image}
            alt={college.name}
            className="ju-hero-image"
          />

        </div>


        <div className="ju-hero-content">


          <div className="ju-rank-badge">

            <span>
              #
            </span>

            {college.rank}

            <span>

              {isNEET
                ? 'NEET COLLEGE RANK'
                : isJEE
                  ? 'JEE MAIN RANK'
                  : 'WBJEE RANK'}

            </span>

          </div>


          <h1>
            {college.name}
          </h1>


          <p className="ju-category">
            {college.category}
          </p>


          <p className="ju-location">
            📍 {college.location}
          </p>


          <div className="ju-hero-tags">

            <span>
              Established {college.foundation}
            </span>


            <span>
              Origin {college.historicalOrigin}
            </span>

          </div>


        </div>

      </section>


      {/* ============================= */}
      {/* OVERVIEW */}
      {/* ============================= */}

      <section className="ju-section">


        <div className="ju-section-heading">

          <span>
            OVERVIEW
          </span>

          <h2>
            About the College
          </h2>

        </div>


        <div className="ju-overview-grid">


          <div className="ju-stat-card">

            <small>
              COLLEGE RANK
            </small>

            <strong>
              #{college.rank}
            </strong>

          </div>


          <div className="ju-stat-card">

            <small>
              FOUNDED
            </small>

            <strong>
              {college.foundation}
            </strong>

          </div>


          <div className="ju-stat-card">

            <small>
              HISTORICAL ORIGIN
            </small>

            <strong>
              {college.historicalOrigin}
            </strong>

          </div>


          <div className="ju-stat-card">

            <small>
              TYPE
            </small>

            <strong>
              {college.category}
            </strong>

          </div>


        </div>


        <div className="ju-location-card">

          <span>
            LOCATION
          </span>

          <p>
            {college.location}
          </p>

        </div>

      </section>


      {/* ============================= */}
      {/* BRANCHES */}
      {/* ============================= */}

      <section className="ju-section">


        <div className="ju-section-heading">

          <span>
            ACADEMICS
          </span>

          <h2>
            Available Courses
          </h2>

          <p>
            {isNEET
              ? `Medical programmes available at ${college.name}.`
              : `Programmes available at ${college.name}.`
            }
          </p>

        </div>


        <div className="ju-branch-grid">

          {college.branches.map(
            (branch) => (

              <div
                className="ju-branch-card"
                key={branch}
              >

                <span>
                  {isNEET ? 'MEDICAL' : 'BRANCH'}
                </span>

                <h3>
                  {branch}
                </h3>

              </div>

            )
          )}

        </div>

      </section>


      {/* ============================= */}
      {/* CUTOFF */}
      {/* ============================= */}

      <section className="ju-section">


        <div className="ju-section-heading">

          <span>
            CUTOFF
          </span>

          <h2>
            {isNEET
              ? 'NEET Cutoff'
              : isJEE
                ? 'JEE Main Cutoff'
                : 'WBJEE Cutoff'
            }
          </h2>

          <p>
            Category-wise admission cutoff range.
          </p>

        </div>


        <div className="ju-category-tabs">

          {categories.map(
            (category) => (

              <button
                key={category.key}
                type="button"
                className={
                  selectedCategory === category.key
                    ? 'active'
                    : ''
                }
                onClick={() =>
                  setSelectedCategory(
                    category.key
                  )
                }
              >

                {category.label}

              </button>

            )
          )}

        </div>


        <div className="ju-table-container">

          <table className="ju-table">

            <thead>

              <tr>

                <th>
                  Course
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

              {cutoffData.map(
                (item, index) => (

                  <tr
                    key={`${item.branch}-${index}`}
                  >

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
      {/* FEES */}
      {/* ============================= */}

      <section className="ju-section">


        <div className="ju-section-heading">

          <span>
            FEES
          </span>

          <h2>
            {isNEET
              ? 'Study Cost by Course'
              : 'Study Cost by Branch'
            }
          </h2>

        </div>


        <div className="ju-table-container">

          <table className="ju-table">

            <thead>

              <tr>

                <th>
                  Course
                </th>

                <th>
                  Admission Fee
                </th>

              </tr>

            </thead>


            <tbody>

              {college.fees.map(
                (item) => (

                  <tr key={item.branch}>

                    <td>
                      {item.branch}
                    </td>

                    <td className="ju-fee">
                      {item.cost}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>


        <div className="ju-note">

          <p>
            * Fees may vary according to
            institute rules and academic year.
          </p>

          <p>
            Verify the latest official fee
            structure before admission.
          </p>

        </div>

      </section>


      {/* ============================= */}
      {/* HOSTEL */}
      {/* ============================= */}

      <section className="ju-section">


        <div className="ju-section-heading">

          <span>
            CAMPUS LIFE
          </span>

          <h2>
            Hostel Information
          </h2>

        </div>


        <div className="ju-detail-grid">


          <div className="ju-detail-card">

            <small>
              HOSTEL ADMISSION
            </small>

            <strong>
              {college.hostel.admission}
            </strong>

          </div>


          <div className="ju-detail-card">

            <small>
              MONTHLY SEAT RENT
            </small>

            <strong>
              {college.hostel.monthlySeatRent}
            </strong>

          </div>


          <div className="ju-detail-card">

            <small>
              ELECTRICITY
            </small>

            <strong>
              {college.hostel.electricity}
            </strong>

          </div>


          <div className="ju-detail-card">

            <small>
              ACCOMMODATION
            </small>

            <strong>
              {college.hostel.accommodation}
            </strong>

          </div>


        </div>


        <div className="ju-mess-card">

          <span>
            MESS
          </span>

          <p>
            {college.hostel.mess}
          </p>

        </div>

      </section>


      {/* ============================= */}
      {/* CAREER */}
      {/* ============================= */}

      <section className="ju-section">


        <div className="ju-section-heading">

          <span>
            CAREER
          </span>

          <h2>
            {isNEET
              ? 'Medical Career Overview'
              : 'Career & Placement Overview'
            }
          </h2>

        </div>


        <div className="ju-placement-grid">


          <div className="ju-placement-card">

            <small>
              {isNEET
                ? 'MEDICAL CAREER'
                : 'MEDIAN PACKAGE'
              }
            </small>

            <strong>
              {college.placement?.engineeringMedian || '—'}
            </strong>

          </div>


          <div className="ju-placement-card">

            <small>
              {isNEET
                ? 'STUDENTS'
                : 'STUDENTS PLACED'
              }
            </small>

            <strong>
              {college.placement?.studentsPlaced || '—'}
            </strong>

          </div>


          <div className="ju-placement-card">

            <small>
              {isNEET
                ? 'CLINICAL OPPORTUNITIES'
                : 'PLACEMENT'
              }
            </small>

            <strong>
              {college.placement?.csePlacement || '—'}
            </strong>

          </div>


          <div className="ju-placement-card">

            <small>
              {isNEET
                ? 'AVERAGE CAREER EARNING'
                : 'AVERAGE PACKAGE'
              }
            </small>

            <strong>
              {college.placement?.cseAverage || '—'}
            </strong>

          </div>


          <div className="ju-placement-card">

            <small>
              {isNEET
                ? 'HIGHER CAREER POTENTIAL'
                : 'HIGHEST PACKAGE'
              }
            </small>

            <strong>
              {college.placement?.cseHighest || '—'}
            </strong>

          </div>


        </div>

      </section>


      {/* ============================= */}
      {/* FOOT NOTE */}
      {/* ============================= */}

      <div className="ju-footer-note">

        <p>
          College information and cutoff
          data are displayed from the
          DreamCampus college database.
        </p>

        <p>
          Verify the latest official
          counselling information before
          admission decisions.
        </p>

      </div>


    </main>

  )

}


export default CollegePage