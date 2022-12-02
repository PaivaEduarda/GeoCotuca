const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
  const tema = req.baseUrl.substring(1)
  
  const data = { 
      titulo: "relevo", 
      imagem: "https://www.infoescola.com/wp-content/uploads/2020/01/formas-relevo-continental-1095454406.jpg",
      texto: "texto do relevto " 
    }

  res.locals.tema = data;
  return res.render('tema');
});

module.exports = router;