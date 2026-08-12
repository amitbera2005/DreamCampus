import jeeMainCategoryRankData
  from '../data/jeeMainCategoryRankData'


export function predictJEEMainCategoryRank(
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
    jeeMainCategoryRankData[
      category
    ]


  if (!data) {

    return {
      success: false,
      message:
        'Category rank data is unavailable.',
    }

  }


  const rank =
    Math.max(
      1,
      Math.round(
        generalRank *
        data.rankMultiplier
      )
    )


  const uncertainty =
    Math.max(
      20,
      Math.round(
        rank * 0.12
      )
    )


  return {

    success: true,

    isGeneral: false,

    category,

    rank,

    rankMin:
      Math.max(
        1,
        rank - uncertainty
      ),

    rankMax:
      rank + uncertainty,

    confidence:
      generalRank < 50000
        ? 'Good'
        : 'Moderate',

  }

}