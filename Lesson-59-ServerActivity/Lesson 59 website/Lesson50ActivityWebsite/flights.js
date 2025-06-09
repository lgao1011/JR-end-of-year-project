let data, flights;

function init() {
  $.ajaxSetup({ async: false });

  let link = "http://localhost:8300";
  let route = "/flights";
  flights = $.getJSON(link + route).responseJSON;

  let output = document.getElementById("output");
  let build = "";

  for (let i = 0; i < flights.length; i++) {
    let f = flights[i];
    if (f.flightNumber && f.fstatus && f.departureAirport && f.arrivalAirport) {
      build += `<div class="card">`;
      build += `<h4>Flight ${f.flightNumber}</h4>`;
      build += `<p><strong>Status:</strong> ${f.fstatus}</p>`;
      build += `<p><strong>Airline:</strong> ${f.name}</p>`;
      build += `<p><strong>From:</strong> ${f.departureAirport}</p>`;
      build += `<p><strong>To:</strong> ${f.arrivalAirport}</p>`;
      if (f.departureTime) build += `<p><strong>Departure:</strong> ${f.departureTime}</p>`;
      if (f.arrivalTime) build += `<p><strong>Arrival:</strong> ${f.arrivalTime}</p>`;
      build += `</div>`;
    }
  }

  output.innerHTML = build;
}
