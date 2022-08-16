const { Readable } = require('stream');

class Counter extends Readable {
  constructor(opt) {
    super(opt);
    this._max = 4000;
    this._index = 1;
  }

  _read() {
    const i = this._index++;

    if (i === 1001) {
      this.destroy();

      // Bonus: Errors occurring during processing of the readable._read() must be propagated through the readable.destroy(err) method.
      // Throwing an Error from within readable._read() or manually emitting an 'error' event results in undefined behavior.

      // this.destroy( new Error( 'ess' ) );
      // throw new Error( 'ess' );
    }

    if (i > this._max) {
      this.push(null);
    } else {
      const buf = Buffer.alloc(10000); // 10000 Bytes = 0.01 MB

      this.push(buf);
    }
  }
}

module.exports = Counter;
