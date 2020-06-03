const { formModel } = require('../db/index');
var express = require('express');
var router = express.Router();

/* 创建表单. */
router.post('/', function (req, res) {
  const form = req.body;
  if(typeof form.pwd === 'undefined' || typeof form.title === 'undefined' || typeof form.options !== 'object' || typeof form.options.length === 0){
    return res.status(400).send({msg:'传参错误'});
  }
  form.options.map(item => item.number = 0);
  const result = formModel.insert(form);
  res.send(`http://${process.env.DOMAIN}:${process.env.PORT}/forms/${result[0]._id}`);
});

module.exports = router;
