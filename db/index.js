const shortid = require('shortid')
/**
 * 模拟MongoDB
 */
class Mongo{
  static dbs = {};
  constructor(name){
    Mongo.dbs[name] = [];
    this.name = name;
    this.db = Mongo.dbs[name];
  }
  insert(...values){
    values.map(item => item._id = shortid.generate());
    this.db.push(...values);
    return values;
  }

  find(query = {}){
    const keys = Object.keys(query);
    if(keys.length===0){
      return this.db//.map(({pwd,...other}) => other);
    }
    return this.db.filter(row=>{
      return keys.find(key => row[key] === query[key]);
    })//.map(({ pwd, ...other }) => other);
  }
}

module.exports ={
  formModel: new Mongo('forms'),
  userModel: new Mongo('users')
};