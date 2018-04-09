/*
*
* Leaflet location map for the New Zealand project
*
*/

window.addEventListener("load", function () {
    // DIV-Element mit id="map" im Dokument suchen und aus dessen data-* Attributen Koordinaten und Titel lesen
    var div = document.getElementById("map");
    var lat = div.getAttribute("data-lat");
    var lng = div.getAttribute("data-lng");
    var tit = div.getAttribute("data-title");

    // Leaflet Karte im gefundenen DIV erstellen und auf die Koordinate zoomen
    var map = L.map(div).setView([lat, lng], 13);

    // OpenStreetMap WMTS Hintergrundkarte mit Copyright-Hinweis hinzufügen
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Positionsmarker mit Titel als Popup hinzufügen und Popup öffnen
    L.marker([lat, lng]).addTo(map).bindPopup(tit).openPopup();
});