const speed = document.querySelector("#speed");
const startBtn = document.querySelector("#start");
const stoptBtn = document.querySelector("#stop");

let watchID = null;
let curretRide = null;

startBtn.addEventListener("click", () => {
  if (watchID) return;

  function handleSucess(position) {
    addPosition(curretRide, position);
    speed.innerHTML = position.coords.speed
      ? (position.coords.speed * 3.6).toFixed(1)
      : 0;
  }
  function handleError(error) {
    console.log(error.msg);
  }
  const options = { enableHighAccuracy: true };

  curretRide = createNewRide();
  watchID = navigator.geolocation.watchPosition(
    handleSucess,
    handleError,
    options
  );
  startBtn.classList.add("d-none");
  stoptBtn.classList.remove("d-none");
});

stoptBtn.addEventListener("click", () => {
  navigator.geolocation.clearWatch(watchID);
  watchID = null;
  updateStopTime(curretRide);
  curretRide = null;

  stoptBtn.classList.add("d-none");
  startBtn.classList.remove("d-none");

  window.location.href = "./index.html";
});
