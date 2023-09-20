const Post = require('./Models/Post');

const CreatePostController = async (req,res)=>{
    const { title,content, url} = req.body
    try{
        const post = await Post.create({ title, content, url })
        res.json(post)
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje:'Hubo un error al crear el post'})
    }
}

const getPostsController = async (req,res)=>{
    try{
        const posts = await  Post.findAll()
        return res.render('index',{posts})
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje:'Hubo un error al obtener los posts'})
    }
   
    
}

const getPostController = async (req,res)=>{
    const {id} = req.params;
    try{
        const post = await  Post.findByPk(id)
        res.json(post)
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje:'Hubo un error al obtener el post'})
    }
   
    
}

const updatePostController = async (req,res)=>{
    const {id} = req.params;
  
    try{
        await Post.update(req.body,{
            where: {id }
        })
        res.json({mensaje:'Post actualizado correctamente'})
    }catch(error){
        res.status(500).json({mensaje:'Hubo un error al actualizar el post'})
    } 
}

const deletePostController = async(req,res) =>{
    const {id} = req.params;
    try{
        await Post.destroy({where:{id}})
        res.json({mensaje: 'Post eliminado correctamente'})
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje:'Hubo un error al eliminar el post'})
    }
}  
    

module.exports={CreatePostController,getPostsController,updatePostController,getPostController,deletePostController}