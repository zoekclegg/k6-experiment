## TEST COMMANDS

- `http.get('')` is used to make a request to a url
- `sleep(x)` - this is essentially a wait. the virtual user will pause for x seconds before continuing

## TEST CONFIG

Each test will most likely have an `options` object consisting of the test config.

- `stages` defines how your load will change as your test runs.
- `target` is the number of users wanted at the end of the stage - so it commonly used in ramping-up or ramping-down steps.

```
export const options = {
  stages: [
    { duration: "10s", target: 10 },
    { duration: "20s", target: 10 },
    { duration: "10s", target: 0 },
  ],
};
```
