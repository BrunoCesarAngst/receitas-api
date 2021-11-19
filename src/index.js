// ./src/index.js
// import the dependencies

const express = require('express');

const app = express()

const msg = [{ title: "hello world!" }]

app.get("/", (req, res) => {
  res.send(msg)
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})
