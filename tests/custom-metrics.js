import http from "k6/http";
import { sleep } from "k6";
import { Trend } from "k6/metrics";

export const options = {
  vus: 10,
  duration: "10s",
  thresholds: {
    http_req_duration: ["p(95)<130"],
    new_response_trend: ["p(95)<150"]
  },
};

//define a custom metric called response_trend
let newsResponseTrend = new Trend("new_response_trend");

export default function () {
  let res = http.get("https://quickpizza.grafana.com/test.k6.io/")
  sleep(1);

  res = http.get('https://quickpizza.grafana.com/news.php')
  newsResponseTrend.add(res.timings.duration); //record the response time in the custom metric
  sleep(1);
}
