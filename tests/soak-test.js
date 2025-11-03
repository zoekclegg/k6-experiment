import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "5m", target: 1000 }, // ramp up to 1000 users
    { duration: "24h", target: 1000 }, // stay at 1000 users
    { duration: "5m", target: 0 }, // ramp down to 0 users
  ],
};

export default function () {
  http.get("https://quickpizza.grafana.com/test.k6.io/");
  sleep(1);
}
