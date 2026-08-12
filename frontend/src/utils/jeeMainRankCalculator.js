import jeeMainRankData
  from '../data/jeeMainRankData'


const YEAR_WEIGHTS = {
  2026: 1.00,
  2025: 0.85,
  2024: 0.70,
}


function findBand(
  score,
  yearData
) {

  for (const band of yearData) {

    if (
      score >= band.min &&
      score <= band.max
    ) {

      return band

    }

  }

  return null
}


function interpolate(
  score,
  band,
  valueMin,
  valueMax
) {

  const scoreRange =
    band.max - band.min


  if (scoreRange === 0) {
    return valueMax
  }


  const progress =
    Math.max(
      0,
      Math.min(
        1,
        (score - band.min) /
        scoreRange
      )
    )


  return (
    valueMax -
    progress *
    (valueMax - valueMin)
  )
}


export function predictJEEMainRank(
  score,
  selectedYear = '2026'
) {

  const numericScore =
    Number(score)


  if (
    Number.isNaN(numericScore)
  ) {

    return {
      success: false,
      message:
        'Please enter a valid JEE Main score.',
    }

  }


  if (
    numericScore < 0 ||
    numericScore > 300
  ) {

    return {
      success: false,
      message:
        'JEE Main score must be between 0 and 300.',
    }

  }


  const results = []


  Object.entries(
    jeeMainRankData
  ).forEach(
    ([year, yearData]) => {

      const band =
        findBand(
          numericScore,
          yearData
        )


      if (!band) {
        return
      }


      const percentile =
        interpolate(
          numericScore,
          band,
          band.percentileMin,
          band.percentileMax
        )


      const estimatedRank =
        Math.round(
          interpolate(
            numericScore,
            band,
            band.rankMin,
            band.rankMax
          )
        )


      let weight =
        YEAR_WEIGHTS[year] || 0.5


      if (
        String(year) ===
        String(selectedYear)
      ) {

        weight *= 1.20

      }


      results.push({

        year,

        percentile,

        estimatedRank,

        rankMin:
          band.rankMin,

        rankMax:
          band.rankMax,

        weight,

      })

    }
  )


  if (!results.length) {

    return {
      success: false,
      message:
        'Historical JEE Main data is unavailable for this score.',
    }

  }


  let totalWeight = 0

  let weightedPercentile = 0

  let weightedRank = 0


  results.forEach(
    (item) => {

      weightedPercentile +=
        item.percentile *
        item.weight

      weightedRank +=
        item.estimatedRank *
        item.weight

      totalWeight +=
        item.weight

    }
  )


  const expectedPercentile =
    weightedPercentile /
    totalWeight


  const mostLikelyRank =
    Math.max(
      1,
      Math.round(
        weightedRank /
        totalWeight
      )
    )


  const spread =
    Math.max(
      100,
      Math.round(
        mostLikelyRank * 0.12
      )
    )


  const expectedMin =
    Math.max(
      1,
      mostLikelyRank - spread
    )


  const expectedMax =
    mostLikelyRank + spread


  let confidence =
    'Moderate'


  if (
    numericScore >= 250
  ) {

    confidence = 'High'

  }

  else if (
    numericScore >= 180
  ) {

    confidence = 'Good'

  }

  else if (
    numericScore < 100
  ) {

    confidence = 'Indicative'

  }


  return {

    success: true,

    score:
      numericScore,

    expectedPercentile:
      Number(
        expectedPercentile.toFixed(4)
      ),

    mostLikelyRank,

    expectedMin,

    expectedMax,

    confidence,

    selectedYear:
      String(selectedYear),

    yearlyPredictions:
      results,

  }

}