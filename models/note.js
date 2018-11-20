var Sequelize = require('sequelize');
var path = require('path');

//set up a connection
var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite', //sqlite 类型前三个参数无需提供
  // SQLite only
  storage: path.join(__dirname, '../database/database.sqlite')  //自动创建 database 中的数据库
});

sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

//build a first model named 'note'
var Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  }
});
Note.sync()

module.exports = Note;
