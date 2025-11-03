## DEFINITIONS

- `Virtual User (vu)` = a simulated user that executes the test script
  - k6 will run multiple iterations per virtual user. For example, vu=5 and duration=10s means 5 users will make requests continuously in a loop (once the previous request is complete).
- `Latency` = time taken to make a request and get a response
- `Throughput` = number of requests a server can handle in a given time
- `Request duration` = time it took for the request to complete
- `p(x)` = x% of requests had a less than or equal latency (or other metric type)
  - Guaranteeing that p100 is below a certain value is probably unrealistic, and so Service-Level Objectives (SLOs) are often defined (e.g. 99% of responses must be within 2 seconds, 95% of responses must be within 1 second, etc..)
