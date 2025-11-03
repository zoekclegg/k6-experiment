import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "10s", target: 30 }, // ramp up to 30 users
    { duration: "20s", target: 30 }, // stay at 30 users
    { duration: "10s", target: 0 }, // ramp down to 0 users
  ],
};

export default function () {
  http.get("https://quickpizza.grafana.com/test.k6.io/");
  sleep(1);
}
