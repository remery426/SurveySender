module.exports = (req, res, next) => {
  if(!req.user){
    return res.status(401).send({erro: 'You must log in!'})
  }
  else{
    next();
  }
}
