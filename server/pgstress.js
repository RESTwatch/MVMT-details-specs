import http from "k6/http";

// Main function
export default function () {
  const randomNum = Math.floor((Math.random() * 10) + 1) > 3 ? Math.floor(Math.random() * (200 - 100 + 1)) + 100 : Math.floor(Math.random() * (10000000 - 100 + 1)) + 100;

  const response = http.get(`http://localhost:3003/api/watches/${randomNum}/details`);
}