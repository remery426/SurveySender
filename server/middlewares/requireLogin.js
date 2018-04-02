module.exports = (req, res, next) => {
  if(!req.user){
    console.log("Sup")

    return res.status(401).send({error: 'You must log in!'})
  }
  else{
    console.log(req.user)
    next();
  }
}
