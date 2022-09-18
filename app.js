const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const currentChallenge = new Date().getFullYear();

const newChallengeTime = new Date(`September 25 2022 00:00:00`);

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
