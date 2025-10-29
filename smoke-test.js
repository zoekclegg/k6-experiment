import http from "k6/http";
import { sleep } from "k6";

//these determine the load test configuration
export const options = {
  vus: 1,
  duration: "10s",
};

export default function () {
  http.get("https://quickpizza.grafana.com/test.k6.io/");
  sleep(1);
}
