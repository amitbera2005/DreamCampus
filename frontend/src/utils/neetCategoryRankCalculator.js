import neetCategoryRankData
  from '../data/neetCategoryRankData'


export function predictNEETCategoryRank(
  generalRank,
  category
) {

  if (!category) {

    return {
      success: false,
      message:
        'Category is required.',
    }

  }


  if (
    category === 'General'
  ) {

    return {
      success: true,
      isGeneral: true,
      rank: null,
    }

  }


  const data =
    neetCategoryRankData[
      category
    ]


  if (!data) {

    return {
      success: false,
      message:
        'Category rank data is unavailable.',
    }

  }


  const estimatedRank =
    Math.max(
      1,
      Math.round(
        generalRank *
        data.multiplier
      )
    )


  const uncertainty =
    Math.max(
      50,
      Math.round(
        estimatedRank * 0.15
      )
    )


  return {

    success: true,

    isGeneral: false,

    category,

    rank:
      estimatedRank,

    rankMin:
      Math.max(
        1,
        estimatedRank -
        uncertainty
      ),

    rankMax:
      estimatedRank +
      uncertainty,

    confidence:
      generalRank < 100000
        ? 'Good'
        : 'Moderate',

  }

}