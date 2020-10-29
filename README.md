# Simple Timestamp API

A simple Node.js API to display a Unix and UTC timestamps.


## Usage

- Access the route `api/timestamp` and it will show the current datetime in both Unix and UTC formats.
- If you specify a unix or US date format after the route - `api/timestamp/:date`, it will display the timestamp requested. Example: `api/timestamp/2015-12-25`.
- If a invalid date is specified, a error message will be returned instead.