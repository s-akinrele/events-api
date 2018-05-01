import sequelize from 'sequelize'

export const paginationSanitizer = (limit, offset, order) => {
  if (limit) {
    if (isNaN(Number(limit)) || limit < 0) {
      limit = 10;
    }
  } else {
    limit = 10;
  }

  if (offset) {
    if (isNaN(Number(offset)) || offset < 0) {
      offset = 0;
    }
  } else {
    offset = 0;
  }

  if (order && order.toLowerCase() === 'desc') {
    order = sequelize.literal('"createdAt" DESC')

  } else {
    order = sequelize.literal('"createdAt" ASC')
  }

  return { limit, offset, order }
};

export const pagination = (paginationData, locationCount) => {
  const metadata = {}
  metadata.totalCount = locationCount
  metadata.pageSize = paginationData.limit
  metadata.pageCount = Math.floor(metadata.totalCount / paginationData.limit) + 1
  metadata.currentPage = Math.floor(paginationData.offset / paginationData.limit) + 1
  return metadata;
}
