import "bootstrap";
import "./style.css";


window.onload = function () {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let domain = ['.com', '.es', '.net'];

  let randomDomains = generateRandomDomains(8)

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateRandomDomains(howMany) {
    let domains = [];

    for (let i = 0; i < howMany; i++) {
      let pronounRandom = getRandomElement(pronoun);
      let adjRandom = getRandomElement(adj);
      let nounRandom = getRandomElement(noun);
      let domainRandom = getRandomElement(domain);

      domains.push(pronounRandom + adjRandom + nounRandom + domainRandom);
    }

    return domains;
  }

  document.getElementById("content").innerHTML = randomDomains;
  document.getElementById("reloadBtn").addEventListener("click", function () {
  location.reload();
});

  console.log(randomDomains);
};
