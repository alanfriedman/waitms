class Timeout {
  constructor (ms = 500) {
    this.promise = new Promise(resolve => {
      this.timeout = setTimeout(resolve, ms);
    });
  }
  
  clear () {
    clearTimeout(this.timeout);
  }
}

function wait(ms = 500) {
  return (new Timeout(ms)).promise;
}

module.exports = wait;
module.exports.Timeout = Timeout;
