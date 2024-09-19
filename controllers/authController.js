  
const passport = require('passport');

// Google OAuth2 login route
exports.googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });

// Google OAuth2 callback route
exports.googleCallback = passport.authenticate('google', { failureRedirect: '/' }, (req, res) => {
  // Successful authentication
  res.redirect('/dashboard');
});

// Logout user
exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
