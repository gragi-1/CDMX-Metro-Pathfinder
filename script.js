// ==========================================
// DATOS DE ESTACIONES METRO CDMX - SOLO LAS DEL RECUADRO FUCSIA DEL PDF
// ==========================================
const estaciones = [
    // LÍNEA 1 (Granate - #C23C7F) - SOLO: Observatorio → Balderas
    { "long": -99.200449, "lat": 19.398551, "id": 1, "estacion": "OBSERVATORIO", "linea": "1", "accesible": true },
    { "long": -99.187139, "lat": 19.403222, "id": 2, "estacion": "TACUBAYA", "linea": "1", "accesible": false },
    { "long": -99.182139, "lat": 19.412953, "id": 3, "estacion": "JUANACATLÁN", "linea": "1", "accesible": true },
    { "long": -99.176250, "lat": 19.420639, "id": 4, "estacion": "CHAPULTEPEC", "linea": "1", "accesible": true },
    { "long": -99.170694, "lat": 19.421889, "id": 5, "estacion": "SEVILLA", "linea": "1", "accesible": true },
    { "long": -99.162861, "lat": 19.423500, "id": 6, "estacion": "INSURGENTES", "linea": "1", "accesible": true },
    { "long": -99.154667, "lat": 19.425917, "id": 7, "estacion": "CUAUHTÉMOC", "linea": "1", "accesible": true },
    { "long": -99.149111, "lat": 19.427278, "id": 8, "estacion": "BALDERAS", "linea": "1", "accesible": true },
    
    // LÍNEA 3 (Verde Claro - #8D8926) - SOLO: Universidad → Juárez
    { "long": -99.174028, "lat": 19.324472, "id": 30, "estacion": "UNIVERSIDAD", "linea": "3", "accesible": true },
    { "long": -99.176806, "lat": 19.335833, "id": 31, "estacion": "COPILCO", "linea": "3", "accesible": true },
    { "long": -99.181111, "lat": 19.345833, "id": 32, "estacion": "MIGUEL ÁNGEL DE QUEVEDO", "linea": "3", "accesible": true },
    { "long": -99.176111, "lat": 19.353889, "id": 33, "estacion": "VIVEROS", "linea": "3", "accesible": true },
    { "long": -99.170556, "lat": 19.361944, "id": 34, "estacion": "COYOACÁN", "linea": "3", "accesible": true },
    { "long": -99.165278, "lat": 19.370833, "id": 35, "estacion": "ZAPATA", "linea": "3", "accesible": true },
    { "long": -99.159167, "lat": 19.379444, "id": 36, "estacion": "DIVISIÓN DEL NORTE", "linea": "3", "accesible": true },
    { "long": -99.155278, "lat": 19.385278, "id": 37, "estacion": "EUGENIA", "linea": "3", "accesible": true },
    { "long": -99.156111, "lat": 19.395556, "id": 38, "estacion": "ETIOPÍA", "linea": "3", "accesible": true },
    { "long": -99.154722, "lat": 19.406944, "id": 39, "estacion": "CENTRO MÉDICO", "linea": "3", "accesible": true },
    { "long": -99.153611, "lat": 19.413889, "id": 40, "estacion": "HOSPITAL GENERAL", "linea": "3", "accesible": true },
    { "long": -99.150833, "lat": 19.420556, "id": 41, "estacion": "NIÑOS HÉROES", "linea": "3", "accesible": true },
    { "long": -99.149111, "lat": 19.427278, "id": 42, "estacion": "BALDERAS", "linea": "3", "accesible": true },
    { "long": -99.147500, "lat": 19.433611, "id": 43, "estacion": "JUÁREZ", "linea": "3", "accesible": true },
    
    // LÍNEA 7 (Naranja - #E58126) - SOLO: Barranca del Muerto → Polanco
    { "long": -99.189722, "lat": 19.361389, "id": 70, "estacion": "BARRANCA DEL MUERTO", "linea": "7", "accesible": false },
    { "long": -99.187500, "lat": 19.375833, "id": 71, "estacion": "MIXCOAC", "linea": "7", "accesible": true },
    { "long": -99.186389, "lat": 19.383333, "id": 72, "estacion": "SAN ANTONIO", "linea": "7", "accesible": false },
    { "long": -99.186111, "lat": 19.391667, "id": 73, "estacion": "SAN PEDRO DE LOS PINOS", "linea": "7", "accesible": true },
    { "long": -99.187139, "lat": 19.403222, "id": 74, "estacion": "TACUBAYA", "linea": "7", "accesible": false },
    { "long": -99.191667, "lat": 19.411944, "id": 75, "estacion": "CONSTITUYENTES", "linea": "7", "accesible": false },
    { "long": -99.192222, "lat": 19.425278, "id": 76, "estacion": "AUDITORIO", "linea": "7", "accesible": true },
    { "long": -99.191389, "lat": 19.433889, "id": 77, "estacion": "POLANCO", "linea": "7", "accesible": false },
    
    // LÍNEA 9 (Marrón - #774234) - SOLO: Tacubaya → Lázaro Cárdenas
    { "long": -99.187139, "lat": 19.403222, "id": 90, "estacion": "TACUBAYA", "linea": "9", "accesible": false },
    { "long": -99.179444, "lat": 19.405556, "id": 91, "estacion": "PATRIOTISMO", "linea": "9", "accesible": true },
    { "long": -99.168333, "lat": 19.406111, "id": 92, "estacion": "CHILPANCINGO", "linea": "9", "accesible": true },
    { "long": -99.154722, "lat": 19.406944, "id": 93, "estacion": "CENTRO MÉDICO", "linea": "9", "accesible": true },
    { "long": -99.143611, "lat": 19.407222, "id": 94, "estacion": "LÁZARO CÁRDENAS", "linea": "9", "accesible": true },
    
    // LÍNEA 12 (Verde Oscuro - #A88C39) - SOLO: Mixcoac → Eje Central
    { "long": -99.187500, "lat": 19.375833, "id": 120, "estacion": "MIXCOAC", "linea": "12", "accesible": true },
    { "long": -99.178333, "lat": 19.373333, "id": 121, "estacion": "INSURGENTES SUR", "linea": "12", "accesible": true },
    { "long": -99.170278, "lat": 19.371667, "id": 122, "estacion": "HOSPITAL 20 DE NOVIEMBRE", "linea": "12", "accesible": true },
    { "long": -99.165278, "lat": 19.370833, "id": 123, "estacion": "ZAPATA", "linea": "12", "accesible": true },
    { "long": -99.158333, "lat": 19.368333, "id": 124, "estacion": "PARQUE DE LOS VENADOS", "linea": "12", "accesible": true },
    { "long": -99.151667, "lat": 19.365000, "id": 125, "estacion": "EJE CENTRAL", "linea": "12", "accesible": true },
];

// Colores de líneas
const lineColors = {
    "1": "#C23C7F",
    "3": "#8D8926",
    "7": "#E58126",
    "9": "#774234",
    "12": "#A88C39"
};

// Velocidades (km/h)
const vel = {
    "1": 25, "3": 24, "7": 26, "9": 25, "12": 25, "T": 5
};

const max_speed = Math.max(...Object.values(vel));

// ==========================================
// LANGUAGE LOGIC (Moved to top for availability)
// ==========================================
const langToggleBtn = document.getElementById('langToggleBtn');
const langText = document.getElementById('langText');
let currentLang = 'es';
let lastPath = null;

const translations = {
    es: {
        viewRoute: "Ruta Detallada",
        info: "Información",
        favs: "Viajes Favoritos",
        searchTitle: "Buscar Ruta",
        startStation: "Estación de Origen",
        endStation: "Estación de Destino",
        accessible: "Ruta Accesible (Sin escaleras)",
        searchBtn: "Buscar Ruta Óptima",
        loading: "Calculando ruta óptima...",
        placeholderStart: "Ej: Observatorio",
        placeholderEnd: "Ej: Universidad",
        themeToggle: "Cambiar tema",
        langToggle: "Cambiar idioma",
        swapBtn: "Intercambiar origen y destino",
        
        // Dynamic
        routeSummary: "Resumen del Trayecto",
        duration: "Duración",
        distance: "Distancia",
        transfers: "Transbordos",
        line: "Línea",
        lines: "Líneas", // Added
        from: "De",
        to: "A",
        transfer: "Transbordo",
        changeTo: "Cambia a la Línea",
        estimatedTime: "Tiempo estimado",
        saveFav: "Guardar en Favoritos",
        savedFav: "Viaje guardado en favoritos",
        delete: "Eliminar",
        emptyFavs: "No tienes viajes guardados aún.",
        savedOn: "Guardado el",
        favsTitle: "Mis Viajes Favoritos",
        routeDetailTitle: "Detalle de la Ruta",
        
        // Info Modal
        infoTitle: "Sobre MetroBuddy CDMX",
        infoWelcome: "Bienvenido a <strong>MetroBuddy CDMX</strong>, tu asistente inteligente para navegar el Sistema de Transporte Colectivo Metro.",
        infoHowTitle: "¿Cómo funciona?",
        infoHowDesc: "Nuestra aplicación utiliza el algoritmo <strong>A* (A-Star)</strong>, uno de los algoritmos de búsqueda de caminos más eficientes en ciencias de la computación. Este algoritmo no solo considera la distancia entre estaciones, sino que también evalúa:",
        infoFactor1: "La velocidad promedio de cada línea.",
        infoFactor2: "El tiempo estimado de transbordo.",
        infoFactor3: "La distancia geográfica real (Haversine).",
        infoFeaturesTitle: "Características",
        infoFeature1: "<strong>Mapa Interactivo:</strong> Visualiza tu ruta en el mapa de la CDMX.",
        infoFeature2: "<strong>Rutas Óptimas:</strong> Encuentra el camino más rápido.",
        infoFeature3: "<strong>Favoritos:</strong> Guarda tus rutas frecuentes para acceso rápido.",
        credits: "Desarrollado con para la CDMX.",
        
        // Toast
        toastSuccess: "Ruta encontrada exitosamente",
        noRoute: "No se encontró ruta",
        noAccessibleRoute: "No se encontró ruta accesible",
        atStation: "en",
        invalidStart: "Estación de inicio inválida",
        invalidEnd: "Estación de destino inválida",
        sameStation: "Ya estás en tu destino",
        enterPath: "Introduzca el trayecto",
        enterStart: "Introduzca estación de inicio",
        enterEnd: "Introduzca estación de llegada",
        invalidBoth: "Estaciones de inicio y destino inválidas"
    }, 
    
    // INGLES
    en: {
        viewRoute: "Route Details",
        info: "Information",
        favs: "Favorite Trips",
        searchTitle: "Find Route",
        startStation: "Start Station",
        endStation: "End Station",
        accessible: "Accessible Route (No stairs)",
        searchBtn: "Find Optimal Route",
        loading: "Calculating optimal route...",
        placeholderStart: "Ex: Observatorio",
        placeholderEnd: "Ex: Universidad",
        themeToggle: "Toggle theme",
        langToggle: "Change language",
        swapBtn: "Swap origin and destination",
        
        // Dynamic
        routeSummary: "Route Summary",
        duration: "Duration",
        distance: "Distance",
        transfers: "Transfers",
        line: "Line",
        lines: "Lines", // Added
        from: "From",
        to: "To",
        transfer: "Transfer",
        changeTo: "Change to Line",
        estimatedTime: "Estimated time",
        saveFav: "Save to Favorites",
        savedFav: "Trip saved to favorites ",
        delete: "Delete",
        emptyFavs: "You have no saved trips yet.",
        savedOn: "Saved on",
        favsTitle: "My Favorite Trips",
        routeDetailTitle: "Route Details",
        
        // Info Modal
        infoTitle: "About MetroBuddy CDMX",
        infoWelcome: "Welcome to <strong>MetroBuddy CDMX</strong>, your intelligent assistant for navigating the Metro Collective Transport System.",
        infoHowTitle: "How does it work?",
        infoHowDesc: "Our application uses the <strong>A* (A-Star)</strong> algorithm, one of the most efficient pathfinding algorithms in computer science. This algorithm not only considers the distance between stations but also evaluates:",
        infoFactor1: "Average speed of each line.",
        infoFactor2: "Estimated transfer time.",
        infoFactor3: "Real geographical distance (Haversine).",
        infoFeaturesTitle: "Features",
        infoFeature1: " <strong>Interactive Map:</strong> Visualize your route on the CDMX map.",
        infoFeature2: " <strong>Optimal Routes:</strong> Find the fastest path.",
        infoFeature3: " <strong>Favorites:</strong> Save your frequent routes for quick access.",
        credits: "Dev",
        
        // Toast
        toastSuccess: "Route found successfully",
        noRoute: "No route found",
        noAccessibleRoute: "No accessible route found",
        atStation: "at",
        invalidStart: "Invalid start station",
        invalidEnd: "Invalid end station",
        sameStation: "You are already at your destination",
        enterPath: "Please enter the route",
        enterStart: "Please enter start station",
        enterEnd: "Please enter destination station",
        invalidBoth: "Invalid start and destination stations"
    }
};

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        if (langText) langText.innerText = currentLang === 'es' ? 'EN' : 'ES';
        updateLanguage();
    });
}

function updateLanguage() {
    const t = translations[currentLang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            // Check if the translation contains HTML tags
            if (t[key].includes('<')) {
                element.innerHTML = t[key];
            } else {
                element.innerText = t[key];
            }
        }
    });
    
    // Update attributes that are not innerText
    document.getElementById('start').placeholder = t.placeholderStart;
    document.getElementById('end').placeholder = t.placeholderEnd;
    document.getElementById('themeToggleBtn').title = t.themeToggle;
    document.getElementById('langToggleBtn').title = t.langToggle;
    document.getElementById('swapBtn').title = t.swapBtn;

    // Re-render dynamic content if it exists
    if (lastPath) {
        showRoute(lastPath);
    }
    
    // Re-render favorites list if modal is open or just to be safe
    loadFavorites();
}

// Helper to get text in current lang
function getText(key) {
    return translations[currentLang][key];
}

// ==========================================
// CLASE PRIORITY QUEUE (Implementación simple para evitar dependencias externas)
// ==========================================
class MinPriorityQueue {
    constructor() {
        this.elements = [];
    }
    
    queue(element) {
        this.elements.push(element);
        this.elements.sort((a, b) => a.w - b.w);
    }
    
    dequeue() {
        return this.elements.shift();
    }
    
    get length() {
        return this.elements.length;
    }
}

// ==========================================
// FUNCIONES DE DISTANCIA Y HEURÍSTICA
// ==========================================
var rad = function(x) {
    return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
    var R = 6378137;
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.long - p1.long);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    
    // Clamp value to avoid NaN
    if (a < 0) a = 0;
    if (a > 1) a = 1;
        
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

function heuristic(currentNode, endNode) {
    var d = getDistance(currentNode, endNode);
    const seconds = ((d) / (max_speed * (1000 / 3600)));
    return (seconds / 60);
}

// Tiempos de transbordo específicos (en segundos)
const transferTimes = {
    "LA RAZA": 600, // 10 min - Túnel de la ciencia
    "PANTITLÁN": 480, // 8 min
    "ATLALILCO": 480, // 8 min
    "INSTITUTO DEL PETRÓLEO": 360, // 6 min
    "EL ROSARIO": 360, // 6 min
    "GARIBALDI": 360, // 6 min
    "TACUBAYA": 300, // 5 min
    "HIDALGO": 300, // 5 min
    "BELLAS ARTES": 300, // 5 min
    "PINO SUÁREZ": 300, // 5 min
    "SALTO DEL AGUA": 300, // 5 min
    "CHABACANO": 300, // 5 min
    "ERMITA": 300, // 5 min
    "DEPORTIVO 18 DE MARZO": 300, // 5 min
    "CONSULADO": 300, // 5 min
    "MARTIN CARRERA": 300, // 5 min
    "TACUBA": 300, // 5 min
    "GUERRERO": 300, // 5 min
    "OCEANÍA": 300, // 5 min
    "BALDERAS": 300, // 5 min
    "SANTA ANITA": 300, // 5 min
    "CANDELARIA": 240, // 4 min
    "JAMAICA": 240, // 4 min
    "MORELOS": 240, // 4 min
    "SAN LÁZARO": 240, // 4 min
    "CENTRO MÉDICO": 240, // 4 min
    "ZAPATA": 240, // 4 min
    "MIXCOAC": 240, // 4 min
};

function getMinutes(x, y) {
    var d = getDistance(x, y);
    var seconds = 0;
    if (x.linea == y.linea) {
        seconds = ((d) / (vel[x.linea] * (1000 / 3600)));
    } else {
        // Penalización por transbordo: Específica o Default (3 min)
        const transferTime = transferTimes[x.estacion] || 180; 
        seconds = transferTime + ((d) / (vel["T"] * (1000 / 3600)));
    }
    return seconds / 60;
}

// Mapa para búsqueda rápida de estaciones por ID
const idToStation = new Map();
estaciones.forEach(e => idToStation.set(e.id, e));

// ==========================================
// ALGORITMO A*
// ==========================================
function Astar(startPoint, endPoint, useAccessibility = false) {
    if (startPoint === endPoint) return [startPoint];

    const pq = new MinPriorityQueue();
    const visited = new Set();
    const minutes = new Map();
    const parents = new Map();
    
    minutes.set(startPoint, 0);
    parents.set(startPoint, null);
    
    const startStation = idToStation.get(startPoint);
    const endStation = idToStation.get(endPoint);
    
    pq.queue({ node: startPoint, w: 0 + heuristic(startStation, endStation) });
    
    let iterations = 0;
    const MAX_ITERATIONS = 5000; // Safety break

    while (pq.length != 0) {
        iterations++;
        if (iterations > MAX_ITERATIONS) {
            console.error("A* Max iterations reached");
            break;
        }

        const { node: currentNode, w: currentW } = pq.dequeue();
        
        if (currentNode === endPoint) {
            break;
        }
        
        if (visited.has(currentNode)) continue;
        visited.add(currentNode);
        
        const adjacentList = graph.get(currentNode);
        if (!adjacentList) continue;
        
        const origin = idToStation.get(currentNode);

        adjacentList.forEach((dest) => {
            const v = dest.id;
            const u = currentNode;
            
            // Accessibility Check
            let penalty = 0;
            if (useAccessibility && !dest.accesible) {
                // If destination is not accessible, add huge penalty
                // Unless it's the start or end station (we assume user can enter/exit there or has help)
                // But user said "que no tenga escaleras", so we should avoid them.
                // If start/end are not accessible, we can't avoid them, but we can avoid intermediate ones.
                if (v !== startPoint && v !== endPoint) {
                    penalty = 500; // 500 minutes penalty
                }
            }

            const weight = getMinutes(origin, dest) + penalty;
            
            if (!minutes.has(v) || minutes.get(u) + weight < minutes.get(v)) {
                minutes.set(v, minutes.get(u) + weight);
                pq.queue({ node: v, w: minutes.get(v) + heuristic(dest, endStation) });
                parents.set(v, u);
            }
        });
    }
    
    // Reconstruir camino
    if (!parents.has(endPoint)) return []; // No se encontró camino

    let path = [];
    let currentNode = endPoint;
    while (currentNode !== null && currentNode !== undefined) {
        path.unshift(currentNode);
        currentNode = parents.get(currentNode);
    }
    
    return path;
}

// ==========================================
// CONSTRUIR GRAFO
// ==========================================
const graph = new Map();

estaciones.forEach(estacion => {
    let adyacentes = estaciones.filter(station => 
        (estacion.linea == station.linea) && 
        (station.id == estacion.id - 1 || station.id == estacion.id + 1)
    );
    
    // TRANSBORDOS
    if (estacion.estacion == "MIXCOAC") {
        adyacentes.push(...estaciones.filter(e => 
            e.estacion == "MIXCOAC" && e.id != estacion.id
        ));
    }
    if (estacion.estacion == "ZAPATA") {
        adyacentes.push(...estaciones.filter(e => 
            e.estacion == "ZAPATA" && e.id != estacion.id
        ));
    }
    if (estacion.estacion == "TACUBAYA") {
        adyacentes.push(...estaciones.filter(e => 
            e.estacion == "TACUBAYA" && e.id != estacion.id
        ));
    }
    if (estacion.estacion == "CENTRO MÉDICO") {
        adyacentes.push(...estaciones.filter(e => 
            e.estacion == "CENTRO MÉDICO" && e.id != estacion.id
        ));
    }
    if (estacion.estacion == "BALDERAS") {
        adyacentes.push(...estaciones.filter(e => 
            e.estacion == "BALDERAS" && e.id != estacion.id
        ));
    }
    
    graph.set(estacion.id, adyacentes);
});

// ==========================================
// INICIALIZAR MAPA
// ==========================================
const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
});

const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

const map = L.map('map', {
    center: [19.3910, -99.1400],
    zoom: 12,
    layers: [osmLayer]
});

const baseMaps = {
    "Mapa": osmLayer,
    "Satélite": satelliteLayer
};

L.control.layers(baseMaps).addTo(map);

// ==========================================
// DIBUJAR LÍNEAS DE METRO
// ==========================================
Object.keys(lineColors).forEach(linea => {
    const stationsInLine = estaciones.filter(e => e.linea == linea).sort((a, b) => a.id - b.id);
    const coords = stationsInLine.map(s => [s.lat, s.long]);
    
    L.polyline(coords, {
        color: lineColors[linea],
        weight: 6,
        opacity: 0.9
    }).addTo(map);
});

// ==========================================
// MARCADORES DE ESTACIONES
// ==========================================
// Identificar estaciones de transbordo y sus líneas
const stationLines = {};
estaciones.forEach(e => {
    if (!stationLines[e.estacion]) {
        stationLines[e.estacion] = new Set();
    }
    stationLines[e.estacion].add(e.linea);
});

estaciones.forEach(estacion => {
    const lines = Array.from(stationLines[estacion.estacion]);
    const isTransfer = lines.length > 1;
    
    // Configuración de estilo
    // Transbordo: Fondo blanco, borde negro
    // Normal: Fondo color línea, borde color línea (para que se vea entero)
    const backgroundColor = isTransfer ? '#FFFFFF' : lineColors[estacion.linea];
    const borderColor = isTransfer ? '#000000' : lineColors[estacion.linea];
    
    // Popup: Si es transbordo, mostrar todas las líneas
    const getPopupContent = () => {
        return isTransfer 
            ? `<b>${estacion.estacion}</b><br>${getText('transfer')}: ${getText('lines')} ${lines.join(', ')}`
            : `<b>${estacion.estacion}</b><br>${getText('line')} ${estacion.linea}`;
    };

    // Tamaño: Un poco más grande si es transbordo
    const size = isTransfer ? 12 : 10;
    const zIndex = isTransfer ? 1000 : 0;

    const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: ${backgroundColor}; width: ${size}px; height: ${size}px; border-radius: 50%; border: 2px solid ${borderColor};"></div>`,
        iconSize: [size, size],
        iconAnchor: [size/2, size/2]
    });
    
    L.marker([estacion.lat, estacion.long], { icon: customIcon, zIndexOffset: zIndex })
        .bindPopup(getPopupContent)
        .addTo(map);
});

// ==========================================
// BOTÓN DE INTERCAMBIO
// ==========================================
document.getElementById("swapBtn").addEventListener("click", () => {
    const startInput = document.getElementById("start");
    const endInput = document.getElementById("end");
    
    const temp = startInput.value;
    startInput.value = endInput.value;
    endInput.value = temp;
});

// ==========================================
// AUTOCOMPLETADO
// ==========================================
function setupSuggestions() {
    const startInput = document.getElementById('start');
    const endInput = document.getElementById('end');
    const suggestionsStart = document.getElementById('suggestions-start');
    const suggestionsEnd = document.getElementById('suggestions-end');
    
    function getAllStations() {
        const unique = [];
        const seen = new Set();
        estaciones.forEach(station => {
            if (!seen.has(station.estacion)) {
                seen.add(station.estacion);
                unique.push(station);
            }
        });
        return unique;
    }
    
    function filterStations(input) {
        const value = input.toLowerCase();
        if (!value) return getAllStations();
        
        const filtered = estaciones.filter(e => e.estacion.toLowerCase().includes(value));
        const unique = [];
        const seen = new Set();
        filtered.forEach(station => {
            if (!seen.has(station.estacion)) {
                seen.add(station.estacion);
                unique.push(station);
            }
        });
        return unique;
    }
    
    function showSuggestions(input, suggestionsDiv) {
        const filtered = filterStations(input.value);
        suggestionsDiv.innerHTML = '';
        suggestionsDiv.selectedIndex = -1; // Reset selection
        
        if (filtered.length > 0) {
            filtered.forEach((station, index) => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.setAttribute('data-index', index);
                div.innerHTML = `<strong>${station.estacion}</strong> <span style="color: #FE5000; font-size: 0.85rem;">(${getText('line')} ${station.linea})</span>`;
                div.onclick = () => {
                    input.value = station.estacion;
                    suggestionsDiv.classList.remove('active');
                };
                suggestionsDiv.appendChild(div);
            });
            suggestionsDiv.classList.add('active');
        } else {
            suggestionsDiv.classList.remove('active');
        }
    }

    function handleKeyboard(e, input, suggestionsDiv) {
        const items = suggestionsDiv.querySelectorAll('.suggestion-item');
        if (!items.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            suggestionsDiv.selectedIndex = (suggestionsDiv.selectedIndex + 1) % items.length;
            updateSelection(items, suggestionsDiv.selectedIndex);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            suggestionsDiv.selectedIndex = (suggestionsDiv.selectedIndex - 1 + items.length) % items.length;
            updateSelection(items, suggestionsDiv.selectedIndex);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (suggestionsDiv.selectedIndex > -1) {
                items[suggestionsDiv.selectedIndex].click();
            }
        }
    }

    function updateSelection(items, index) {
        items.forEach(item => item.classList.remove('selected'));
        if (index > -1 && items[index]) {
            items[index].classList.add('selected');
            items[index].scrollIntoView({ block: 'nearest' });
        }
    }
    
    startInput.addEventListener('focus', () => {
        showSuggestions(startInput, suggestionsStart);
    });
    
    endInput.addEventListener('focus', () => {
        showSuggestions(endInput, suggestionsEnd);
    });
    
    startInput.addEventListener('input', () => showSuggestions(startInput, suggestionsStart));
    endInput.addEventListener('input', () => showSuggestions(endInput, suggestionsEnd));
    
    startInput.addEventListener('keydown', (e) => handleKeyboard(e, startInput, suggestionsStart));
    endInput.addEventListener('keydown', (e) => handleKeyboard(e, endInput, suggestionsEnd));

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.input-wrapper')) {
            suggestionsStart.classList.remove('active');
            suggestionsEnd.classList.remove('active');
        }
    });
}

setupSuggestions();

// ==========================================
// MOSTRAR RUTA
// ==========================================
function showRoute(path) {
    lastPath = path; // Store for language toggle re-render
    const routeDetails = document.getElementById('route-details');
    routeDetails.innerHTML = '';
    const viewRouteBtn = document.getElementById('viewRouteBtn');
    const viewRouteBtn2 = document.getElementById('viewRouteBtn2');
    
    if (!path || path.length === 0) {
        routeDetails.innerHTML = `<p style="color: #FE5000;">${getText('noRoute')}</p>`;
        viewRouteBtn.classList.add('hidden');
        viewRouteBtn2.classList.add('hidden');
        return;
    }
    
    let segments = [];
    let currentLine = null;
    let currentSegment = [];
    
    path.forEach((stationId) => {
        const station = estaciones.find(e => e.id === stationId);
        
        if (currentLine === null) {
            currentLine = station.linea;
            currentSegment.push(station);
        } else if (station.linea === currentLine) {
            currentSegment.push(station);
        } else {
            segments.push({ line: currentLine, stations: [...currentSegment] });
            currentLine = station.linea;
            currentSegment = [station];
        }
    });
    
    if (currentSegment.length > 0) {
        segments.push({ line: currentLine, stations: currentSegment });
    }
    
    let totalMinutes = 0;
    let totalDistance = 0;
    
    segments.forEach((segment) => {
        for (let i = 0; i < segment.stations.length - 1; i++) {
            const dist = getDistance(segment.stations[i], segment.stations[i + 1]);
            const time = getMinutes(segment.stations[i], segment.stations[i + 1]);
            totalDistance += dist / 1000;
            totalMinutes += time;
        }
    });
    
    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'route-summary';
    summaryDiv.innerHTML = `
        <h3> ${getText('routeSummary')}</h3>
        <div class="stats">
            <div class="stat-box">
                <div class="stat-label"> ${getText('duration')}</div>
                <div class="stat-value">${Math.round(totalMinutes)} min</div>
            </div>
            <div class="stat-box">
                <div class="stat-label"> ${getText('distance')}</div>
                <div class="stat-value">${totalDistance.toFixed(2)} km</div>
            </div>
            <div class="stat-box">
                <div class="stat-label"> ${getText('transfers')}</div>
                <div class="stat-value">${segments.length - 1}</div>
            </div>
        </div>
    `;
    routeDetails.appendChild(summaryDiv);
    
    // Preparar contenido para el modal de ruta
    const routeStepsList = document.getElementById('routeStepsList');
    routeStepsList.innerHTML = ''; // Limpiar contenido anterior
    
    segments.forEach((segment, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'route-step';
        stepDiv.style.borderLeft = `15px solid ${lineColors[segment.line]}`;
        
        const start = segment.stations[0].estacion;
        const end = segment.stations[segment.stations.length - 1].estacion;
        
        let segmentTime = 0;
        let segmentDistance = 0;
        for (let i = 0; i < segment.stations.length - 1; i++) {
            const dist = getDistance(segment.stations[i], segment.stations[i + 1]);
            const time = getMinutes(segment.stations[i], segment.stations[i + 1]);
            segmentDistance += dist / 1000;
            segmentTime += time;
        }
        
        stepDiv.innerHTML = `
            <h4 style="color:${lineColors[segment.line]}"> ${getText('line')} ${segment.line}</h4>
            <p>${getText('from')}:</strong> ${start}<strong></p>
            <p style="font-size: 0.85rem; opacity: 0.8;">   
                <svg class="arrow-down" xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round">
                    <!-- Palo vertical -->
                    <line x1="12" y1="5" x2="12" y2="15"></line>
                    <!-- Punta de flecha -->
                    <polyline points="6 11 12 17 18 11"></polyline>
                </svg> 
                Tiempo Estimado: ${Math.round(segmentTime)} min | Distancia: ${segmentDistance.toFixed(2)} km
            </p>
            <p>${getText('to')}: </strong>${end}<strong></p>
        `;

        
        routeStepsList.appendChild(stepDiv);
        
        if (index < segments.length - 1) {
            // Calcular tiempo de transbordo real para mostrar
            const transferTimeSec = transferTimes[end] || 180;
            const transferTimeMin = Math.round(transferTimeSec / 60);

            const transferDiv = document.createElement('div');
            transferDiv.style.borderLeft = `none`;
            transferDiv.className = 'transfer-step';
            transferDiv.innerHTML = `
                <h4 style="color:#3E3E3E;">  
                    <svg class="icon-transfer" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <!-- Flecha diagonal ↘ -->
                        <line x1="5" y1="5" x2="19" y2="19"></line>
                        <polyline points="15 19 19 19 19 15"></polyline>
                        <!-- Flecha diagonal ↙ -->
                        <line x1="19" y1="5" x2="5" y2="19"></line>
                        <polyline points="5 9 5 5 9 5"></polyline>
                    </svg>
                ${getText('transfer')}</h4>
                <p>${getText('changeTo')} ${segments[index + 1].line} <strong>${getText('atStation')} ${end}</strong></p>
                <p style="font-size: 0.85rem; opacity: 0.8;"> ${getText('estimatedTime')}: ${transferTimeMin} min</p>
            `;
            routeStepsList.appendChild(transferDiv);
        }
    });

    // Add Save Favorite Button (Inside Modal)
    const startStationName = estaciones.find(e => e.id === path[0]).estacion;
    const endStationName = estaciones.find(e => e.id === path[path.length - 1]).estacion;

    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-fav-btn';
    saveBtn.style.marginTop = '20px'; // Add some spacing
    saveBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        ${getText('saveFav')}
    `;
    saveBtn.onclick = () => {
        saveFavorite(startStationName, endStationName);
        document.getElementById('routeModal').classList.add('hidden'); // Close modal after saving
    };
    
    // Insertar botón al principio del modal para acceso rápido
    routeStepsList.insertBefore(saveBtn, routeStepsList.firstChild);

    // Configurar botones
    viewRouteBtn.classList.remove('hidden');
    viewRouteBtn.classList.add('fade-in-btn');
    
    // Show secondary button
    viewRouteBtn2.classList.remove('hidden');
    viewRouteBtn2.classList.add('fade-in-btn');
}

// ==========================================
// BUSCAR RUTA
// ==========================================
var draw;
var hihihaha = [];
var animationTimeouts = []; // Array para guardar los IDs de los timeouts

document.getElementById("findPathBtn").addEventListener("click", () => {
    document.getElementById("result").innerText = "";
    const btn1 = document.getElementById("viewRouteBtn");
    const btn2 = document.getElementById("viewRouteBtn2");
    
    btn1.classList.add("hidden");
    btn1.classList.remove("fade-in-btn");
    
    btn2.classList.add("hidden");
    btn2.classList.remove("fade-in-btn");
    
    // Limpiar timeouts anteriores
    animationTimeouts.forEach(timeout => clearTimeout(timeout));
    animationTimeouts = [];

    if (hihihaha) hihihaha.forEach(marca => map.removeLayer(marca));
    hihihaha = [];

    // Limpiar ruta y detalles anteriores
    if (draw) {
        map.removeLayer(draw);
        draw = null;
    }
    document.getElementById('route-details').innerHTML = '';
    
    const startStation = document.getElementById("start").value.trim();
    const endStation = document.getElementById("end").value.trim();
    
    if (!startStation && !endStation) {
        document.getElementById("result").innerText = getText('enterPath');
        return;
    }
    
    if (!startStation) {
        document.getElementById("result").innerText = getText('enterStart');
        return;
    }
    
    if (!endStation) {
        document.getElementById("result").innerText = getText('enterEnd');
        return;
    }
    
    if (endStation == startStation) {
        document.getElementById("result").innerText = getText('sameStation');
        return;
    }
    
    let a = estaciones.find(estacion => estacion.estacion.toLowerCase() == startStation.toLowerCase());
    let b = estaciones.find(estacion => estacion.estacion.toLowerCase() == endStation.toLowerCase());
    
    if (!a && !b) {
        document.getElementById("result").innerText = getText('invalidBoth');
        return;
    }
    
    if (!a) {
        document.getElementById("result").innerText = getText('invalidStart');
        return;
    }
    
    if (!b) {
        document.getElementById("result").innerText = getText('invalidEnd');
        return;
    }
    
    const load = document.getElementById("loading");
    load.classList.remove("hidden");
    
    const useAccessibility = document.getElementById('accessibilityMode').checked;
    const path = Astar(a.id, b.id, useAccessibility);
    
    if (!path || path.length === 0) {
        load.classList.add("hidden");
        document.getElementById("result").innerText = getText('noAccessibleRoute');
        return;
    }
    
    const route = [];
    
    for (var x in path) {
        const station = estaciones.find(estacion => estacion.id == path[x]);
        route.push([station.lat, station.long]);
    }
    
    if (draw) {
        map.removeLayer(draw);
    }
    
    draw = L.polyline(route, {
        color: '#FE5000',
        weight: 8
    }).addTo(map);
    
    // Mostrar resultados inmediatamente
    load.classList.add("hidden");
    showRoute(path);
    map.fitBounds(route);

    // Animación de la línea (si está disponible)
    if (typeof draw.snakeIn === 'function') {
        draw.snakeIn();
    }
    
    // Animación de los marcadores (sin bloquear la UI)
    route.forEach((estacion, index) => {
        const timeoutId = setTimeout(() => {
            var station = estaciones.find(est => estacion[0] == est.lat && estacion[1] == est.long);
            
            const customIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #FE5000; width: 14px; height: 14px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(254, 80, 0, 0.6);"></div>`,
                iconSize: [14, 14],
                iconAnchor: [7, 7]
            });
            
            const marker = L.marker([estacion[0], estacion[1]], { icon: customIcon });
            marker.addTo(map);
            marker.bindPopup(() => `<b>${station.estacion}</b><br>${getText('line')}: ${station.linea}`);
            marker.on('mouseover', function () { marker.openPopup() });
            marker.on('mouseout', function () { marker.closePopup() });
            hihihaha.push(marker);
        }, 200 * index);
        animationTimeouts.push(timeoutId);
    });
    
    const toast = document.getElementById('toast');
    // Mostrar toast al final de la animación de marcadores
    const toastTimeout1 = setTimeout(() => {
        toast.innerText = getText('toastSuccess') + ""; // Resetear mensaje
        toast.classList.add('show');
        toast.classList.remove('hidden', 'hide');
        
        const toastTimeout3 = setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
            
            const toastTimeout4 = setTimeout(() => {
                toast.classList.add('hidden');
            }, 300);
            animationTimeouts.push(toastTimeout4);
        }, 3000);
        animationTimeouts.push(toastTimeout3);
        
    }, route.length * 200);
    animationTimeouts.push(toastTimeout1);
});

// ==========================================
// GLOBAL EVENT LISTENERS
// ==========================================
document.getElementById('viewRouteBtn').addEventListener('click', () => {
    document.getElementById('routeModal').classList.remove('hidden');
});

document.getElementById('viewRouteBtn2').addEventListener('click', () => {
    document.getElementById('routeModal').classList.remove('hidden');
});

// ==========================================
// MODALS & FAVORITES LOGIC
// ==========================================

// Modal Elements
const infoModal = document.getElementById('infoModal');
const favsModal = document.getElementById('favsModal');
const routeModal = document.getElementById('routeModal');
const infoBtn = document.getElementById('infoBtn');
const favsBtn = document.getElementById('favsBtn');
const closeButtons = document.querySelectorAll('.close-modal');

// Open Modals
infoBtn.addEventListener('click', () => {
    infoModal.classList.remove('hidden');
});

favsBtn.addEventListener('click', () => {
    loadFavorites();
    favsModal.classList.remove('hidden');
});

// Close Modals
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        document.getElementById(modalId).classList.add('hidden');
    });
});

// Close on click outside
window.addEventListener('click', (e) => {
    if (e.target === infoModal) infoModal.classList.add('hidden');
    if (e.target === favsModal) favsModal.classList.add('hidden');
    if (e.target === routeModal) routeModal.classList.add('hidden');
});

// Favorites Management
function getFavorites() {
    const favs = localStorage.getItem('metroBuddyFavorites');
    return favs ? JSON.parse(favs) : [];
}

function saveFavorite(start, end) {
    const favs = getFavorites();
    
    // Check if already exists
    const exists = favs.some(f => f.start === start && f.end === end);
    if (exists) {
        showToast('Este viaje ya está en tus favoritos');
        return;
    }
    
    favs.push({
        start,
        end,
        timestamp: new Date().getTime()
    });
    
    localStorage.setItem('metroBuddyFavorites', JSON.stringify(favs));
    showToast(getText('savedFav'));
}

function deleteFavorite(index) {
    const favs = getFavorites();
    favs.splice(index, 1);
    localStorage.setItem('metroBuddyFavorites', JSON.stringify(favs));
    loadFavorites(); // Reload list
}

function loadFavorites() {
    const favs = getFavorites();
    const list = document.getElementById('favoritesList');
    list.innerHTML = '';
    
    if (favs.length === 0) {
        list.innerHTML = `<p class="empty-msg">${getText('emptyFavs')}</p>`;
        return;
    }
    
    favs.forEach((fav, index) => {
        const item = document.createElement('div');
        item.className = 'favorite-item';
        item.innerHTML = `
            <div class="fav-route-info">
                <div class="fav-route-title">${fav.start} ➝ ${fav.end}</div>
                <div class="fav-route-details">${getText('savedOn')} ${new Date(fav.timestamp).toLocaleDateString()}</div>
            </div>
            <button class="delete-fav-btn" title="${getText('delete')}" onclick="event.stopPropagation(); deleteFavorite(${index})">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
        `;
        
        item.addEventListener('click', () => {
            document.getElementById('start').value = fav.start;
            document.getElementById('end').value = fav.end;
            favsModal.classList.add('hidden');
            document.getElementById('findPathBtn').click();
        });
        
        list.appendChild(item);
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add('show');
    toast.classList.remove('hidden', 'hide');
    
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, 3000);
}

// ==========================================
// DARK MODE LOGIC
// ==========================================
const themeToggleBtn = document.getElementById('themeToggleBtn');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('metroBuddyTheme');
if (savedTheme === 'dark') {
    enableDarkMode();
}

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
    localStorage.setItem('metroBuddyTheme', 'dark');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
    localStorage.setItem('metroBuddyTheme', 'light');
}

// Reset buttons when typing
    [startInput, endInput].forEach(input => {
        input.addEventListener('input', () => {
            document.getElementById("findPathBtn").classList.remove('hidden');
            document.getElementById("viewRouteBtn2").classList.add('hidden');
            document.getElementById("viewRouteBtn").classList.add('hidden');
            document.getElementById("result").innerText = "";
            document.getElementById("route-details").innerHTML = "";
        });
    });
