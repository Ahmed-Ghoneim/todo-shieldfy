/* Template file to load the configuration
 and start the server */

const app = require('./config/appConfig');
var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
  console.log("Go to port " + port);
});
