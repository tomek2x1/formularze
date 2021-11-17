const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(require("./controllers"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})