import EventController from '../controllers/eventController'

const event = new EventController()

const eventRoute = router => {
  router.route('/api/v1/events')
    .get(event.findAllEvents)
    .post(event.createEvent)

  router.route('/api/v1/events/search')
    .get(event.searchEvent)

  router.route('/api/v1/events/:id')
    .get(event.findEvent)
    .put(event.updateEvent)
    .delete(event.deleteEvent)
}

export default eventRoute