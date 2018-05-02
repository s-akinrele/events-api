import sequelize from 'sequelize'

export const paginationSanitizer = (lm, offst, ordr) => {
  let limit, offset, order

  if (!isNaN(lm) && lm > 0) {
    limit = lm
  } else {
    limit = 10
  }

  if (!isNaN(offst) && offst > 0) {
    offset = offst
  } else {
    offset = 0
  }

  if (ordr && ordr.toLowerCase() === 'desc') {
    order = sequelize.literal('"createdAt" DESC')

  } else {
    order = sequelize.literal('"createdAt" ASC')
  }

  return { limit, offset, order }
}

export const pagination = (paginationData, locationCount) => {
  const metadata = {}
  metadata.totalCount = locationCount
  metadata.pageSize = paginationData.limit
  metadata.pageCount = Math.floor(metadata.totalCount / paginationData.limit) + 1
  metadata.currentPage = Math.floor(paginationData.offset / paginationData.limit) + 1
  return metadata
}
