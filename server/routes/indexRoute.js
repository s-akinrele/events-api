import location from './locationRoute'
import events from './eventRoute'

const routes = router => {
  location(router)
  events(router)
}

export default routes
