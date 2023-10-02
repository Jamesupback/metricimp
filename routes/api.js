'use strict';

const expect = require('chai').expect;
const e = require('cors');
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  app.get('/api/convert',(req,res)=>{
    let return_unit;
    const input=req.query.input;
    const num=convertHandler.getNum(input);
    const unit=convertHandler.getUnit(input);

    if(!num && !unit)
    res.json('invalid number and unit')
    else if(!num)
    res.json('invalid number')
    else if(!unit)
    res.json('invalid unit');
    else
    {
      res.json(convertHandler.getString(num,unit,convertHandler.convert(num,unit[0]),convertHandler.getReturnUnit(unit[0])));
    }
  })
  let convertHandler = new ConvertHandler();

};
