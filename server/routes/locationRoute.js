import Location from '../controllers/locationController'

const location = new Location()

const locationRoute = router => {
  router.route('/api/v1/locations')
  .post(location.createLocation)
}

export default locationRoute
