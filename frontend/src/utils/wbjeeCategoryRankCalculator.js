import wbjeeCategoryRankData
  from '../data/wbjeeCategoryRankData'


function findCategoryBand(
  score,
  categoryData
) {

  for (const band of categoryData) {

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

  if (!band) {
    return null
  }


  const scoreRange =
    band.max - band.min


  const rankRange =
    band.rankMax - band.rankMin


  if (scoreRange === 0) {

    return Math.round(
      (
        band.rankMin +
        band.rankMax
      ) / 2
    )

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


export function predictCategoryRank(
  score,
  category
) {

  if (!category) {

    return {
      success: false,
      message:
        'Category is required.',
    }

  }


  /*
    General category has no separate
    reserved category rank.
  */

  if (
    category === 'General'
  ) {

    return {
      success: true,
      isGeneral: true,
      rank: null,
    }

  }


  const categoryData =
    wbjeeCategoryRankData[category]


  if (!categoryData) {

    return {
      success: false,
      message:
        'Category rank data is not available.',
    }

  }


  const numericScore =
    Number(score)


  if (
    Number.isNaN(numericScore)
  ) {

    return {
      success: false,
      message:
        'Invalid score.',
    }

  }


  const band =
    findCategoryBand(
      numericScore,
      categoryData
    )


  if (!band) {

    return {
      success: false,
      message:
        'Category rank estimate is not available for this score.',
    }

  }


  const estimatedRank =
    calculateRank(
      numericScore,
      band
    )


  const spread =
    band.rankMax -
    band.rankMin


  const uncertainty =
    Math.max(
      10,
      Math.round(
        spread * 0.12
      )
    )


  const rankMin =
    Math.max(
      1,
      estimatedRank -
      uncertainty
    )


  const rankMax =
    estimatedRank +
    uncertainty


  let confidence = 'Moderate'


  if (
    numericScore >= 140
  ) {
    confidence = 'Good'
  }


  if (
    numericScore >= 160
  ) {
    confidence = 'High'
  }


  return {

    success: true,

    isGeneral: false,

    category,

    rank:
      estimatedRank,

    rankMin:
      Math.round(rankMin),

    rankMax:
      Math.round(rankMax),

    confidence,

  }
}