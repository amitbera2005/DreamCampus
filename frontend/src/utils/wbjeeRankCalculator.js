import wbjeeHistoricalData from '../data/wbjeeRankData'


/* ============================= */
/* YEAR WEIGHTS */
/* ============================= */

const YEAR_WEIGHTS = {
  2026: 1.00,
  2025: 0.85,
  2024: 0.70,
  2023: 0.55,
}


/* ============================= */
/* FIND CLOSEST HISTORICAL BAND */
/* ============================= */

function findBestBand(score, yearData) {

  let bestBand = null
  let smallestDistance = Infinity


  for (const band of yearData) {

    if (
      score >= band.min &&
      score <= band.max
    ) {

      return {
        band,
        distance: 0,
      }

    }


    let distance = 0


    if (score < band.min) {
      distance = band.min - score
    }

    else if (score > band.max) {
      distance = score - band.max
    }


    if (distance < smallestDistance) {

      smallestDistance = distance

      bestBand = band

    }

  }


  return {
    band: bestBand,
    distance: smallestDistance,
  }
}


/* ============================= */
/* SCORE → RANK */
/* ============================= */

function estimateRankFromBand(
  score,
  band
) {

  if (!band) {
    return null
  }


  const scoreRange =
    band.max - band.min


  const rankRange =
    band.rankMax - band.rankMin


  if (scoreRange === 0) {

    return (
      band.rankMin +
      band.rankMax
    ) / 2

  }


  /*
    Higher score = lower/better rank.
  */

  const progress =
    Math.max(
      0,
      Math.min(
        1,
        (score - band.min) /
        scoreRange
      )
    )


  const estimatedRank =
    band.rankMax -
    progress * rankRange


  return Math.max(
    1,
    estimatedRank
  )
}


/* ============================= */
/* MAIN CALCULATOR */
/* ============================= */

export function predictWBJEERank(
  score,
  selectedYear = '2026'
) {

  const numericScore =
    Number(score)


  /* ============================= */
  /* VALIDATION */
  /* ============================= */

  if (
    Number.isNaN(numericScore)
  ) {

    return {
      success: false,

      message:
        'Please enter a valid WBJEE score.',
    }

  }


  if (numericScore < 50) {

    return {
      success: false,

      message:
        'For a reliable historical estimate, please enter a score of at least 50.',
    }

  }


  if (numericScore > 200) {

    return {
      success: false,

      message:
        'WBJEE score cannot be greater than 200.',
    }

  }


  /* ============================= */
  /* YEAR DATA */
  /* ============================= */

  const yearlyResults = []


  Object.entries(
    wbjeeHistoricalData
  ).forEach(
    ([year, yearData]) => {

      const {

        band,

        distance

      } = findBestBand(
        numericScore,
        yearData
      )


      if (!band) {
        return
      }


      const estimatedRank =
        estimateRankFromBand(
          numericScore,
          band
        )


      if (!estimatedRank) {
        return
      }


      /*
        Selected/current year gets
        the highest weight.
      */

      let yearWeight =
        YEAR_WEIGHTS[year] || 0.5


      /*
        If user selected a specific
        year, slightly favour that year.
      */

      if (
        String(year) ===
        String(selectedYear)
      ) {

        yearWeight *= 1.20

      }


      /*
        Closer score band =
        higher reliability.
      */

      const distancePenalty =
        1 /
        (1 + distance * 0.08)


      const finalWeight =
        yearWeight *
        distancePenalty


      /*
        Estimate uncertainty based
        on the historical band width.
      */

      const bandRankSpread =
        band.rankMax -
        band.rankMin


      let uncertainty =
        Math.round(
          bandRankSpread * 0.10
        )


      /*
        Give wider uncertainty to
        lower-score bands.
      */

      if (numericScore < 100) {

        uncertainty =
          Math.round(
            bandRankSpread * 0.15
          )

      }


      if (uncertainty < 10) {
        uncertainty = 10
      }


      yearlyResults.push({

        year,

        estimatedRank:

          Math.round(
            estimatedRank
          ),

        rankMin:

          Math.max(
            1,
            Math.round(
              estimatedRank -
              uncertainty
            )
          ),

        rankMax:

          Math.round(
            estimatedRank +
            uncertainty
          ),

        weight:

          finalWeight,

        bandMin:
          band.min,

        bandMax:
          band.max,

      })

    }
  )


  /* ============================= */
  /* NO DATA */
  /* ============================= */

  if (
    yearlyResults.length === 0
  ) {

    return {
      success: false,

      message:
        'Historical data is not available for this score.',
    }

  }


  /* ============================= */
  /* WEIGHTED AVERAGE */
  /* ============================= */

  let totalWeight = 0

  let weightedRank = 0


  yearlyResults.forEach(
    (item) => {

      weightedRank +=
        item.estimatedRank *
        item.weight

      totalWeight +=
        item.weight

    }
  )


  const mostLikelyRank =
    Math.round(
      weightedRank /
      totalWeight
    )


  /* ============================= */
  /* WEIGHTED RANGE */
  /* ============================= */

  let weightedMin = 0

  let weightedMax = 0


  yearlyResults.forEach(
    (item) => {

      weightedMin +=
        item.rankMin *
        item.weight

      weightedMax +=
        item.rankMax *
        item.weight

    }
  )


  weightedMin =
    Math.round(
      weightedMin /
      totalWeight
    )


  weightedMax =
    Math.round(
      weightedMax /
      totalWeight
    )


  /* ============================= */
  /* EXTRA SAFETY BUFFER */
  /* ============================= */

  const historicalSpread =
    Math.max(
      1,
      weightedMax -
      weightedMin
    )


  /*
    Don't make the range
    unrealistically narrow.
  */

  let finalMin =
    Math.max(
      1,
      Math.round(
        mostLikelyRank -
        historicalSpread * 0.55
      )
    )


  let finalMax =
    Math.round(
      mostLikelyRank +
      historicalSpread * 0.55
    )


  /*
    Make sure most likely rank
    stays inside the range.
  */

  finalMin =
    Math.min(
      finalMin,
      mostLikelyRank
    )


  finalMax =
    Math.max(
      finalMax,
      mostLikelyRank
    )


  /* ============================= */
  /* CONFIDENCE */
/* ============================= */

  const rangeSize =
    finalMax -
    finalMin


  let confidence = 'Moderate'


  if (
    numericScore >= 170 &&
    rangeSize < 700
  ) {

    confidence = 'High'

  }

  else if (
    numericScore >= 140 &&
    rangeSize < 2500
  ) {

    confidence = 'Good'

  }

  else if (
    numericScore < 90
  ) {

    confidence = 'Indicative'

  }


  /* ============================= */
  /* RETURN RESULT */
  /* ============================= */

  return {

    success: true,

    score:
      numericScore,

    expectedMin:
      finalMin,

    expectedMax:
      finalMax,

    mostLikely:
      mostLikelyRank,

    confidence,

    selectedYear:

      String(selectedYear),

    yearlyPredictions:

      yearlyResults,

  }

}