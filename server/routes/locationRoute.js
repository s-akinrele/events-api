import Location from '../controllers/locationController'

const location = new Location()

const locationRoute = router => {
  router.route('/locations')
  .post(location.createLocation)
}

export default locationRoute
