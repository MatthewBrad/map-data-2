// click function to open adn close dropdown menu when button is clicked
document.addEventListener('click', function (event) {
  var dropdownMenu = document.querySelector('#dropdownContent');
	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#dropdownButton')) return;
  // close dropdown menu
  dropdownMenu.classList.toggle("hello-dropdown");
}, false);

// click function to close dropdown menu when menu item is clicked 
document.addEventListener('click', function (event) {
  var dropdownMenu = document.querySelector('#dropdownContent');
	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.clicked-link')) return;
  // close dropdown menu
  dropdownMenu.classList.remove("hello-dropdown");
}, false);

// map marker settings
var greenIcon = L.icon ({
  iconUrl: './assets/green-pin-new.png',
  // width, height
  iconSize: [35,35],
  // left right, down up
  iconAnchor: [0,10],
  // x, y
  popupAnchor: [18,0]
})

var orangeIcon = L.icon ({
  iconUrl: './assets/orange-pin-new-new.png',
  // width, height
  iconSize: [35,35],
  // left right, down up
  iconAnchor: [0,10],
  // x, y
  popupAnchor: [18,0]
})

var redIcon = L.icon ({
  iconUrl: './assets/red-pin-new.png',
  // width, height
  iconSize: [35,35],
  // left right, down up
  iconAnchor: [0,10],
  // x, y
  popupAnchor: [18,0]
})

// map 1 script START --------------------------------------------------------------------------------------------
var map = L.map('map').setView([-32.5959859,18.99997], 10);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map);

// markers content START
var marker = L.marker([-32.4919859,18.99797],{icon:orangeIcon}).addTo(map);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Brakfontein Landgoed Bewaarskool</p><p>Unknown</p><p>Year established: --</p><p>Economic, Social and Community Development</p><div>");

var marker = L.marker([-32.7369022,19.0641806],{icon:orangeIcon}).addTo(map);
marker.bindPopup("<div class='company-popup'><p class='company-name'>A.L.G. Bewaarskool</p><p>Unknown</p><p>Year established: --</p><p>Education and Research</p><div>");

var marker = L.marker([-32.4915859,18.99797],{icon:orangeIcon}).addTo(map);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Pentecostal Ebenaeser Church</p><p>Unknown</p><p>Year established: --</p><p>Religious</p><div>");

var marker = L.marker([-32.6180728,18.9560476],{icon:greenIcon}).addTo(map);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Hebron Community Projects</p><p>Active</p><p>Year established: --</p><p>Social Development</p><div>");

var marker = L.marker([-32.5640616,18.9100848],{icon:greenIcon}).addTo(map);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Bergendal KleuterSkool</p><p>Active</p><p>Year established: --</p><p>Education and Research</p><div>");

var marker = L.marker([-32.4564932,18.9740753],{icon:greenIcon}).addTo(map);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Patrysberg Development Trust NPC</p><p>Active</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.4958592,19.0629393],{icon:orangeIcon}).addTo(map);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Hesed Youth Development Centre</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.6865017,19.0532793],{icon:orangeIcon}).addTo(map);
marker.bindPopup("<div class='company-popup'><p class='company-name'>ALG Bewaarskool Swartvlei</p><p>Unknown</p><p>Year established: --</p><p>Education and Research</p><div>");

var marker = L.marker([-32.7379022,19.0641806],{icon:orangeIcon}).addTo(map);
marker.bindPopup("<div class='company-popup'><p class='company-name'>ALG Bewaarskool Noordhoek</p><p>Unknown</p><p>Year established: --</p><p>Education and Research</p><div>");

var marker = L.marker([-32.7379022,19.0641806],{icon:greenIcon}).addTo(map);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Alg Boerdery Bewaarskool</p><p>Active</p><p>Year established: --</p><p>Education and Research</p><div>");
// markers content END

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map);
// map 1 script END --------------------------------------------------------------------------------------------

// map 2 script START --------------------------------------------------------------------------------------------
var map2 = L.map('map2').setView([-33.025137501504486, 18.98797403991048], 15);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map2);

// markers
var markerb = L.marker([-33.0251874,18.9884058],{icon:orangeIcon}).addTo(map2);
var marker2b = L.marker([-33.0297419,18.9863333],{icon:greenIcon}).addTo(map2);
var marker3b = L.marker([-33.0264366,18.9894875],{icon:orangeIcon}).addTo(map2);
var marker4b = L.marker([-33.0205448,18.9865807],{icon:greenIcon}).addTo(map2);
var marker5b = L.marker([-33.0264366,18.9896875],{icon:orangeIcon}).addTo(map2);
var marker6b = L.marker([-33.0252874,18.9884058],{icon:orangeIcon}).addTo(map2);
var marker7b = L.marker([-33.0269442,18.9887809],{icon:orangeIcon}).addTo(map2);
var marker8b = L.marker([-33.0186797,18.9875581],{icon:orangeIcon}).addTo(map2);
var marker9b = L.marker([-33.0188797,18.9875581],{icon:orangeIcon}).addTo(map2);
var marker10b = L.marker([-33.0271442,18.9887809],{icon:orangeIcon}).addTo(map2);
var marker11b = L.marker([-33.0267442,18.9887809],{icon:orangeIcon}).addTo(map2);
var marker12b = L.marker([-33.0299419,18.9863333],{icon:orangeIcon}).addTo(map2);
var marker13b = L.marker([-33.0301419,18.9863333],{icon:orangeIcon}).addTo(map2);

// marker popups
markerb.bindPopup("<div class='company-popup'><p class='company-name'>Anchor of Hope Community and Youth Development Centre</p><p>Unknown</p><p>Youth services and youth welfare</p><div>");
marker2b.bindPopup("<div class='company-popup'><p class='company-name'>Bergriver Community Care Program</p><p>Active</p><p>Year established: 2012</p><p>Prevention & Education about HIV/AIDS</p><div>");
marker3b.bindPopup("<div class='company-popup'><p class='company-name'>Bergrivier Community Foundation</p><p>Unknown</p><p>Year established: 2021</p><p>Development and Housing</p><div>");
marker4b.bindPopup("<div class='company-popup'><p class='company-name'>Bergrivier Women And Girl Empowerment</p><p>Active</p><p>Year established: 2019</p><p>Development and Housing</p><div>");
marker5b.bindPopup("<div class='company-popup'><p class='company-name'>Dolfyntjies Kleuterskool(ECD)</p><p>Unknown</p><p>Year established: 2011</p><p>Social Services (ECD)</p><div>");
marker6b.bindPopup("<div class='company-popup'><p class='company-name'>Elim Pinkster Evangelie Sending Van Suid-Afrika</p><p>Unknown</p><p>Year established: 2017</p><p>Religious</p><div>");
marker7b.bindPopup("<div class='company-popup'><p class='company-name'>Hosanna Pentecostal Ministries Of South Africa</p><p>Unknown</p><p>Year established: 2017</p><p>Religious</p><div>");
marker8b.bindPopup("<div class='company-popup'><p class='company-name'>Ithemba HIV/AIDS Empowerment Programme</p><p>Unknown</p><p>Year established: 2006</p><p>Health (HIV/AIDS)</p><div>");
marker9b.bindPopup("<div class='company-popup'><p class='company-name'>Jerigo Aftercare</p><p>Unknown</p><p>Year established: 2018</p><p>Social Services</p><div>");
marker10b.bindPopup("<div class='company-popup'><p class='company-name'>Joyous Christian - Youth Foudation</p><p>Unknown</p><p>Year established: 2015</p><p>Development and Housing</p><div>");
marker11b.bindPopup("<div class='company-popup'><p class='company-name'>Porterville Cricket Club</p><p>Unknown</p><p>Sports</p><div>");
marker12b.bindPopup("<div class='company-popup'><p class='company-name'>Porterville Mountain Bike Club</p><p>Unknown</p><p>Year established: 2015</p><p>Sports</p><div>");
marker13b.bindPopup("<div class='company-popup'><p class='company-name'>Sonstraaltjie Kleuterskool en nasorg Sentrum</p><p>Unknown</p><p>Year established: 2016</p><p>Child welfare, child services, day care</p><div>");


L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map2);
// map 2 script END --------------------------------------------------------------------------------------------

// map 3 script START --------------------------------------------------------------------------------------------
var map3 = L.map('map3').setView([-32.923844394125774, 18.76583594064202], 11);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map3);

// markers
var markerc = L.marker([-32.9036346,18.7486548],{icon:greenIcon}).addTo(map3);
var marker2c = L.marker([-32.9125373,18.7543919],{icon:greenIcon}).addTo(map3);
var marker3c = L.marker([-33.0254688,18.9878186],{icon:orangeIcon}).addTo(map3);
var marker4c = L.marker([-32.8678923,18.6927566],{icon:orangeIcon}).addTo(map3);
var marker5c = L.marker([-32.910955,18.7529561],{icon:greenIcon}).addTo(map3);
var marker6c = L.marker([-32.864538,18.698015],{icon:orangeIcon}).addTo(map3);
var marker7c = L.marker([-32.8590302,18.7025066],{icon:greenIcon}).addTo(map3);
var marker8c = L.marker([-32.9058485,18.7511353],{icon:greenIcon}).addTo(map3);
var marker9c = L.marker([-32.9088479,18.7519312],{icon:orangeIcon}).addTo(map3);
var marker10c = L.marker([-32.8607659,18.7041652],{icon:orangeIcon}).addTo(map3);
var marker11c = L.marker([-32.9078949,18.7615598],{icon:orangeIcon}).addTo(map3);
var marker12c = L.marker([-32.9067957,18.7515008],{icon:greenIcon}).addTo(map3);
var marker13c = L.marker([-32.9042401,18.7499925],{icon:orangeIcon}).addTo(map3);
var marker14c = L.marker([-32.9064043,18.753168],{icon:greenIcon}).addTo(map3);
var marker15c = L.marker([-32.9064043,18.753168],{icon:orangeIcon}).addTo(map3);
var marker16c = L.marker([-32.8681268,18.6886112],{icon:orangeIcon}).addTo(map3);
var marker17c = L.marker([-32.9045237,18.7517098],{icon:greenIcon}).addTo(map3);
var marker18c = L.marker([-33.025328,18.989766],{icon:orangeIcon}).addTo(map3);
var marker19c = L.marker([-32.917612,18.705718],{icon:greenIcon}).addTo(map3);
var marker20c = L.marker([-32.916380,18.705647],{icon:orangeIcon}).addTo(map3);
var marker21c = L.marker([-32.864542,18.700241],{icon:orangeIcon}).addTo(map3);
var marker22c = L.marker([-32.864746,18.699204],{icon:orangeIcon}).addTo(map3);
var marker23c = L.marker([-32.916380,18.705647],{icon:orangeIcon}).addTo(map3);
var marker24c = L.marker([-32.916380,18.705647],{icon:orangeIcon}).addTo(map3);
var marker25c = L.marker([-32.90323,18.75704],{icon:orangeIcon}).addTo(map3);

// marker popups
markerc.bindPopup("<div class='company-popup'><p class='company-name'>ACVV Piketburg</p><p>Active</p><p>Year established: 1919</p><p>Economic, Social and Community Development</p><div>");
marker2c.bindPopup("<div class='company-popup'><p class='company-name'>Badisa Porterville</p><p>Active</p><p>Year established: 2001</p><p>Social Services</p><div>");
marker3c.bindPopup("<div class='company-popup'><p class='company-name'>Burgernessie Senior Service Centre</p><p>Unknown</p><p>Year established: 2000</p><p>Social Services (Elderly)</p><div>");
marker4c.bindPopup("<div class='company-popup'><p class='company-name'>Christiana Service Center</p><p>Unknown</p><p>Year established: 2016</p><p>Social Development</p><div>");
marker5c.bindPopup("<div class='company-popup'><p class='company-name'>Footprints In The Sand</p><p>Active</p><p>Year established: 2017</p><p>Social Services</p><div>");
marker6c.bindPopup("<div class='company-popup'><p class='company-name'>Goedverwacht Toerisme Ontwikkelingsforum</p><p>Unknown</p><p>Year established: 2014</p><p>Historical, Literacy and Humanistic Societies</p><div>");
marker7c.bindPopup("<div class='company-popup'><p class='company-name'>Goedverwacht Traditional Forum</p><p>Active</p><p>Year established: 2019</p><p>Community and neighborhood organisations</p><div>");
marker8c.bindPopup("<div class='company-popup'><p class='company-name'>Initiative for Community Advancement</p><p>Active</p><p>Year established: 2013</p><p>Promotion of community philanthropy in rural communties</p><div>");
marker9c.bindPopup("<div class='company-popup'><p class='company-name'>Kids Studio Dagsorg(ECD)</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker10c.bindPopup("<div class='company-popup'><p class='company-name'>Kleine Klitsies Bewaarskool(ECD)</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker11c.bindPopup("<div class='company-popup'><p class='company-name'>Lofdal Christian Centre</p><p>Unknown</p><p>Year established: 2002</p><p>Religious</p><div>");
marker12c.bindPopup("<div class='company-popup'><p class='company-name'>Logos Penticostal Mininstries</p><p>Active</p><p>Year established: 2002</p><p>Religious</p><div>");
marker13c.bindPopup("<div class='company-popup'><p class='company-name'>Lolla Community Arts & Culture Organization</p><p>Unknown</p><p>Year established: 2011</p><p>Culture and Recreation</p><div>");
marker14c.bindPopup("<div class='company-popup'><p class='company-name'>Piketberg Gemeenskapsdiens</p><p>Active</p><p>Year established: 2001</p><p>Social Services</p><div>");
marker15c.bindPopup("<div class='company-popup'><p class='company-name'>Rhema Kingdom Ministries</p><p>Unknown</p><p>Religious</p><div>");
marker16c.bindPopup("<div class='company-popup'><p class='company-name'>Snoek en Patatfees Community Development Organisation</p><p>Unknown</p><p>Community and neighborhood organisation</p><div>");
marker17c.bindPopup("<div class='company-popup'><p class='company-name'>The Berg River Motivated Women of Piketberg</p><p>Active</p><p>Year established: 2004</p><p>Development and Housing</p><div>");
marker18c.bindPopup("<div class='company-popup'><p class='company-name'>Tikkel Tokkel Creche(ECD)</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker19c.bindPopup("<div class='company-popup'><p class='company-name'>Weltevrede Service Center</p><p>Active</p><p>Year established: 1992</p><p>Social services (elderly)</p><div>");
marker20c.bindPopup("<div class='company-popup'><p class='company-name'>Ebenezaar Community Outreach</p><p>Unknown</p><p>Year established: 2016</p><p>Community and neighborhood organisations</p><div>");
marker21c.bindPopup("<div class='company-popup'><p class='company-name'>Goedverwacht Firewise</p><p>Unknown</p><p>Community and neighbourhood organistions and pollution abatement and control</p><div>");
marker22c.bindPopup("<div class='company-popup'><p class='company-name'>Kinderbond</p><p>Unknown</p><p>Child welfare, child services, day care</p><div>");
marker23c.bindPopup("<div class='company-popup'><p class='company-name'>Klein Klitsies(ECD)</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker24c.bindPopup("<div class='company-popup'><p class='company-name'>Vrolike Vinkies Bewaarskool Wittewater ECD</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker25c.bindPopup("<div class='company-popup'><p class='company-name'>Bergrivier Disabled Forum</p><p>Unknown</p><p>Year established: 2018</p><p>Social Services (Disability)</p><div>");

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map3);
// map 3 script END --------------------------------------------------------------------------------------------

// map 4 script START --------------------------------------------------------------------------------------------
var map4 = L.map('map4').setView([-32.854844394125774, 18.76583594064202], 11);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map4);

// markers
var markerd = L.marker([-32.9005557,18.7578233],{icon:greenIcon}).addTo(map4);
var marker2d = L.marker([-32.9055872,18.7593299],{icon:greenIcon}).addTo(map4);
var marker3d = L.marker([-32.899422,18.7545339],{icon:orangeIcon}).addTo(map4);
var marker4d = L.marker([-32.9009481,18.756462],{icon:orangeIcon}).addTo(map4);
var marker5d = L.marker([-32.9046922,18.765944],{icon:greenIcon}).addTo(map4);
var marker6d = L.marker([-32.9068031,18.7571246],{icon:orangeIcon}).addTo(map4);
var marker7d = L.marker([-32.8968461,18.7589149],{icon:greenIcon}).addTo(map4);
var marker8d = L.marker([-32.8974787,18.7639031],{icon:greenIcon}).addTo(map4);
var marker9d = L.marker([-32.8918656,18.7651017],{icon:greenIcon}).addTo(map4);
var marker10d = L.marker([-32.9007885,18.7604753],{icon:orangeIcon}).addTo(map4);
var marker11d = L.marker([-32.9046922,18.765944],{icon:orangeIcon}).addTo(map4);
var marker12d = L.marker([-32.9047225,18.7638477],{icon:orangeIcon}).addTo(map4);
var marker13d = L.marker([-32.9055367,18.7571632],{icon:orangeIcon}).addTo(map4);
var marker14d = L.marker([-32.8954924,18.7582531],{icon:orangeIcon}).addTo(map4);
var marker15d = L.marker([-32.9017715,18.7573169],{icon:redIcon}).addTo(map4);
var marker16d = L.marker([-32.9022071,18.7604032],{icon:greenIcon}).addTo(map4);
var marker17d = L.marker([-32.7600697,18.8212208],{icon:orangeIcon}).addTo(map4);
var marker18d = L.marker([-32.8993482,18.7646163],{icon:orangeIcon}).addTo(map4);
var marker19d = L.marker([-32.9007885,18.7604753],{icon:orangeIcon}).addTo(map4);
var marker20d = L.marker([-32.9020529,18.7579826],{icon:orangeIcon}).addTo(map4);
var marker21d = L.marker([-32.896002,18.761104],{icon:greenIcon}).addTo(map4);
var marker22d = L.marker([-32.8979976,18.7575644],{icon:orangeIcon}).addTo(map4);
var marker23d = L.marker([-32.9003894,18.7567754],{icon:orangeIcon}).addTo(map4);
var marker24d = L.marker([-32.9042032,18.7537054],{icon:redIcon}).addTo(map4);
var marker25d = L.marker([-32.9100494,18.7547269],{icon:orangeIcon}).addTo(map4);
var marker26d = L.marker([-32.9067296,18.7551643],{icon:orangeIcon}).addTo(map4);
var marker27d = L.marker([-32.7869718,18.7088229],{icon:orangeIcon}).addTo(map4);
var marker28d = L.marker([-32.9058413,18.7536849],{icon:greenIcon}).addTo(map4);
var marker29d = L.marker([-32.8987143,18.760569],{icon:greenIcon}).addTo(map4);
var marker30d = L.marker([-32.802295,18.6859757],{icon:orangeIcon}).addTo(map4);

// marker popups
markerd.bindPopup("<div class='company-popup'><p class='company-name'>Babbel & Krabbel Bewaarskool(ECD)</p><p>Active</p><p>Year established: 1988</p><p>Social Services (ECD)</p><div>");
marker2d.bindPopup("<div class='company-popup'><p class='company-name'>Badisa Piketberg</p><p>Active</p><p>Year established: 2001</p><p>Social Services</p><div>");
marker3d.bindPopup("<div class='company-popup'><p class='company-name'>Bergrivier Choir</p><p>Unknown</p><p>Year established: 2018</p><p>Culture and Recreation</p><div>");
marker4d.bindPopup("<div class='company-popup'><p class='company-name'>Cornerstone Ministry</p><p>Unknown</p><p>Religious</p><div>");
marker5d.bindPopup("<div class='company-popup'><p class='company-name'>Druiwe Trossie Kleuterskool</p><p>Active</p><p>Year established: 2012</p><p>Education and Research</p><div>");
marker6d.bindPopup("<div class='company-popup'><p class='company-name'>Happy Hearts Nasorg(ECD)</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker7d.bindPopup("<div class='company-popup'><p class='company-name'>HEBRON</p><p>Active</p><p>Year established: 2013</p><p>Social Services</p><div>");
marker8d.bindPopup("<div class='company-popup'><p class='company-name'>IMMANUEL MINISTRIES</p><p>Active</p><p>Year established: 2016</p><p>Religious</p><div>");
marker9d.bindPopup("<div class='company-popup'><p class='company-name'>Kalbassie Educare</p><p>Active</p><p>Year established: 2016</p><p>Child welfare, child services, day care</p><div>");
marker10d.bindPopup("<div class='company-popup'><p class='company-name'>M's Bake And Soup Kitchen Community Outreach</p><p>Unknown</p><p>Year established: 2019</p><p>Development and Housing</p><div>");
marker11d.bindPopup("<div class='company-popup'><p class='company-name'>Majestics Rugby Sport Organisation</p><p>Unknown</p><p>Year established: 2018</p><p>Culture and Recreation</p><div>");
marker12d.bindPopup("<div class='company-popup'><p class='company-name'>Moresterretjie Versorgingsoord</p><p>Unknown</p><p>Year established: 2012</p><p>Social Services</p><div>");
marker13d.bindPopup("<div class='company-popup'><p class='company-name'>Mother Pearl Bewaarskool(ECD)</p><p>Unknown</p><p>Year established: 2011</p><p>Social Services (ECD)</p><div>");
marker14d.bindPopup("<div class='company-popup'><p class='company-name'>New Hope Community Centre</p><p>Unknown</p><p>Year established: 2009</p><p>Health</p><div>");
marker15d.bindPopup("<div class='company-popup'><p class='company-name'>Piketberg Community - Based Training Centre</p><p>Not Active</p><p>Year established: 2020</p><p>Development and Housing</p><div>");
marker16d.bindPopup("<div class='company-popup'><p class='company-name'>Piketberg Sports Development Foundation</p><p>Active</p><p>Year established: 2011</p><p>Culture and Recreation</p><div>");
marker17d.bindPopup("<div class='company-popup'><p class='company-name'>Plaaswerkers Suid Afrika</p><p>Unknown</p><p>Year established: 2011</p><p>Law, Advocacy, and Politics</p><div>");
marker18d.bindPopup("<div class='company-popup'><p class='company-name'>Praise Kidz Creche(ECD)</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker19d.bindPopup("<div class='company-popup'><p class='company-name'>Prepare The Harvest International Ministries</p><p>Unknown</p><p>Year established: 2005</p><p>Religious</p><div>");
marker20d.bindPopup("<div class='company-popup'><p class='company-name'>Sabbat Ministries</p><p>Unknown</p><p>Year established: 2018</p><p>Religious</p><div>");
marker21d.bindPopup("<div class='company-popup'><p class='company-name'>Shekinah Gospel Group</p><p>Active</p><p>Year established: 2015</p><p>Performing Arts</p><div>");
marker22d.bindPopup("<div class='company-popup'><p class='company-name'>Silver Threads Klub</p><p>unknown</p><p>Year established: 2008</p><p>Social Services (elderly)</p><div>");
marker23d.bindPopup("<div class='company-popup'><p class='company-name'>Smirna Community Projects</p><p>unknown</p><p>Year established: 2009</p><p>Religious</p><div>");
marker24d.bindPopup("<div class='company-popup'><p class='company-name'>Stars in their Eyes Foundation</p><p>Not Active</p><p>Year established: 2012</p><p>Development and Housing</p><div>");
marker25d.bindPopup("<div class='company-popup'><p class='company-name'>The Lions Club of Piketberg</p><p>Unknown</p><p>Year established: 2005</p><p>Culture and Recreation</p><div>");
marker26d.bindPopup("<div class='company-popup'><p class='company-name'>Trippe Trappe Creche (ECD)</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker27d.bindPopup("<div class='company-popup'><p class='company-name'>Tups Sport Federation Western Cape</p><p>Unknown</p><p>Year established: 2019</p><p>Sports</p><div>");
marker28d.bindPopup("<div class='company-popup'><p class='company-name'>VLV Piketberg(Vroue-Landbouvereniging van Kaapland</p><p>Active</p><p>Community and neighborhood organisation (Women)</p><div>");
marker29d.bindPopup("<div class='company-popup'><p class='company-name'>We Care for Piketberg</p><p>Active</p><p>Year established: 2011</p><p>Community and neighborhood organisations</p><div>");
marker30d.bindPopup("<div class='company-popup'><p class='company-name'>Zwaanswyk Bewaarskool(ECD)</p><p>Unknown</p><p>Social Services (ECD)</p><div>");

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map4);
// map 4 script END --------------------------------------------------------------------------------------------

// map 5 script START --------------------------------------------------------------------------------------------
var map5 = L.map('map5').setView([-32.6535359,18.8373537], 10);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map5);

// markers
var markere = L.marker([-32.6935359,18.8773537],{icon:greenIcon}).addTo(map5);
var marker2e = L.marker([-32.6893637,18.8825596],{icon:orangeIcon}).addTo(map5);
var marker3e = L.marker([-32.694289,18.879060],{icon:greenIcon}).addTo(map5);
var marker4e = L.marker([-32.686457,18.885872],{icon:orangeIcon}).addTo(map5);
var marker5e = L.marker([-32.7821355,18.709432],{icon:orangeIcon}).addTo(map5);
var marker6e = L.marker([-32.4800139,18.5307372],{icon:greenIcon}).addTo(map5);
var marker7e = L.marker([-32.6895813,18.8801127],{icon:orangeIcon}).addTo(map5);
var marker8e = L.marker([-32.6923648,18.8800699],{icon:orangeIcon}).addTo(map5);

// marker popups
markere.bindPopup("<div class='company-popup'><p class='company-name'>Eendekuil Olympic</p><p>Active</p><p>Year established: 2018</p><p>Sports</p><div>");
marker2e.bindPopup("<div class='company-popup'><p class='company-name'>Klikbekkies(ECD)</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker3e.bindPopup("<div class='company-popup'><p class='company-name'>Liggaam van Christus</p><p>Active</p><p>Year established: 1993</p><p>Religious</p><div>");
marker4e.bindPopup("<div class='company-popup'><p class='company-name'>Moria Service Centre</p><p>Unknown</p><p>Year established: 2013</p><p>Social services (elderly)</p><div>");
marker5e.bindPopup("<div class='company-popup'><p class='company-name'>Moutonsvalley Creche(ECD)</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker6e.bindPopup("<div class='company-popup'><p class='company-name'>RNFW Emergency services</p><p>Active</p><p>Year established: 2019</p><p>Emergency</p><div>");
marker7e.bindPopup("<div class='company-popup'><p class='company-name'>Reality Culture Spiritual Haven</p><p>Unknown</p><p>Year established: 2005</p><p>Development and housing</p><div>");
marker8e.bindPopup("<div class='company-popup'><p class='company-name'>West Coast Education and Tranining</p><p>Unknown</p><p>Year established: 2013</p><p>Development and housing</p><div>");

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map5);
// map 5 script END --------------------------------------------------------------------------------------------

// map 6 script START --------------------------------------------------------------------------------------------
var map6 = L.map('map6').setView([-32.410200,18.455602],9);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map6);

// markers
var markerf = L.marker([-32.707200,18.485602],{icon:orangeIcon}).addTo(map6);
var marker3f = L.marker([-32.767316, 18.171454],{icon:orangeIcon}).addTo(map6);
var marker4f = L.marker([-32.7713329,18.1662135],{icon:greenIcon}).addTo(map6);
var marker5f = L.marker([-32.7647015,18.1710038],{icon:orangeIcon}).addTo(map6);
var marker6f = L.marker([-32.7639945,18.1707686],{icon:orangeIcon}).addTo(map6);
var marker7f = L.marker([-32.764272,18.1728009],{icon:greenIcon}).addTo(map6);
var marker8f = L.marker([-32.7046007,18.4806693],{icon:orangeIcon}).addTo(map6);
var marker9f = L.marker([-32.7615518,18.17263],{icon:orangeIcon}).addTo(map6);
var marker10f = L.marker([-32.7662935,18.1693863],{icon:greenIcon}).addTo(map6);
var marker11f = L.marker([-32.6981315,18.2291893],{icon:orangeIcon}).addTo(map6);
var marker12f = L.marker([-32.09506, 18.62695],{icon:orangeIcon}).addTo(map6);

// marker popups
markerf.bindPopup("<div class='company-popup'><p class='company-name'>Aurora Womens Network</p><p>Unknown</p><p>Community and neighborhood organisation (Women)</p><div>");
marker3f.bindPopup("<div class='company-popup'><p class='company-name'>Pelikaan Bewaarskool(ECD)</p><p>Unknown</p><p>Year established: 2011</p><p>Social Services (ECD)</p><div>");
marker4f.bindPopup("<div class='company-popup'><p class='company-name'>Buyah Disability Centre</p><p>Active</p><p>Year established: 2019</p><p>Social Services</p><div>");
marker5f.bindPopup("<div class='company-popup'><p class='company-name'>Rehobot Herlewing Pinkster Kerk</p><p>Unknown</p><p>Year established: 2014</p><p>Religious</p><div>");
marker6f.bindPopup("<div class='company-popup'><p class='company-name'>Revelations</p><p>Unknown</p><p>Year established: 2017</p><p>Community and neighborhood organisations</p><div>");
marker7f.bindPopup("<div class='company-popup'><p class='company-name'>FDSA Velddrif</p><p>Active</p><p>Year established: 2007</p><p>Child welfare, child services, day care</p><div>");
marker8f.bindPopup("<div class='company-popup'><p class='company-name'>Sandveld Sonstraaltjies</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker9f.bindPopup("<div class='company-popup'><p class='company-name'>Huis Van Geloof Hoop Liefde</p><p>Unknown</p><p>Year established: 2018</p><p>Development and Housing</p><div>");
marker10f.bindPopup("<div class='company-popup'><p class='company-name'>Youth Healing & Delivered Ministries Centre</p><p>Active</p><p>Year established: 2017</p><p>Religious</p><div>");
marker11f.bindPopup("<div class='company-popup'><p class='company-name'>Slimkoppies Academy(ECD)</p><p>Unknown</p><p>Social Services (ECD)</p><div>");
marker12f.bindPopup("<div class='company-popup'><p class='company-name'>Calvin Cloete Ministries</p><p>Unknown</p><p>Year established: 2017</p><p>Religious</p><div>");

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map6);
// map 6 script END --------------------------------------------------------------------------------------------

