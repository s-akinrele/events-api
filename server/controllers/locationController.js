import db from '../models'

export default class Location {
  createLocation(req, res) {
    db.Location.findOne({
      where: {name: req.params.name}
    })
    .then(location => {
      if (location) {
        return res.status(409).send({message: `Location ${req.params.name} already exists`})
      }

      db.Location.create(req.body)
      .then(location => {
        return res.status(201).send({message: 'successfully created', location})
      })
      .catch(err => {
        return res.status(400).send({message: 'An error occured', error: err.message})
      })
    })
    .catch(err => {
      return res.status(500).send({message: 'An error occured', error: err.message})
    })
  }
}
