function createNewRide() {
  const rideID = Date.now();
  const rideRecord = {
    data: [],
    startTime: rideID,
    stopTime: null,
  };
  localStorage.setItem(rideID, JSON.stringify(rideRecord));
  return rideID;
}

function getAllRides() {
  return Object.entries(localStorage);
}

function getRideRecord(rideID) {
  return JSON.parse(localStorage.getItem(rideID));
}

function addPosition(rideID, position) {
  const rideRecord = getRideRecord(rideID);
  const newData = {
    accuracy: position.coords.accuracy,
    altitude: position.coords.altitude,
    altitudeAccuracy: position.coords.altitudeAccuracy,
    heading: position.coords.heading,
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    speed: position.coords.speed,
    timestamp: position.timestamp,
  };

  rideRecord.data.push(newData);
  localStorage.setItem(rideID, JSON.stringify(rideRecord));
}

function updateStopTime(rideID) {
  const rideRecord = getRideRecord(rideID);
  rideRecord.stopTime = Date.now();
  localStorage.setItem(rideID, JSON.stringify(rideRecord));
}

function deleteRide(rideID) {
  localStorage.removeItem(rideID);
}
