let data, airlines;

function init() {
  $.ajaxSetup({ async: false });

  let link = "http://localhost:8300";
  let route = "/airlines";
  airlines = $.getJSON(link + route).responseJSON;

  for (let i = 0; i < airlines.length; i++) {
    let airline = airlines[i];
    let id = airline.airlineID;

    let airlineImg = `<img src="images/${id}.jpg" alt="${airline.name}" class="card-logo">`;

    let back = `<h2>${airline.name}</h2>`;
    back += `<p><strong>IATA:</strong> ${airline.iataCodeAirlines}</p>`;
    back += `<p><strong>ICAO:</strong> ${airline.icaoCodeAirlines}</p>`;
    back += `<p><strong>Country:</strong> ${airline.country}</p>`;

    let card = new FlipCard(airlineImg, back);
    card.render("output");
  }
}
