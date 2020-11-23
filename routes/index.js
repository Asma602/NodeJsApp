var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/home/asma/WebstormProjects/MEAN_APP/NodeJs/views/Home.html');
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.sendFile('/home/asma/WebstormProjects/MEAN_APP/NodeJs/views/About-us.html');
});
/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.sendFile('/home/asma/WebstormProjects/MEAN_APP/NodeJs/views/Contact.html');
});
// /* GET Admin panel. */
// router.get('/admin', function(req, res, next) {
//   res.sendFile('/home/asma/WebstormProjects/MEAN_APP/AngularApp/src/app/app.component.html');
// });

module.exports = router;
