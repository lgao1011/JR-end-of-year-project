let data, airports;

function init() {
  $.ajaxSetup({ async: false });

  let link = "http://localhost:8300";
  let route = "/airports";
  airports = $.getJSON(link + route).responseJSON;

  let output = document.getElementById("output");
  let build = "";

  for (let i = 0; i < airports.length; i++) {
	let a = airports[i];
	build += `<div class="airport-row">`;
	build += `<div class="airport-left">`;
    build += `<h4>${a.airportID}. ${a.name}</h4>`;
	build += `<p>${a.city}, ${a.country}</p>`;
	build += `</div>`;
	build += `<div class="airport-right">`;
	build += `<p><strong>IATA:</strong> ${a.iataCodeAirport}</p>`;
	build += `<p><strong>ICAO:</strong> ${a.icaoCodeAirport}</p>`;
	build += `<p><strong>Timezone:</strong> ${a.timezone}</p>`;
	build += `<p><strong>Coordinates:</strong> ${a.latitude} ${a.longitude}</p>`;
	build += `</div>`;
	build += `</div>`;
  }



  output.innerHTML = build;
}
