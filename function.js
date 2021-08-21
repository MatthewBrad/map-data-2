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

var marker = L.marker([-32.7389022,19.0641806],{icon:orangeIcon}).addTo(map);
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

var marker = L.marker([-32.7369022,19.0641806],{icon:greenIcon}).addTo(map);
marker.bindPopup("<div class='company-popup'><p class='company-name'>ALG Boerdery Bewaarskool</p><p>Active</p><p>Year established: --</p><p>Education and Research</p><div>");
// markers content END

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map);
// map 1 script END --------------------------------------------------------------------------------------------

// map 2 script START --------------------------------------------------------------------------------------------
var map2 = L.map('map2').setView([-32.5822802,19.0083159], 14);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map2);

// markers content START
var marker = L.marker([-32.5822802,19.0083159],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Santa Cedarberg Tak</p><p>Unknown</p><p>Year established: --</p><p>Health</p><div>");

var marker = L.marker([-32.5756759,19.0073612],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Apostolic Revival Centre</p><p>Unknown</p><p>Year established: --</p><p>Religious</p><div>");

var marker = L.marker([-32.5820637,19.0070105],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Vryheids Pinkster Sending</p><p>Unknown</p><p>Year established: --</p><p>Religious</p><div>");

var marker = L.marker([-32.5758607,19.0073696],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Citrusdal Cultural and Youth Organization</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.5825927,19.0060089],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Citrusdal Sentrum vir Seniors</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.5827552,19.0060344],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Citrusdal Advice Office</p><p>Unknown</p><p>Year established: --</p><p>Advocacy oranisation</p><div>");

var marker = L.marker([-32.5894216,19.0150608],{icon:greenIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>West Coast Netball Union</p><p>Active</p><p>Year established: 1970</p><p>Culture and recreation</p><div>");

var marker = L.marker([-32.59426,19.0137413],{icon:greenIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>HUG-Help us Grow</p><p>Active</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.5864126,19.0109669],{icon:greenIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Cederberg Matzikama Aids Networks</p><p>Active</p><p>Year established: 2011</p><p>Health</p><div>");

var marker = L.marker([-32.5808003,19.0055411],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Advance Ministries of R.S.A</p><p>Unknown</p><p>Year established: --</p><p>Religious</p><div>");

var marker = L.marker([-32.574579,19.009384],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Citrusdal Community Of Hope Organisation</p><p>Unknown</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.5844159,19.0085527],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Cederberg Sport Association</p><p>Unknown</p><p>Year established: --</p><p>Sports</p><div>");

var marker = L.marker([-32.5770012,19.0077903],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Pinkster Arbeiders Vir Christus</p><p>Unknown</p><p>Year established: --</p><p>Religious</p><div>");

var marker = L.marker([-32.5956503,19.0161986],{icon:redIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Upliftment Through Dance</p><p>Inactive</p><p>Year established: --</p><p>Culture and recreation</p><div>");

var marker = L.marker([-32.5943618,19.0135803],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Womelele Mother And Child Micronutrient Initiative NPC</p><p>Unknown</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.583990,19.007298],{icon:greenIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Action For Community Transformation - Citrusdal</p><p>Active</p><p>Year established: --</p><p>Social Development</p><div>");

var marker = L.marker([-32.5830102,19.0060642],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Given Ministries In SA</p><p>Unknown</p><p>Year established: --</p><p>Religious</p><div>");

var marker = L.marker([-32.5898686,19.0161961],{icon:greenIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Haasbekkies Kleuterskool, Citrusdal</p><p>Active</p><p>Year established: --</p><p>Education and Research</p><div>");

var marker = L.marker([-32.5757255,19.007218],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Pinkster Evangelic Kerk</p><p>Unknown</p><p>Year established: --</p><p>Religious</p><div>");

var marker = L.marker([-32.5805146,19.0058126],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Hands Of Hope</p><p>Unknown</p><p>Year established: --</p><p>Advocacy organisation</p><div>");

var marker = L.marker([-32.5839524,19.0075219],{icon:greenIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Reenbogies Bewaarskool</p><p>Active</p><p>Year established: 2017</p><p>Education and Research</p><div>");

var marker = L.marker([-32.5756265,19.0072616],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Citrusdal Mummies Nest</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.5819921,19.0080817],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Cederberg Youth Development and Family Support Organisation</p><p>Unknown</p><p>Year established: --</p><p>Social services</p><div>");

var marker = L.marker([-32.5725048,19.0075434],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Die Here ons Geregtigheid Pinkster Sending-SA</p><p>Unknown</p><p>Year established: --</p><p>Religious</p><div>");

var marker = L.marker([-32.5737595,19.0095956],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Citrusdal Soup Kitchen/HIV/AIDS Inisiative</p><p>Unknown</p><p>Year established: --</p><p>Health</p><div>");

var marker = L.marker([-32.5902758,19.0168061],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Sinethemba Youth Development and Family Support Organisation</p><p>Unknown</p><p>Year established: --</p><p>Social services</p><div>");

var marker = L.marker([-32.5835133,19.0057275],{icon:greenIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>POMARIO PRIVAATSKOOL NPC</p><p>Active</p><p>Year established: --</p><p>Education and Research</p><div>");

var marker = L.marker([-32.5761294,19.0107556],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>HERBOUER VAN GEBREEKTE MURE / REPAIRER OF THE BREACH</p><p>Unknown</p><p>Year established: --</p><p>Religious</p><div>");

var marker = L.marker([-32.584484,19.0080687],{icon:greenIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Die Babbel en Krabbel Bewaarskool</p><p>Active</p><p>Year established: 1991</p><p>Social Services (ECD)</p><div>");

var marker = L.marker([-32.5865858,19.0114412],{icon:greenIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Ons Huis</p><p>Active</p><p>Year established: 1972</p><p>Social Services (Elderly)</p><div>");

var marker = L.marker([-32.5769989,19.0080029],{icon:greenIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Sonstraaltjies Educare Centre</p><p>Active</p><p>Year established: --</p><p>Education and Research</p><div>");

var marker = L.marker([-32.5943512,19.013442],{icon:greenIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Citrusdal Animal Rescue</p><p>Active</p><p>Year established: --</p><p>Animal Welfare</p><div>");
// markers content END

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map2);
// map 2 script END --------------------------------------------------------------------------------------------

// map 3 script START --------------------------------------------------------------------------------------------
var map3 = L.map('map3').setView([-32.372163, 19.000569], 10);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map3);

// markers content START
var marker = L.marker([-32.575163, 19.004569],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Citrusdal Education Centre</p><p>Unknown</p><p>Year established: --</p><p>Economic, Social and Community Development</p><div>");

var marker = L.marker([-32.1841751,18.891257],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Clanwilliam Hospitaalvereniging</p><p>Unknown</p><p>Year established: --</p><p>Health</p><div>");

var marker = L.marker([-32.1794595,18.889039],{icon:greenIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>ACVV Clanwilliam</p><p>Active</p><p>Year established: 1964</p><p>Culture and Recreation</p><div>");

var marker = L.marker([-32.3388455,18.8363716],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Share Literacy Project</p><p>Unknown</p><p>Year established: --</p><p>Education and Research</p><div>");

var marker = L.marker([-32.1837301,18.8925794],{icon:greenIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Sederville Tehuis vir Bejaardes</p><p>Active</p><p>Year established: 1985</p><p>Social Services (Elderly)</p><div>");

var marker = L.marker([-32.3388455,18.8373716],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Vinknessie Creche/Kleuterskool</p><p>Unknown</p><p>Year established: --</p><p>Social Services (ECD)</p><div>");

var marker = L.marker([-32.1821959,18.8960035],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>The Lions Club of Clanwilliam</p><p>Unknown</p><p>Year established: --</p><p>Culture and Recreation</p><div>");

var marker = L.marker([-32.1823505,18.8935839],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Vereniging in Diens van die Werkende Moeder</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.1866885,18.8942015],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Enrichment Living Arts Nature and Dreams</p><p>Unknown</p><p>Year established: --</p><p>Culture and Recreation</p><div>");

var marker = L.marker([-32.1824835,18.8963396],{icon:greenIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Cape of Good Hope Agricultural Society</p><p>Active</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.1829866,18.8933966],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Com Net</p><p>Unknown</p><p>Year established: --</p><p>Culture and Recreation</p><div>");

var marker = L.marker([-32.1847457,18.8960147],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Cederberg Community Forum</p><p>Unknown</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.1746274,18.8901586],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Clan Exclusive Crew</p><p>Unknown</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.1859821,18.895043],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Ceder Justice Advice Development Services</p><p>Unknown</p><p>Year established: --</p><p>Social Development</p><div>");

var marker = L.marker([-32.188563,18.893169],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>SIYAKHATHALA COMMUNITY ORGANISATION</p><p>Unknown</p><p>Year established: --</p><p>Social Development</p><div>");

var marker = L.marker([-32.1931843,18.8977549],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>New Hope Ministries</p><p>Unknown</p><p>Year established: --</p><p>Religious</p><div>");

var marker = L.marker([-32.1845621,18.8961229],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Ulutsha Development</p><p>Unknown</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.1783633,18.8931767],{icon:greenIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>MEAT OF ORIGIN KAROO</p><p>Active</p><p>Year established: 2012</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.1791814,18.8927614],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Clanwilliam Paralegal Advice Centre</p><p>Unknown</p><p>Year established: --</p><p>Social Services (Disability)</p><div>");

var marker = L.marker([-32.1876081,18.8938285],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Clanwilliam Sport Recreation And Education Development</p><p>Unknown</p><p>Year established: --</p><p>Culture and Recreation</p><div>");

var marker = L.marker([-32.1811555,18.8904948],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>La Montanara</p><p>Unknown</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.178441,18.8930867],{icon:greenIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Clanwilliam Heritage Trust</p><p>Active</p><p>Year established: --</p><p>Culture and Recreation</p><div>");

var marker = L.marker([-32.1860861,18.8918216],{icon:greenIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Kleinbegin Bewaarskool</p><p>Active</p><p>Year established: 1982</p><p>Education and Research</p><div>");

var marker = L.marker([-32.1825282,18.8958862],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Krakadouw Trust</p><p>Unknown</p><p>Year established: --</p><p>Environment</p><div>");

var marker = L.marker([-32.1774016,18.8926656],{icon:greenIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>South African Rooibos Council</p><p>Active</p><p>Year established: --</p><p>Business and Professional associations</p><div>");

var marker = L.marker([-32.1878767,18.8938949],{icon:orangeIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Diakonale Dienste Clanwilliam</p><p>Unknown</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.196158,18.9037225],{icon:greenIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Badisa Clanwilliam</p><p>Active</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.177249,18.892187],{icon:greenIcon}).addTo(map3);
marker.bindPopup("<div class='company-popup'><p class='company-name'>The Sanitary Project</p><p>Active</p><p>Year established: 2020</p><p>Health</p><div>");
// markers content END

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map3);
// map 3 script END --------------------------------------------------------------------------------------------

// map 4 script START --------------------------------------------------------------------------------------------
var map4 = L.map('map4').setView([-32.1594081,18.6083696], 11);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map4);

// markers content START
var markerd = L.marker([-32.1594081,18.6083696],{icon:orangeIcon}).addTo(map4);
markerd.bindPopup("<div class='company-popup'><p class='company-name'>Santa Graafwater Tak</p><p>Unknown</p><p>Year established: --</p><p>Health</p><div>");

var markerd = L.marker([-32.1546583,18.6041425],{icon:orangeIcon}).addTo(map4);
markerd.bindPopup("<div class='company-popup'><p class='company-name'>Philosophy</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var markerd = L.marker([-32.1587727,18.6090807],{icon:orangeIcon}).addTo(map4);
markerd.bindPopup("<div class='company-popup'><p class='company-name'>The Sandveld Rural Youth Development Assist</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var markerd = L.marker([-32.1551056,18.6010551],{icon:orangeIcon}).addTo(map4);
markerd.bindPopup("<div class='company-popup'><p class='company-name'>Sandveld Legal Advice Centre</p><p>Unknown</p><p>Year established: --</p><p>Advocacy organizations</p><div>");

var markerd = L.marker([-32.1608107,18.6057959],{icon:orangeIcon}).addTo(map4);
markerd.bindPopup("<div class='company-popup'><p class='company-name'>Cedarberg Sport Association</p><p>Unknown</p><p>Year established: --</p><p>Sports</p><div>");

var markerd = L.marker([-32.1596015,18.6074726],{icon:orangeIcon}).addTo(map4);
markerd.bindPopup("<div class='company-popup'><p class='company-name'>Graafwater Old Age Club</p><p>Unknown</p><p>Year established: --</p><p>Social Services (Elderly)</p><div>");

var markerd = L.marker([-32.1606077,18.6058086],{icon:orangeIcon}).addTo(map4);
markerd.bindPopup("<div class='company-popup'><p class='company-name'>Kindersorg Suid Afrika Graafwater</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var markerd = L.marker([-32.159317,18.6037141],{icon:orangeIcon}).addTo(map4);
markerd.bindPopup("<div class='company-popup'><p class='company-name'>Graafwater Advies- en Ontwikkelingskomitee</p><p>Unknown</p><p>Year established: --</p><p>Social Development</p><div>");

var markerd = L.marker([-32.1612698,18.60586],{icon:greenIcon}).addTo(map4);
markerd.bindPopup("<div class='company-popup'><p class='company-name'>Stop Crime Against Children</p><p>Active</p><p>Year established: 2003</p><p>Social Services</p><div>");

var markerd = L.marker([-32.1592115,18.6051381],{icon:greenIcon}).addTo(map4);
markerd.bindPopup("<div class='company-popup'><p class='company-name'>Sandveld Local Development Agency (SALDA)</p><p>Active</p><p>Year established: 2010</p><p>Education and Research</p><div>");

var markerd = L.marker([-32.1612698,18.60586],{icon:orangeIcon}).addTo(map4);
markerd.bindPopup("<div class='company-popup'><p class='company-name'>Goldilocks Kleuterskool</p><p>Unknown</p><p>Year established: --</p><p>Social Services (ECD)</p><div>");
// markers content END

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

