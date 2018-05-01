import supertest from 'supertest'
import {expect} from 'chai'
import app from '../../../index'
import db from '../../models/index'

const request = supertest.agent(app);

let eventId;
before(done => {
  db.Event.destroy({where: {}})
    .then(() =>
      db.Event.create({
        name: 'Shade\'s Pool party',
        time: '2018-05-29T17:11:30.127Z',
        locationId: 1
      })
      .then((evt) => {
        eventId = evt.id
        done()
      }))
})

describe('Event API:', () => {
  describe('Create an Event', () => {
    it('should create an event successfully', done => {
      request
      .post('/api/v1/events')
      .send({
        name: 'Wedding Party',
        time: '2018-04-29T17:11:30.127Z',
        locationId: 1
      })
      .end((error, response) => {
        expect(response.body.message).to.equal('created successfully')
        expect(response.status).to.equal(201)
        done()
      })
    })

    it('should throw an error when event name is not provided', done => {
      request
      .post('/api/v1/events')
      .send({
        time: '2018-04-29T17:11:30.127Z',
        locationId: 1
      })
      .end((error, response) => {
        expect(response.body.message).to.equal('unable to save event')
        expect(response.status).to.equal(400)
        done()
      })
    })

    it('should update event', done => {
      request
      .put(`/api/v1/events/${eventId}`)
      .send({
        name: "Eat drink Lagos",
        locationId: 1
      })
      .end((error, response) => {
        expect(response.body.message).to.equal('event updated')
        expect(response.status).to.equal(200)
        done()
      })
    })
  })
})
