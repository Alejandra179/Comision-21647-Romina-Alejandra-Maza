const {Sequelize, Model, DataTypes} = rquire('sequelize');
const sequelize = new Sequelize('');


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
    linkUrl:DataTypes.STRING
},{
        sequelize,
        modelName:'post',
        createdAt: true,
        updatedAt: 'updateTimestamp'
    }

)

module.exports = Post