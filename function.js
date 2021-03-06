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

var marker = L.marker([-32.575163, 19.004569],{icon:orangeIcon}).addTo(map2);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Citrusdal Education Centre</p><p>Unknown</p><p>Year established: --</p><p>Economic, Social and Community Development</p><div>");
// markers content END

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map2);
// map 2 script END --------------------------------------------------------------------------------------------

// map 3 script START --------------------------------------------------------------------------------------------
var map3 = L.map('map3').setView([-32.252163, 18.900569], 11);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map3);

// markers content START
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
var map4 = L.map('map4').setView([-32.1580081,18.6075696], 15);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map4);

// markers content START
var marker = L.marker([-32.1594081,18.6083696],{icon:orangeIcon}).addTo(map4);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Santa Graafwater Tak</p><p>Unknown</p><p>Year established: --</p><p>Health</p><div>");

var marker = L.marker([-32.1546583,18.6041425],{icon:orangeIcon}).addTo(map4);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Philosophy</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.1587727,18.6090807],{icon:orangeIcon}).addTo(map4);
marker.bindPopup("<div class='company-popup'><p class='company-name'>The Sandveld Rural Youth Development Assist</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.1551056,18.6010551],{icon:orangeIcon}).addTo(map4);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Sandveld Legal Advice Centre</p><p>Unknown</p><p>Year established: --</p><p>Advocacy organizations</p><div>");

var marker = L.marker([-32.1608107,18.6057959],{icon:orangeIcon}).addTo(map4);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Cedarberg Sport Association</p><p>Unknown</p><p>Year established: --</p><p>Sports</p><div>");

var marker = L.marker([-32.1596015,18.6074726],{icon:orangeIcon}).addTo(map4);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Graafwater Old Age Club</p><p>Unknown</p><p>Year established: --</p><p>Social Services (Elderly)</p><div>");

var marker = L.marker([-32.1606077,18.6058086],{icon:orangeIcon}).addTo(map4);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Kindersorg Suid Afrika Graafwater</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.159317,18.6037141],{icon:orangeIcon}).addTo(map4);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Graafwater Advies- en Ontwikkelingskomitee</p><p>Unknown</p><p>Year established: --</p><p>Social Development</p><div>");

var marker = L.marker([-32.1612698,18.60586],{icon:greenIcon}).addTo(map4);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Stop Crime Against Children</p><p>Active</p><p>Year established: 2003</p><p>Social Services</p><div>");

var marker = L.marker([-32.1592115,18.6051381],{icon:greenIcon}).addTo(map4);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Sandveld Local Development Agency (SALDA)</p><p>Active</p><p>Year established: 2010</p><p>Education and Research</p><div>");

var marker = L.marker([-32.1612698,18.60586],{icon:orangeIcon}).addTo(map4);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Goldilocks Kleuterskool</p><p>Unknown</p><p>Year established: --</p><p>Social Services (ECD)</p><div>");
// markers content END

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map4);
// map 4 script END --------------------------------------------------------------------------------------------

// map 5 script START --------------------------------------------------------------------------------------------
var map5 = L.map('map5').setView([-32.215269,18.3792749], 10);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map5);

// markers content START
var marker = L.marker([-32.312269,18.3482749],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Houmoed Club for Older Persons</p><p>Unknown</p><p>Year established: --</p><p>Social Services (Elderly)</p><div>");

var marker = L.marker([-32.3098668,18.3486547],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Sidibene Council of Stakeholders</p><p>Unknown</p><p>Year established: --</p><p>Business and Professional associations</p><div>");

var marker = L.marker([-32.3106791,18.3478693],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Windsong Community Projects</p><p>Active</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.3098471,18.3487888],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Lukhanyo Landbou Vereniging</p><p>Unknown</p><p>Year established: --</p><p>Business and Professional associations</p><div>");

var marker = L.marker([-32.3098471,18.3488888],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Lukhanyo Agricultural Project</p><p>Unknown</p><p>Year established: --</p><p>Social Development</p><div>");

var marker = L.marker([-32.3122955,18.3473757],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Elandsbaai Community Development Organisation</p><p>Unknown</p><p>Year established: --</p><p>Social Development</p><div>");

var marker = L.marker([-32.3171569,18.3426215],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Wielie Walie Bewaarskool (underneath ACVV Elandsbaai)</p><p>Active</p><p>Year established: 1991</p><p>Education and Research</p><div>");

var marker = L.marker([-32.3171569,18.3428215],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>ACVV Elandsbaai</p><p>Active</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.0915561,18.3085538],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>ACVV Lambertsbaai</p><p>Active</p><p>Year established: --</p><p>Social Development</p><div>");

var marker = L.marker([-32.0990989,18.3078453],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Selectah B Sound And Entertainment</p><p>Unknown</p><p>Year established: --</p><p>Culture and Recreation</p><div>");

var marker = L.marker([-32.095489,18.305097],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Child & Family Care Society of the Sandveld</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.1000038,18.3074402],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Huis van liefde</p><p>Active</p><p>Year established: --</p><p>Social Services (Elderly)</p><div>");

var marker = L.marker([-32.097751,18.3083135],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>West Coast Development Forum</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.0955526,18.3049735],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Santa Lambertsbaai Tak</p><p>Active</p><p>Year established: --</p><p>Health</p><div>");

var marker = L.marker([-32.0957851,18.303282],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Lamberts Bay Animal Welfare</p><p>Unknown</p><p>Year established: --</p><p>Animal Welfare</p><div>");

var marker = L.marker([-32.101276,18.3091709],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Sonskynkring GPF Service Centre for Older Persons</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.1022403,18.3108588],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Cederberg Economic and Social Transformation Forum</p><p>Unknown</p><p>Year established: --</p><p>Social Development</p><div>");

var marker = L.marker([-32.095265,18.308980],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>United Faith Mission Child and Family Care Fund</p><p>Unknown</p><p>Year established: --</p><p>Social Services</p><div>");

var marker = L.marker([-32.0924601,18.3066002],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Morester Educare Centre</p><p>Active</p><p>Year established: 1991</p><p>Education and Research</p><div>");

var marker = L.marker([-32.095489,18.305397],{icon:orangeIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Lambertsbaai Nasorgsentrum</p><p>Unknown</p><p>Year established: --</p><p>Education and Research</p><div>");

var marker = L.marker([-32.0985406,18.3068327],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Strandlopertjie Educare Centre</p><p>Active</p><p>Year established: --</p><p>Social service (ECD)</p><div>");

var marker = L.marker([-32.0983406,18.3068327],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Die Verenigende Gereformeerde Kerk in Suider-Afrika Lambertsbaai</p><p>Active</p><p>Year established: --</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-32.101545,18.310284],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Maranatha Ministries Sopkombuis</p><p>Active</p><p>Year established: 2020</p><p>Religious</p><div>");

var marker = L.marker([-32.094877,18.306215],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Rural Impact</p><p>Active</p><p>Year established: 2002</p><p>Social Services</p><div>");

var marker = L.marker([-32.092492,18.309626],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Cederberg Social Development Foundation</p><p>Active</p><p>Year established: 2019</p><p>Fundraising</p><div>");

var marker = L.marker([-32.094877,18.306515],{icon:greenIcon}).addTo(map5);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Rural Impact Training Centre</p><p>Active</p><p>Year established: 2018</p><p>Social Services</p><div>");
// markers content END

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map5);
// map 5 script END --------------------------------------------------------------------------------------------

// map 6 script START --------------------------------------------------------------------------------------------
var map6 = L.map('map6').setView([-32.1188253,18.8845423],10);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=B5wlfiSlx4L4pm27f4sm', {
  attribute: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
}).addTo(map6);

// markers content START
var marker = L.marker([-32.1188253,18.8845423],{icon:greenIcon}).addTo(map6);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Lemoenland Educare</p><p>Active</p><p>Year established: --</p><p>Education and Research</p><div>");

var marker = L.marker([-32.2370642,18.9231147],{icon:orangeIcon}).addTo(map6);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Clanwilliam Aquatic Club</p><p>Unknown</p><p>Year established: --</p><p>Culture and Recreation</p><div>");

var marker = L.marker([-32.1205609,19.0594592],{icon:redIcon}).addTo(map6);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Agter-Pakhuis Ontwikkelingsvereniging</p><p>Inactive</p><p>Year established: --</p><p>Social Development</p><div>");

var marker = L.marker([-32.1123854,19.0668064],{icon:greenIcon}).addTo(map6);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Rocklands Association For Development</p><p>Active</p><p>Year established: 2017</p><p>Community and neighborhood organisations</p><div>");

var marker = L.marker([-31.9996277,18.7753769],{icon:orangeIcon}).addTo(map6);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Die Rondeberg Oord Trust</p><p>Unknown</p><p>Year established: 2017</p><p>Advocacy organizations</p><div>");

var marker = L.marker([-32.111933,19.0676876],{icon:greenIcon}).addTo(map6);
marker.bindPopup("<div class='company-popup'><p class='company-name'>The fynbos mengles(mixing)</p><p>Active</p><p>Year established: 2019</p><p>Environment</p><div>");

var marker = L.marker([-32.2769673,19.2145939],{icon:orangeIcon}).addTo(map6);
marker.bindPopup("<div class='company-popup'><p class='company-name'>Wupperthal ECD and Aftercare Centre</p><p>Unknown</p><p>Year established: --</p><p>Social service (ECD)</p><div>");
// markers content END

L.control.scale({
  metric: true,
  position: 'topright'
}).addTo(map6);
// map 6 script END --------------------------------------------------------------------------------------------

