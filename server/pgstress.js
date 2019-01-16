import http from "k6/http";
import { check, group, sleep } from "k6";
import { Rate } from "k6/metrics";

// Main function
export default function () {
  const randomNum = Math.floor(Math.random() * (10000000 - 100 + 1)) + 100;
  const response = http.get(`http://localhost:3003/api/watches/${randomNum}/details`);
}