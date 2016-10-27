var isLoggedIn = (req, res, next)=>{
	console.log(req.cookies)
    if (req.isAuthenticated()) return next();
    res.status(401).send()
}

module.exports = {
	login: isLoggedIn
}

