import {expect} from 'chai'
import {paginationSanitizer, pagination} from '../../utils/pagination'


describe('Pagination', () => {
  describe('Pagination Sanitizer', () => {
    it('should return the default limit when limit is negative', () => {
      const paginationParams = paginationSanitizer(-1, 0, 'ASC')
      expect(paginationParams.limit).to.be.equal(10)
    })

    it('should return the default limit when limit is not an integer', () => {
      const paginationParams = paginationSanitizer('a', 0, 'ASC')
      expect(paginationParams.limit).to.be.equal(10)
    });

    it('should return the pagination limit when the limit passed is valid', () => {
      const paginationParams = paginationSanitizer(4, 0, 'ASC')
      expect(paginationParams.limit).to.be.equal(4)
    })

    it('should return the default offset when the offset is negative ', () => {
      const paginationParams = paginationSanitizer(4, -1, 'ASC')
      expect(paginationParams.offset).to.be.equal(0)
    })

    it('should return the default offset when the offset is not an integer ', () => {
      const paginationParams = paginationSanitizer(4, 'a', 'ASC')
      expect(paginationParams.offset).to.be.equal(0)
    })

    it('should return the offset passed if the offset is valid', () => {
      const paginationParams = paginationSanitizer(10, 4, 'ASC')
      expect(paginationParams.offset).to.be.equal(4)
    })

    it('should return the default order if order is not passed', () => {
      const paginationParams = paginationSanitizer(10, 4)
      expect(paginationParams.order.val).to.be.equal('"createdAt" ASC')
    })

    it('should return the response result in descending order', () => {
      const paginationParams = paginationSanitizer(10, 0, 'DESC')
      expect(paginationParams.order.val).to.be.equal('"createdAt" DESC')
    })

    it('should return the corresponding pagination metadata if valid', () => {
      expect(paginationSanitizer(7, 0, 'ASC')).to.be.an('object')
    })
  })

  describe('Pagination Function', () => {
    const paginationData = pagination({ limit: 10, offset: 0, order: 'ASC' }, 10)
    it('should return 10  as the pageSize ', () => {
      expect(paginationData.pageSize).to.be.equal(10)
    })

    it('should return 10 as the totalCount', () => {
      expect(paginationData.totalCount).to.be.equal(10)
    })

    it('should return as 1 the pageCount', () => {
      expect(paginationData.pageCount).to.be.equal(2)
    })

    it('should return 1 as the currentPage', () => {
      expect(paginationData.currentPage).to.be.equal(1)
    })
  })
})
