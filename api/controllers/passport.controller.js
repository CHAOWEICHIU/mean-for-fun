const passport = require('passport')
    , GoogleStrategy    = require('passport-google-oauth').OAuth2Strategy
    , configAuth        = require('../config/auth')
    , User              = require('../models/users.model')



passport.serializeUser((user, done)=>{
    let put = {
        id: user._id,
        scope: ['weather', 'cool']
    }

    done(null, put);
})

passport.deserializeUser((clientObject, done)=>{
    console.log('5-deserializeUser')
    console.log('de: ',clientObject.scope)
    User.findById(clientObject.id, (err, user)=>{
        done(err, user);
    })
})


var gatherNewUserData = function(callback){
    var newUser          = new User();
    // set all of the relevant information
    newUser.id              = profile.id;
    newUser.token           = token;
    newUser.displayName     = profile.displayName;
    newUser.email           = profile.emails[0].value; // pull the first email
    newUser.provider        = profile.provider
    newUser.imgURL          = profile.photos[0].value
    callback(newUser)
}


passport.use(new GoogleStrategy({
    clientID            : configAuth.googleAuth.clientID,
    clientSecret        : configAuth.googleAuth.clientSecret,
    callbackURL         : configAuth.googleAuth.callbackURL,
    scope               : configAuth.googleAuth.scope,
    passReqToCallback   : true

}, (req , token, refreshToken, profile, done)=>{

    User.findOne({ 'id' : profile.id }, (err, user)=>{
        if (err) return done(err);
        if (user) return done(null, user);

        gatherNewUserData((newUser)=>{
            newUser.save((err)=>{
                if(err) throw err;
                return done(null, newUser)
            })
        })
    });    
}));


module.exports = {
    googleAuth: passport.authenticate('google')
}
