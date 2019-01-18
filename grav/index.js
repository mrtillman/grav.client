var GravXML = require('./grav.xml');
var crypto = require('crypto');
var grav = require('./grav');

function Grav(email, password){
  this.xml = new GravXML(password);
  this.hash = crypto.createHash('md5')
                    .update(email)
                    .digest("hex");
  this.api_url = `https://secure.gravatar.com/xmlrpc?user=${this.hash}`;
}

Grav.prototype.test = function(){
  return new Promise((resolve, reject) => {
    const payload = this.xml.grav_test();
    const result = grav.exec(this.api_url, payload);
    resolve(result);
  })
}

Grav.prototype.userimages = function(){
  return new Promise((resolve, reject) => {
    const payload = this.xml.grav_userimages();
    const result = grav.exec(this.api_url, payload);
    resolve(result);
  })
}

module.exports = Grav;