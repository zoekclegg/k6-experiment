import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10,
  duration: "10s",
  thresholds: {
    http_req_duration: ["p(95)<120"], // 95% of requests must complete below 120ms
    http_req_failed: ["rate<0.01"], // no failed requests
  },
};

export default function () {
  const res = http.get("https://quickpizza.grafana.com/test.k6.io/");

  check(res, {
    "status is 200": (r) => r.status === 200,
    "page contents is displayed": (r) => r.body.includes("QuickPizza Legacy"),
  });

  sleep(1);
}
