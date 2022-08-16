const { Transform } = require('stream');

class CollectSizeStream extends Transform {
  constructor(opt) {
    super(opt);
    this.buffers = [];
    this.index = 1;
  }

  _transform(chunk, encoding, callback) {
    this.index++;

    if (this.index > 990) {
      console.log(this.index);
    }

    this.buffers.push(chunk);

    callback(null, chunk);
  }
}

module.exports = CollectSizeStream;
