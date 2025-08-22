import "bootstrap";
import "./style.css";

window.onload = function () {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".es", ".net"];

  function generateAllDomains() {
    let all = [];
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let d of domain) {
            all.push(p + a + n + d);
          }
        }
      }
    }
    return all;
  }

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  let randomDomains = shuffle(generateAllDomains());

  document.getElementById("content").innerHTML = randomDomains
    .map((dom, i) => `${i + 1}. ${dom}`)
    .join("<br>");

  document.getElementById("reloadBtn").addEventListener("click", function () {
    location.reload();
  });

  console.log(randomDomains);
};