import LocationController from '../controllers/locationController'

const location = new LocationController()

const locationRoute = router => {
  router.route('/api/v1/locations')
    .get(location.findAllLocations)
    .post(location.createLocation)

  router.route('/api/v1/locations/:id')
    .get(location.findLocation)
    .put(location.updateLocation)
    .delete(location.deleteLocation)
}

export default locationRoute
