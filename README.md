# Mailgun integration for Intents

This project is intented to use with [Intents](https://github.com/rafalsobota/node-intents) module.

## Example as part of Intents

Details about Intents are at [Intents project page](https://github.com/rafalsobota/node-intents)

    npm install intents

in Intents configuration at ./config/default.coffee:

    ses = require 'intents-ses'
    
    @mail = ses
      key: 'my-AWS-key'
      secret: 'my-AWS-secret'
      amazon: 'amazon end-point uri' # defaults to amazon east

in app code:

    var mail = require('intents').mail;
    
    mail.send({
      recipient: 'me@gmail.com',
      sender: 'no-reply@appload.pl',
      subject: 'Some subject',
      html: 'Some html',
      text: 'Alt text'}, function(error) {
        if(error) {
          console.error(error);
        }
      });

## Example as standalone module

    var ses = require('intents-ses');
    var mail = ses({key: 'my-AWS-key', secret: 'my-AWS-secret'});
    
    mail.send({
      recipient: 'me@gmail.com',
      sender: 'no-reply@appload.pl',
      subject: 'Some subject',
      html: 'Some html',
      text: 'Alt text'}, function(error) {
        if(error) {
          console.error(error);
        }
      });

`key` - (required) your AWS SES key
`secret` - (required) your AWS SES secret
`algorithm` - [optional] the AWS algorithm you are using. defaults to SHA1.
`amazon` - [optional] the amazon end-point uri. defaults to amazon east.