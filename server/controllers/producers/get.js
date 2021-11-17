const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

require('dotenv').config()

const Producer = require("../../models/Producer");
const mongoURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_COLL}.6dxld.mongodb.net/${process.env.DB_TABLE}?retryWrites=true&w=majority`

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log(">> DB Connected.");
    },
    (err) => {
      console.log(">> DB Connection Error...");
    }
  );

router.get("/", async (req, res) => {
  try {
    
    console.log(process.env.DB_USER)
    // let producers = await Producer.find()

    // if(producers){
    // res.json(producers);
    // }
    
  } catch (e) {
    // ReturnError(res, e);
  }
});



module.exports = router;