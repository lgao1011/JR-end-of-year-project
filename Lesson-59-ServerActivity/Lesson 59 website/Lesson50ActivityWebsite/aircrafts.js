let data, aircrafts;

function init() {
  $.ajaxSetup({ async: false });

  let link = "http://localhost:8300";
  let route = "/aircrafts";
  aircrafts = $.getJSON(link + route).responseJSON;

  for (let i = 0; i < aircrafts.length; i++) {
    let aircraft = aircrafts[i];
    let id = aircraft.aircraftID;

    let aircraftImg = `<img src="aircraft-images/${id}.jpg" alt="${aircraft.model}" class="card-logo">`;

    let back = `<h2>${aircraft.model}</h2>`;
    back += `<p><strong>Manufacturer:</strong> ${aircraft.manufacturer}</p>`;
    back += `<p><strong>Capacity:</strong> ${aircraft.capacity}</p>`;

    let card = new FlipCard(aircraftImg, back);
    card.render("output");
  }
}
