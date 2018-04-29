import db from '../models/index'

db.Location.sync({force: true})
  .then(() => {
    db.Location.bulkCreate(
    [
      {
        name: 'Excel Event Center Oregun Ikeja',
        address: '8A Billings Way, Oregun, Ikeja',
        capacity: '2000'
      },
      {
        name: 'The Haven Event Center',
        address: 'Beside Arch Bishop Vining Memorial Church Cathedral, Fajuyi Way, Ikeja GRA, Lagos',
        capacity: '2500'
      },
      {
        name: 'Sheba Centre',
        address: '20 Mobolaji Bank Anthony Way, Maryland, Ikeja',
        capacity: '1500'
      },
      {
        name: 'Batten House Event Center Agidingbi Ikeja',
        address: 'Plot A2 blockG MKO Abiola Garden Road beside adonai court off CIPM Avenue Alausa, Ikeja',
        capacity: '1500'
      },
      {
        name: '10 Degrees Events Centre',
        address: ' 32 Billings Way, Oregun Ikeja',
        capacity: '2000'
      }
    ]
  )
    .then(() => {
      console.log('finished populating locations')
    })
  })
