import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
    grid-area: map;
    height: 300px;
    width: 300px;
`;

export default class AppMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.initializeMap = this.initializeMap.bind(this);
    }
    
    componentDidMount() {
        this.initializeMap();
    }
    
    async initializeMap() {
        
        let center = new google.maps.LatLng(40.746901, -73.987904);
        //instantiate new map with center on dispatch destination
        map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: center,
            streetViewControl: false,
            mapTypeControl: false,
            mapTypeId: 'roadmap',
        });

    }

    render() {

        return (

            <MapContainer
                className="maps"
                id="map">
                mappy map
            </MapContainer>
        )

    }
}







