# Events Management System
Events Management System API contains API endpoints which allows users to create, edit, retrieve and delete events and locations.

Development
-----------
The application was developed with [NodeJs](http://nodejs.org) while using [Express](http://expressjs.com) for routing.
 The [Postgres](http://postgresql.com) database was used with [sequelize](http://sequelizejs.com) as the ORM.

Installation
------------
1.  Ensure you have NodeJs and postgres installed
2.  Clone the repository `git clone https://github.com/s-akinrele/events-api.git`
3.  Change your directory `cd events-api`
4.  Install all dependencies `npm install`
5.  Run tests  `npm test`
6.  Start the app `npm start` and use the [postman collection](https://www.getpostman.com/collections/16cbaed248038069a004) to consume the API

**Locations**

Request type | Endpoint | Action
------------ | -------- | ------
POST | [/api/v1/locations](#createLocation) | Create a location
GET | [/api/v1/locations](#findAllLocations) | Get all locations
GET | [/api/v1/locations/:id](#findLocation) | Get a location and related events
PUT | [/api/v1/locations/:id](#updateLocation) | Edit location details
DELETE | [/api/v1/locations/:id](#deleteLocation) | Delete a location


**Events**

Request type | Endpoint | Action
------------ | -------- | ------
POST | [/api/v1/events](#createEvent) | Create a new event
GET | [/api/v1/events](#findAllEvents) | Get all events
GET | [/api/v1/events/:id](#findEvent) | Get details of a specific event
PUT | [/api/v1/events/:id](#updateEvent) | Edit event details
DELETE | [/api/v1/events/:id](#deleteEvent) | Delete an event

Locations
-----

## Create a Location
To create a new location, make a **POST** request to `api/v1/locations`
#### Request
  - Endpoint: **POST**: `/api/v1/locations`
```
{
	"name": "FM Event Centre",
	"address": "19 Joel Ogunnaike St, Ikeja GRA, Ikeja",
	"capacity": 2000
}
```
#### Mock Response
```
{
  "message": "successfully created",
  "location": {
    "id": 11,
    "name": "FM Event Centre",
    "address": "19 Joel Ogunnaike St, Ikeja GRA, Ikeja",
    "capacity": 2000,
    "updatedAt": "2018-05-01T15:28:42.241Z",
    "createdAt": "2018-05-01T15:28:42.241Z"
  }
}
```

## Get Locations
To fetch all locations
#### Request 
  - Endpoint: **POST**: `/api/v1/locations`

#### Mock Response

```
{
  "paginationMetaData": {
    "totalCount": 11,
    "pageSize": 3,
    "pageCount": 4,
    "currentPage": 1
  },
  "result": [
    {
      "id": 1,
      "name": "Sheba Centre",
      "address": "20 Mobolaji Bank Anthony Way, Maryland, Ikeja",
      "capacity": 1500,
      "createdAt": "2018-04-29T19:08:09.144Z",
      "updatedAt": "2018-04-29T19:08:09.144Z"
    },
    {
      "id": 2,
      "name": "Batten House Event Center Agidingbi Ikeja",
      "address": "Plot A2 blockG MKO Abiola Garden Road beside adonai court off CIPM Avenue Alausa, Ikeja",
      "capacity": 1500,
      "createdAt": "2018-04-29T19:08:09.144Z",
      "updatedAt": "2018-04-29T19:08:09.144Z"
    },
    {
      "id": 3,
      "name": "The Haven Event Center",
      "address": "Beside Arch Bishop Vining Memorial Church Cathedral, Fajuyi Way, Ikeja GRA, Lagos",
      "capacity": 2500,
      "createdAt": "2018-04-29T19:08:09.144Z",
      "updatedAt": "2018-04-29T19:08:09.144Z"
    }
  ]
}
```


## Get a Location
Get details for a specific location and relative events.
#### Request
  - Endpoint: **GET**: `/api/v1/locations/:id`
#### Mock Response

```
{
  "message": "view location",
  "location": {
    "id": 1,
    "name": "Classique Event",
    "address": "24 Kudirat Abiola Road",
    "capacity": 1500,
    "createdAt": "2018-04-29T19:08:09.144Z",
    "updatedAt": "2018-05-01T14:51:58.994Z",
    "events": [
      {
        "id": 14,
        "name": "Wedding Party",
        "time": "2018-04-29T17:11:30.127Z",
        "createdAt": "2018-05-01T15:40:41.306Z",
        "updatedAt": "2018-05-01T15:40:41.306Z",
        "locationId": 1
      },
      {
        "id": 13,
        "name": "Eat drink Lagos",
        "time": "2018-05-29T17:11:30.127Z",
        "createdAt": "2018-05-01T15:40:41.234Z",
        "updatedAt": "2018-05-01T15:40:41.363Z",
        "locationId": 1
      }
    ]
  }
}
```

EVENTS
---------
## Create an Event
#### Request
  - Endpoint: **POST** `/api/v1/events`
```
{
  "name": "My birthday party",
  "time": "2018-05-01T15:40:41.363Z",
  "locationId": 1
}
```
#### Mock Response
  - Body `(application/json)`
```
{
  "message": "created successfully",
  "evt": {
    "id": 15,
    "name": "My birthday party",
    "time": null,
    "locationId": 2,
    "updatedAt": "2018-05-01T15:51:58.481Z",
    "createdAt": "2018-05-01T15:51:58.481Z"
  }
}
```

## Get an Event
#### Request
  - Endpoint: **GET** `/api/v1/events/15`

#### Mock Response
  - Body `(application/json)`

 ```
{
  "message": "Event",
  "event": {
    "id": 15,
    "name": "My birthday party",
    "time": null,
    "createdAt": "2018-05-01T15:51:58.481Z",
    "updatedAt": "2018-05-01T15:51:58.481Z",
    "locationId": 2
  }
}
```
## Get all Events
To fetch all events
#### Request 
  - Endpoint: **GET**: `/api/v1/events`

#### Mock Response

```
{
  "message": "All events",
  "events": [
    {
      "id": 14,
      "name": "Wedding Party",
      "time": "2018-04-29T17:11:30.127Z",
      "createdAt": "2018-05-01T15:40:41.306Z",
      "updatedAt": "2018-05-01T15:40:41.306Z",
      "locationId": 1
    },
    {
      "id": 13,
      "name": "Eat drink Lagos",
      "time": "2018-05-29T17:11:30.127Z",
      "createdAt": "2018-05-01T15:40:41.234Z",
      "updatedAt": "2018-05-01T15:40:41.363Z",
      "locationId": 1
    },
    {
      "id": 15,
      "name": "My birthday party",
      "time": null,
      "createdAt": "2018-05-01T15:51:58.481Z",
      "updatedAt": "2018-05-01T15:51:58.481Z",
      "locationId": 2
    }
  ]
}
```
