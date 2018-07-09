var vectorTileStyling = {
    boundaries: [],
    // boundaries: {
    //     weight: 1,
    //     fillColor: '#c545d3',
    //     color: '#c545d3',
    //     fillOpacity: 0.2,
    //     opacity: 0.4
    // },
    buildings: [],
    // buildings: {
    //     fill: true,
    //     weight: 1,
    //     fillColor: '#2b2b2b',
    //     color: '#2b2b2b',
    //     fillOpacity: 0.2,
    //     opacity: 0.4
    // },
    earth: [],
    // earth: {	// nextzen only
    //     fill: true,
    //     weight: 1,
    //     fillColor: '#c0c0c0',
    //     color: '#c0c0c0',
    //     fillOpacity: 0.2,
    //     opacity: 0.4
    // },
    landuse: [],
    // landuse: {
    //     fill: true,
    //     weight: 1,
    //     fillColor: '#e5b404',
    //     color: '#e5b404',
    //     fillOpacity: 0.2,
    //     opacity: 0.4
    // },
    places: {
        weight: 1,
        fillColor: '#f20e93',
        color: '#f20e93',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    pois: [],
    // pois: {
    //     weight: 1,
    //     fillColor: '#3bb50a',
    //     color: '#3bb50a',
    //     fillOpacity: 0.2,
    //     opacity: 0.4
    // },
    //roads: [],
    roads: {	// mapbox & nextzen only
        weight: 1,
        fillColor: '#000000',
        color: '#000000',
        fillOpacity: 0.2,
        opacity: 0.4
    },
    transit: {	// nextzen only
        weight: 0.5,
        fillColor: '#f2b648',
        color: '#f2b648',
        fillOpacity: 0.2,
        opacity: 0.4,
    // 					dashArray: [4, 4]
    },
    // water: {
    //     fill: true,
    //     weight: 1,
    //     fillColor: '#06cccc',
    //     color: '#06cccc',
    //     fillOpacity: 0.2,
    //     opacity: 0.4,
    // },
    water: function(properties, zoom, geometryDimension) {
        var styles = {
            fill: true,
            weight: 1,
            color: '#06cccc',
            fillOpacity: 1,
            opacity: 0.4,
            fillColor: '#8BD1E3'
        }
            
        return styles
    },

    
    
    


    // Do not symbolize some stuff for mapbox
    country_label: [],
    marine_label: [],
    state_label: [],
    place_label: [],
    waterway_label: [],
    poi_label: [],
    //road_label: [],
    roads_label: {weight: 1,},
    housenum_label: [],


    // Do not symbolize some stuff for openmaptiles
    country_name: [],
    marine_name: [],
    state_name: [],
    place_name: [],
    waterway_name: [],
    poi_name: [],
    road_name: [],
    housenum_name: [],
};

        