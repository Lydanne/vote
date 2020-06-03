const { formModel, userModel } = require('../db/index');
var express = require('express');
var router = express.Router();

/* 提交表单. */
router.post('/', function(req, res) {
  const {select=-1,ip='',formId='', pwd=''} = req.body;
  if(select === -1 || !ip || !formId){
    return res.status(400).send({msg:'参数错误'});
  }

  const row = formModel.find({ _id:formId})[0];

  if(!row){
    return res.status(404).send({msg:'没有找到表单'});
  }
  const { pwd:_pwd, ...other } = row;

  if (_pwd && _pwd != pwd) {
    return res.status(401).send({ msg: '密码错误' });
  }

  row.options[select].number ++;
  //row.save();
  let user = userModel.find({ip})[0];
  if(!user){
    user = { ip, submits: [] };
    userModel.insert(user);
  }
  
  if(user.submits.indexOf(formId)!==-1){
    return res.status(403).send({msg:'重复投票'});
  }
  user.submits.push(formId);
  res.send(other);
});

module.exports = router;
