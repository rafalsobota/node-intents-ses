var Ses = require('node-ses');

module.exports = function(config) {
  
  var ses = Ses.createClient(config);
  
  var send = function(options, callback) {
    options.recipients || (options.recipients = [options.recipient]);
    options.subject || (options.subject = options.topic);
    
    if (options.html) {
      ses.sendemail({
        to: options.recipients,
        from: options.sender,
        subject: options.subject,
        message: options.html,
        altText: options.text
      }, callback);
      
    } else if (options.text) {
      ses.sendemail({
        to: options.recipients,
        from: options.sender,
        subject: options.subject,
        message: options.text
      }, callback);
      
    } else {
      throw new Error('Please specify text option');
    }
    
  }
  
  return {send: send};
}