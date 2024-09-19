const rideListElement = document.getElementById("rideList");
const allRides = getAllRides();

allRides.forEach(async ([id, value]) => {
  const ride = JSON.parse(value);
  ride.id = id;

  const itemElement = document.createElement("li");
  itemElement.id = id;
  itemElement.className = "d-flex p-1 align-items-center shadow-sm mb-1 gap-3 ";
  rideListElement.appendChild(itemElement);
  itemElement.addEventListener("click", () => {
    window.location.href = `./detail.html?id=${ride.id}`;
  });
  const fistPosition = ride.data[0];
  const fistLocation = await getLocationnData(
    fistPosition.latitude,
    fistPosition.longitude
  );

  const mapElement = document.createElement("div");
  const mapID = `map${ride.id}`;
  mapElement.id = mapID;
  mapElement.style = "width:100px;height:100px";
  mapElement.classList.add("bg-secondary", "rounded-4");

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

  itemElement.appendChild(mapElement);
  itemElement.appendChild(dataElement);

  const map = L.map(mapID, {
    attributionControl: false,
    zoomControl: false,
    dragging: false,
    scrollWheelZoom: false,
  });
  map.setView([fistLocation.latitude, fistLocation.longitude], 15);
  L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.{ext}",
    {
      minZoom: 5,
      maxZoom: 20,
      ext: "png",
    }
  ).addTo(map);

  L.marker([fistLocation.latitude, fistLocation.longitude]).addTo(map);
});
