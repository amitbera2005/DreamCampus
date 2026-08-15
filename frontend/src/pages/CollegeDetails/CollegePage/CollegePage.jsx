import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import wbjeeColleges from '../../../data/colleges/wbjeeColleges'

import './CollegePage.css'


function CollegePage() {
  const { collegeId } = useParams()
  const navigate = useNavigate()

  const college = useMemo(() => {
    return wbjeeColleges.find(
      (item) => String(item.id) === String(collegeId)
    )
  }, [collegeId])


  const [selectedCategory, setSelectedCategory] =
    useState('open')


  const categories = [
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


  if (!college) {
    return (
      <main className="ju-page ju-not-found">
        <div className="ju-not-found-card">
          <div className="ju-not-found-icon">
            !
          </div>

          <h1>College Not Found</h1>

          <p>
            The requested college could not be found.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate('/college-details/wbjee')
            }
          >
            Back to Colleges
          </button>
        </div>
      </main>
    )
  }


  const cutoffData =
    college.cutoffs?.[selectedCategory] || []


  return (
    <main className="ju-page">

      {/* =====================================================
          BACK BUTTON
         ===================================================== */}

      <button
        type="button"
        className="ju-back-button"
        onClick={() =>
          navigate('/college-details/wbjee')
        }
      >
        <span>←</span>

        Back to WBJEE Colleges
      </button>


      {/* =====================================================
          HERO
         ===================================================== */}

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
            <span>#</span>
            {college.rank}
            <span>WBJEE RANK</span>
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


      {/* =====================================================
          OVERVIEW
         ===================================================== */}

      <section className="ju-section">

        <div className="ju-section-heading">

          <span>OVERVIEW</span>

          <h2>
            About the College
          </h2>

        </div>


        <div className="ju-overview-grid">

          <div className="ju-stat-card">
            <small>COLLEGE RANK</small>

            <strong>
              #{college.rank}
            </strong>
          </div>


          <div className="ju-stat-card">
            <small>FOUNDED</small>

            <strong>
              {college.foundation}
            </strong>
          </div>


          <div className="ju-stat-card">
            <small>HISTORICAL ORIGIN</small>

            <strong>
              {college.historicalOrigin}
            </strong>
          </div>


          <div className="ju-stat-card">
            <small>TYPE</small>

            <strong>
              {college.category}
            </strong>
          </div>

        </div>


        <div className="ju-location-card">

          <span>LOCATION</span>

          <p>
            {college.location}
          </p>

        </div>

      </section>


      {/* =====================================================
          BRANCHES
         ===================================================== */}

      <section className="ju-section">

        <div className="ju-section-heading">

          <span>ACADEMICS</span>

          <h2>
            Available Branches
          </h2>

          <p>
            Engineering programs available at
            {` ${college.name}`}.
          </p>

        </div>


        <div className="ju-branch-grid">

          {college.branches.map(
            (branch, index) => (
              <div
                className="ju-branch-card"
                key={branch}
              >

                <span className="ju-branch-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="ju-branch-name">
                  {branch}
                </span>

              </div>
            )
          )}

        </div>

      </section>


      {/* =====================================================
          CUTOFF
         ===================================================== */}

      <section className="ju-section">

        <div className="ju-section-heading">

          <span>ADMISSION</span>

          <h2>
            WBJEE Branch-wise Cutoff
          </h2>

          <p>
            WBJEE 2025 · Round 1 ·
            West Bengal Domicile
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
                  setSelectedCategory(category.key)
                }
              >
                {category.label}
              </button>
            )
          )}

        </div>


        <div className="ju-cutoff-meta">

          <span>
            WBJEE 2025
          </span>

          <span>
            ROUND 1
          </span>

          <span>
            {categories.find(
              (item) =>
                item.key === selectedCategory
            )?.label}
          </span>

          <span>
            HOME STATE
          </span>

        </div>


        {cutoffData.length > 0 ? (

          <div className="ju-table-container">

            <table className="ju-table">

              <thead>

                <tr>
                  <th>Branch</th>
                  <th>Opening Rank</th>
                  <th>Closing Rank</th>
                </tr>

              </thead>


              <tbody>

                {cutoffData.map(
                  (item) => (
                    <tr key={item.branch}>

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

        ) : (

          <div className="ju-empty">
            Cutoff data is not available
            for this category yet.
          </div>

        )}

      </section>


      {/* =====================================================
          FEES
         ===================================================== */}

      <section className="ju-section">

        <div className="ju-section-heading">

          <span>FEES</span>

          <h2>
            Study Cost by Branch
          </h2>

        </div>


        <div className="ju-table-container">

          <table className="ju-table">

            <thead>

              <tr>
                <th>Branch</th>
                <th>Admission Fee</th>
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
            * ₹5,210 applies to UG
            Engineering / Technology /
            Pharmacy courses except
            Information Technology.
          </p>

          <p>
            ** ₹30,360 is the stated
            2025-26 admission fee for
            Information Technology.
          </p>

        </div>

      </section>


      {/* =====================================================
          HOSTEL
         ===================================================== */}

      <section className="ju-section">

        <div className="ju-section-heading">

          <span>CAMPUS LIFE</span>

          <h2>
            Hostel Information
          </h2>

        </div>


        <div className="ju-detail-grid">

          <div className="ju-detail-card">

            <small>HOSTEL ADMISSION</small>

            <strong>
              {college.hostel.admission}
            </strong>

          </div>


          <div className="ju-detail-card">

            <small>MONTHLY SEAT RENT</small>

            <strong>
              {college.hostel.monthlySeatRent}
            </strong>

          </div>


          <div className="ju-detail-card">

            <small>ELECTRICITY</small>

            <strong>
              {college.hostel.electricity}
            </strong>

          </div>


          <div className="ju-detail-card">

            <small>ACCOMMODATION</small>

            <strong>
              {college.hostel.accommodation}
            </strong>

          </div>

        </div>


        <div className="ju-mess-card">

          <span>MESS</span>

          <p>
            {college.hostel.mess}
          </p>

        </div>

      </section>


      {/* =====================================================
          PLACEMENT
         ===================================================== */}

      <section className="ju-section">

        <div className="ju-section-heading">

          <span>CAREER</span>

          <h2>
            Placement Overview
          </h2>

        </div>


        <div className="ju-placement-grid">

          <div className="ju-placement-card">

            <small>
              ENGINEERING MEDIAN
            </small>

            <strong>
              {college.placement.engineeringMedian}
            </strong>

          </div>


          <div className="ju-placement-card">

            <small>
              STUDENTS PLACED
            </small>

            <strong>
              {college.placement.studentsPlaced}
            </strong>

          </div>


          <div className="ju-placement-card">

            <small>
              CSE PLACEMENT
            </small>

            <strong>
              {college.placement.csePlacement}
            </strong>

          </div>


          <div className="ju-placement-card">

            <small>
              CSE AVERAGE
            </small>

            <strong>
              {college.placement.cseAverage}
            </strong>

          </div>


          <div className="ju-placement-card">

            <small>
              CSE HIGHEST
            </small>

            <strong>
              {college.placement.cseHighest}
            </strong>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOT NOTE
         ===================================================== */}

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