var map = L.map('map').setView([-8.086734, -34.904810], 13);

			L.geolet({
				position: 'topleft'
			}).addTo(map);

 // Satelite Layer
googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
   maxZoom: 20,
   subdomains:['mt0','mt1','mt2','mt3']
 });
googleSat.addTo(map);

var baseLayers = {
    "Satellite":googleSat
};

L.Control.geocoder().addTo(map);

var icone = L.icon({
    iconUrl: '/assets/img/icons/icon-map.png',
    iconSize:     [70, 70]
});

L.marker([-8.072619, -34.905131], {icon: icone}).addTo(map).bindPopup("<h1>Reservatório X</h1> <p>Braço do Rio Capibaribe</p> <button onclick=NavegacaoPorPaginas('informacoes.html')>ABRIR</button>");
