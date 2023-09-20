const validateFields = (req, res, next) => {
    const { title, content,url } = req.body;
  
    if (typeof title !== 'string') {
      return res.status(400).json({
        error: 'El título debe contener caracteres',
      });
    }
    if(title==""){
        return 	res.status(400).send("Debe ingresar un Titulo")
    }
    if(content==""){
        return res.status(400).send('Debe ingresar una descripción del contenido')
    }
    if(url==""){
        return   res.status(400).send('Debe ingresar la URL de la imagen del post');
    }
  
    next();
  };
  
  module.exports = validateFields;