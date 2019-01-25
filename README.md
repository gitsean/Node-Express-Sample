# Mapping two objects

A node js project with two routes - one for bowling scores and one for merging objects.

## About

bowling: Send a get request with a string of bowling rolls and receive back a score.
mapping: A simple transform function that takes two objects and merges them.

To improve this project I would add some validation on the route to ensure the request is in the proper format.

## Test the Project

You can test the function by running `make test`

## Run the Server and Make a Request

Run the server by navigating to the directory in command line and entering `make`.

For a bowling score, send a get request with your score as the last path like: `172.23.0.2:4200/bowling/XXXXXXXXXX`

Post the following payload to: `172.23.0.2:4200/mapping/`

```json
[
  {
    "id": "234",
    "number": 56676,
    "amount": { "value": 45887.0973, "currency": "EUR", "revalRate": 1.17 },
    "date": "2018-07-24T15:11:09.723Z",
    "institution": "Wells Fargo Shareholder SVC",
    "abaRouting": "021200025"
  },
  {
    "acctNumber": "56676",
    "portfolio": "High Net Worth - growth allocation",
    "positions": [
      { "ticker": "PPL", "value": "45,544.99" },
      { "ticker": "WGF1", "value": "12,590.88" }
    ],
    "managed": true
  }
]
```
