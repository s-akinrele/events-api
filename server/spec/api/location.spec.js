import supertest from 'supertest'
import {expect} from 'chai'
import app from '../../../index'
import '../../models/index'

const request = supertest.agent(app);

describe('Location API:', () => {
  describe('Create an event Location', () => {
    it('should create a location successfully', done => {
      request
      .post('/api/v1/locations')
      .send({
        name: "Morgan's place",
        address: '24 Kudirat Abiola Road',
        capacity: 1000
      })
      .end((error, response) => {
        console.log(error)
        expect(response.body.message).to.equal('successfully created')
        expect(response.status).to.equal(201)
        done();
      })
    })
  })
})
