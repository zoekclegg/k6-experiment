## TYPES OF TESTS

**Smoke test**

Checks the basic functionality works using 1 virtual user. These are the best presults we'd expect to see. This is technically not a performance test.

**Load test**

Checks the application functions normally under a typical, expected load. This load value should be based on actual data where possible.

Load tests shoud be run for a longer duration, starting at 0 users and scaling up to our expected load.

The three stages of a load test are:

- Ramp-up (increase users over 10% of test time)
- Full load (80% of test time)
- Ramp-down (decrease users over 10% of test time)

**Stress test**

Checks the application functions under an above-average load (e.g. on black friday)

**Spike test**

Checks the application functions under a sudden spike in users (e.g. after an email blast).

There ramp-up is incredibly quick, but the bounce rate is high - so there is typically no 'full load' stage. We then ramp-down very quickly.

If there is no available date, then four times the stress test load is a good number to test with.

**Breakpoint test**

Finds the load at which the application will break. Only one stage is needed: ramping up until the application breaks.

**Soak test**

An endurance test that checks if the application can function as the typical load for an extended period of time. This could detect issues that only occur after some time has passed - such as memory leaks.
