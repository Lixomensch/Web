const params = new URLSearchParams(window.location.search);
const rideID = params.get("id");
const ride = getRideRecord(rideID);

document.addEventListener("DOMContentLoaded", async () => {
  const fistPosition = ride.data[0];
  const fistLocation = await getLocationnData(
    fistPosition.latitude,
    fistPosition.longitude
  );

  const dataElement = document.createElement("div");
  dataElement, (className = "flex-fill d-flex flex-column");

  const cityDiv = document.createElement("div");
  cityDiv.innerText = `${fistLocation.city} - ${fistLocation.countryCode}`;
  cityDiv.className = "text-primary mb-2";

  const maxSpeed = document.createElement("div");
  maxSpeed.innerText = `Max speed: ${getMaxSpeed(ride.data)} Km/h`;
  maxSpeed.className = "h5 ";

  const distance = document.createElement("div");
  distance.innerText = `Distance: ${getDistance(ride.data)}`;

  const duration = document.createElement("div");
  duration.innerText = `Duration: ${getDuration(ride)}`;

  const date = document.createElement("div");
  date.innerText = `Date: ${getDate(ride)}`;
  date.className = "text-secondary mt-2";

  dataElement.appendChild(cityDiv);
  dataElement.appendChild(maxSpeed);
  dataElement.appendChild(distance);
  dataElement.appendChild(duration);
  dataElement.appendChild(date);

  document.getElementById("data").appendChild(dataElement);

  const deleteBtn = document.getElementById("delete");
  deleteBtn.addEventListener("click", () => {
    deleteRide(rideID);
    window.location.href = "./index.html";
  });

  const map = L.map("mapDetail");
  map.setView([fistLocation.latitude, fistLocation.longitude], 15);
  L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.{ext}",
    {
      minZoom: 5,
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      ext: "png",
    }
  ).addTo(map);

  const positions = ride.data.map((position) => {
    return [position.latitude, position.longitude];
  });

  const polyline = L.polyline(positions, { color: "#f00" }).addTo(map);

  map.fitBounds(polyline.getBounds());
});
