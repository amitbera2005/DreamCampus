import neetRankData
  from '../data/neetRankData'


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


function calculateRank(
  score,
  band
) {

  const scoreRange =
    band.max - band.min


  const rankRange =
    band.rankMax - band.rankMin


  if (
    scoreRange === 0
  ) {

    return band.rankMin

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


  const rank =
    band.rankMax -
    progress * rankRange


  return Math.max(
    1,
    Math.round(rank)
  )

}


export function predictNEETRank(
  score,
  year = '2026'
) {

  const numericScore =
    Number(score)


  if (
    Number.isNaN(numericScore)
  ) {

    return {
      success: false,
      message:
        'Please enter a valid NEET score.',
    }

  }


  if (
    numericScore < 0 ||
    numericScore > 720
  ) {

    return {
      success: false,
      message:
        'NEET score must be between 0 and 720.',
    }

  }


  const yearData =
    neetRankData[year]


  if (!yearData) {

    return {
      success: false,
      message:
        'Historical NEET data is unavailable for this year.',
    }

  }


  const band =
    findBand(
      numericScore,
      yearData
    )


  if (!band) {

    return {
      success: false,
      message:
        'Rank estimate is unavailable for this score.',
    }

  }


  const estimatedRank =
    calculateRank(
      numericScore,
      band
    )


  const spread =
    Math.max(
      100,
      Math.round(
        estimatedRank * 0.12
      )
    )


  const rankMin =
    Math.max(
      1,
      estimatedRank - spread
    )


  const rankMax =
    estimatedRank + spread


  let confidence =
    'Moderate'


  if (
    numericScore >= 650
  ) {

    confidence = 'High'

  }
  else if (
    numericScore >= 550
  ) {

    confidence = 'Good'

  }
  else if (
    numericScore < 350
  ) {

    confidence = 'Indicative'

  }


  return {

    success: true,

    score:
      numericScore,

    year,

    rank:
      estimatedRank,

    rankMin,

    rankMax,

    confidence,

  }

}