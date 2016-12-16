var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Datastore connected.');
});
db.on('close', function() {
  // we're connected!
  console.log('Datastore disconnected.');
});
module.exports = mongoose