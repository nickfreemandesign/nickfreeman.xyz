import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
    grid-area: map;
    height: 50px;
`;

let center = new google.maps.LatLng(40.7128, 74.0060);

// let projectmap = new window.google.maps.Map(document.getElementById('projectmap'), {
//     zoom: 12,
//     center: center,
//     streetViewControl: false,
//     mapTypeControl: true,
//     mapTypeId: 'roadmap',
// });

const Map = (props) => {
    return (
        <MapContainer 
            className="maps"
            id="projectmap">
            mappy map
        </MapContainer>
    )
}

module.exports = Map




