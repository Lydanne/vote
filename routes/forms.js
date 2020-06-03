const {formModel} = require('../db/index');
var express = require('express');
var router = express.Router();

/* 获取全部的表单. */
router.get('/', function(req, res) {
  res.send(formModel.find().map(({ pwd, ...other }) => other));
});

/* 获取指定的表单. */
router.get('/:formId', function(req, res) {
  const row = formModel.find({ _id: req.params.formId })[0];

  if(!row){
    return res.status(404).send({msg:'不存在'});
  }

  if(row.pwd && row.pwd != req.query.pwd){
    return res.status(401).send({msg:'密码错误'});
  }
  const {pwd, ...other} = row;
  res.send(other);
});

module.exports = router;
