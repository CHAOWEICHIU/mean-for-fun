var isLoggedIn = (req, res, next)=>{

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) return next();
    res.status(401).send()
}

module.exports = {
	login: isLoggedIn
}

