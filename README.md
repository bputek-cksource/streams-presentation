## Node API Stream Docs

From [Node API Stream Docs](https://nodejs.org/api/stream.html) about `stream.pipeline()`:
* A module method to pipe between streams and generators forwarding errors and properly cleaning up and provide a callback when the pipeline is complete.
* It closes all the streams when an error is raised. 
* It leaves dangling event listeners on the streams after the callback has been invoked. In the case of reuse of streams after failure, this can cause event listener leaks and swallowed errors. If the last stream is readable, dangling event listeners will be removed so that the last stream can be consumed later.

## Debugging process

1. Visit `chrome://inspect/#devices` on Google Chrome and choose `inspect` under `{filename}.js` Target.
2. Go on `Memory` tab, select `Heap snapshot` and take a snapshot by clicking the `Take Snapshot` button.
3. Visit `localhost:3000` and again take a snapshot by visiting `Profile` section.
4. Compare results between the snapshots by the drop-down menu `All objects` -> `Objects allocated between Snapshot 1 and Snapshot 2`.
## The example with `pipe` method, causing a memory leak:

```bash
node --inspect pipe.js
```
## The example with `pipeline` method, avoiding a memory leak:

```bash
node --inspect pipeline.js
```