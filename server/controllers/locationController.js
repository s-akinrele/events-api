import db from '../models'

export default class Location {
  createLocation(req, res) {
    const locations = {
      name: req.body.name,
      address: req.body.address,
      capacity: req.body.capacity
    }

    db.Location.findOne({
      where: {name: req.params.name}
    })
    .then(location => {
      if (location) {
        return res.status(409).send({message: `Location ${req.params.name} already exists`})
      }

      db.Location.create(locations)
      .then(location => {
        return res.status(201).send({message: 'successfully created', location})
      })
      .catch(err => {
        return res.status(400).send({message: 'unable to save location', error: err.message})
      })
    })
    .catch(err => {
      return res.status(500).send({message: 'An error occured', error: err.message})
    })
  }

  updateLocation(req, res) {
    db.Location.findOne({
      where: {id: req.params.id}
    })
    .then(location => {
      if (!location) {
        return res.status(404).send({message: `Location with id ${req.params.id} does not exists`})
      }

      location.update({
        name: req.body.name || location.name,
        address: req.body.address || location.address,
        capacity: req.body.capacity || location.capacity
      })
      .then(updatedLocation => {
        return res.status(200).send({message: 'successfully updated', updatedLocation})
      })
      .catch(err => {
        return res.status(400).send({message: 'An error occured', error: err.message})
      })
    })
    .catch((err) => {
      return res.status(500).send(err);
    })
  }

  findAllLocations(req, res) {
    db.Location.findAll()
    .then(locations => {
      if (locations.length === 0) {
        return res.status(200).send('No locations recorded')
      }

      return res.status(200).send({message: 'All locations', locations})
    })
    .catch(err => {
      return res.status(400).send(err)
    })
  }

  findLocation(req, res) {
    db.Location.findOne({
      where: {id: req.params.id}
    })
    .then(location => {
      if (!location) {
        return res.status(404).send({message: 'Location not found'})
      }

      return res.status(200).send({message: 'view location', location})
    })
    .catch(error => {
      return res.status(400).send(err)
    })
  }

  deleteLocation(req, res) {
    db.Location.findOne({
      where: {id: req.params.id}
    })
    .then(location => {
      if (!location) {
        return res.status(404).send({message: 'Location not found'})
      }

      location.destroy()
      res.status(200).send({message: 'location deleted'})
    })
    .catch(error => {
      return res.status(400).send(err)
    })
  }
}
