import db from '../models/index'


export default class Event {
  createEvent(req, res) {
    db.Location.findOne({
      where: {id: req.body.locationId}
    })
    .then(location => {
      if (!location) {
        return res.status(404).send({message: 'Location not found'})
      }

      db.Event.create({
        name: req.body.name,
        time: req.body.time,
        locationId: location.id
      })
      .then(evt => {
        return res.status(201).send({message: 'created successfully', evt})
      })
      .catch(err => {
        return res.status(400).send({message: 'unable to save event', error: err.message})
      })
    })
    .catch(err => {
      return res.status(400).send({message: 'an error occured', error: err.message})
    })
  }

  updateEvent(req, res) {
    db.Event.findOne({
      where: {id: req.params.id}
    })
    .then(event => {
      if (!event) {
        return res.status(404).send({message: 'Event not found'})
      }

      if (req.body.locationId) {
        db.Location.findOne({
          where: {id: req.body.locationId}
        })
        .then((loc) => {
          if (!loc) {
            return res.status(400).send({message: 'Location does not exist'})
          }

          event.update({
            name: req.body.name || event.name,
            time: req.body.time || event.time,
            locationId: req.body.locationId || event.locationId
          })
          .then(evt => {
            return res.status(200).send({message: 'event updated', evt})
          })
          .catch(err => {
            return res.status(400).send(err)
          })
        })
        .catch(err => {
          return res.status(400).send(err)
        })
      }

      return res.status(400).send({message: 'Event should have a location'})
    })
    .catch(err => {
      return res.status(400).send(err)
    })
  }

  findEvent(req, res) {
    db.Event.findOne({
      where: {id: req.params.id}
    })
    .then(event => {
      if (!event) {
        return res.status(404).send({message: 'Event not found'})
      }
      
      return res.status(200).send({message: 'Event', event})
    })
    .catch(err => {
      return res.status(400).send(err)
    })
  }

  findAllEvents(req, res) {
    db.Event.findAll()
      .then(events => {
        if (!events) {
          return res.status(404).send({message: 'No event found'})
        }

        return res.status(200).send({message: 'All events', events})
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  deleteEvent(req, res) {
    db.Event.findOne({
      where: {id: req.params.id}
    })
    .then(event => {
      if (!event) {
        return res.status(404).send({message: 'Event not found'})
      }

      event.destroy()
      res.status(200).send({message: 'event deleted'})
    })
    .catch(error => {
      return res.status(400).send(err)
    })
  }
}
