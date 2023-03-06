# **API Documentation For Backend**

Code to run:-

npm init -y

npm i

nodemon index.js

Two endpoints:-

http://localhost:3000/linestring

http://localhost:3000/token

This API documentation outlines the endpoints and parameters for our web service.

**Token API**

**Endpoint**

**GET /token**

**Parameters**

**Description**

The Token API provides an access token which can be used to authenticate requests to other endpoints in the API. The access token is valid for one hour from the time it is issued.

**LineString API**

**Endpoint**

**POST /linestring**

**Parameters**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| **Authorization** | string | A bearer token obtained from the Token API. |
| --- | --- | --- |
| **geojson** | object | A GeoJSON object representing a LineString with properties. |

**Request Example**

{
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        -122.483696,
        37.833818
      ],
      [
        -122.514633,
        37.819616
      ]
    ]
  },
  "properties": {}
}


**Response**

[
  {
    "id": "L01",
    "intersectionPoint": [
      -122.483696,
      37.833818
    ]
  },
  {
    "id": "L02",
    "intersectionPoint": [
      -122.483696,
      37.833818
    ]
  }
]

**Description**

The LineString API calculates the intersection points of a given LineString with sample spread lines present in the system. The **geojson** parameter must be a GeoJSON object representing a LineString with properties. The API returns an array of objects containing the id of the intersecting LineString and its intersection point. A valid bearer token obtained from the Token API must be passed in the **Authorization** header of the request.
