# waitms

Promise-based timeouts

## Usage

- Asynchronous. Returns a Promise
- Defaults to 500ms

```
const wait = require('waitms');

await wait(); // 500ms
await wait(5000); // 5s
```

Can also use the class:

```
const Timeout = require('waitms').Timeout;

const timeout = new Timeout();

timeout.promise.then(/* do something */); // 500 ms

timeout.clear(); // clears the timeout
```
