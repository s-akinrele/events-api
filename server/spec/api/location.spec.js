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
        expect(response.body.message).to.equal('successfully created')
        expect(response.status).to.equal(201)
        done()
      })
    })

    it('should throw an error when location name is not provided', done => {
      request
      .post('/api/v1/locations')
      .send({
        address: '24 Kudirat Abiola Road',
        capacity: 2000
      })
      .end((error, response) => {
        expect(response.body.message).to.equal('unable to save location')
        expect(response.status).to.equal(400)
        done()
      })
    })

    it('should update location', done => {
      request
      .put('/api/v1/locations/1')
      .send({
        name: "Classique Event",
        address: '24 Kudirat Abiola Road',
        capacity: 1500
      })
      .end((error, response) => {
        expect(response.body.message).to.equal('successfully updated')
        expect(response.status).to.equal(200)
        done()
      })
    })
  })
})
