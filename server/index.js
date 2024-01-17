/** import express.js and crossOriginIsolated **/
const express = require('express')
const cors = require('cors')

/** initialize an express application **/
const app = express()

/** use cors and json as middleware for the app */
app.use(cors())
app.use(express.json())

/** define a route for the root path */
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
  

/** starts the server on port 5000 */
app.listen(5000, () => console.log('Server started on port 5000'))