const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const currentChallenge = new Date().getFullYear();

const newChallengeTime = new Date(`December 24 2022 23:59:59`);

function updateCountdownTime() {
  const currentChallenge = new Date();
  const difference = newChallengeTime - currentChallenge;

  const d = Math.floor(difference / 1000 / 60 / 60 / 24);
  const h = Math.floor(difference / 1000 / 60 / 60) % 24;
  const m = Math.floor(difference / 1000 / 60) % 60;
  const s = Math.floor(difference / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateCountdownTime, 1000);
