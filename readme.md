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