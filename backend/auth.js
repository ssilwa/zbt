var secrets = require('./secrets');
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var _ = require('lodash');

var Zebe = require('./models/zebe.js');

var jwt_opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secrets.crypto_key,
};

var jwt_strategy = new JwtStrategy(jwt_opts, function(payload, done) {
  if (_.has(payload, 'kerberos')) {
    Zebe.findOne({ kerberos: payload.kerberos }, function(err, zebe) {
      if (err) return done(err);
      if (!zebe) return done(null, false);
      return done(null, zebe);
    });
  } else {
    done('no kerberos in jwt', false);
  }
});

passport.use(jwt_strategy);

module.exports.RequireLoggedIn = passport.authenticate(
  'jwt',
  {session: false}
);