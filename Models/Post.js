const {Sequelize, Model, DataTypes} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USER_DATABASE, '', {
    host: process.env.HOST,
    dialect: 'mysql',
  });


class Post extends Model{}
Post.init({
    
   
    id:{
        type :DataTypes.INTEGER ,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type:DataTypes.STRING(30),
        allowNull:false
    },
    content: DataTypes.STRING(70),
    url: DataTypes.STRING
},{
        sequelize,
        modelName:'post',
        createdAt: true,
        updatedAt: 'updateTimestamp'
    }

)

sequelize.sync().then(()=>console.log("Modelos synchronized with database")).catch(err=>console.error('Unable to sync models with database:',err))
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = Post