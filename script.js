let crowd = 35;
let capacity = 50;
let stopIndex = 1;
let stops = ["Majestic", "Shantinagar", "BTM", "Silk Board"];

function updateBusData() {
  document.getElementById("crowdCount").innerText = crowd;
  document.getElementById("vacantSeats").innerText = capacity - crowd;
  document.getElementById("nextStop").innerText = stops[stopIndex];
  let status = document.getElementById("status");
  if (crowd >= capacity) status.innerText = "Bus Full 🚫";
  else if (crowd > 40) status.innerText = "Almost Full ⚠️";
  else status.innerText = "Normal ✅";
}

function generateTicket() {
  let ticketId = "BUS335E-" + Math.floor(Math.random() * 10000);
  crowd++;
  updateBusData();
  document.getElementById("ticketBox").innerHTML =
    `<div class='ticket'><h3>🎫 Ticket Generated</h3><p>ID: ${ticketId}</p><p>Seat No: ${crowd}</p></div>`;
}
setInterval(() => {
  crowd = Math.max(0, Math.min(capacity, crowd + (Math.random() * 4 - 2)));
  updateBusData();
}, 5000);

updateBusData();
