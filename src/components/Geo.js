import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const points = [
    { id: 1, title: "Salon 1", lat: 43.047053328273265, lng: -76.0642181605193 },
    { id: 2, title: "Salon 2", lat: 43.07111984157634, lng: -76.17233854702515 },
];
function Geo() {
    let center = {
        lat: 43.059,
        lng: -76.11827
    }
    let zoom = 12
    return (
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBLIRBtmm6KMxqp5pZeHWfjE_3jJtzzrq0" }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {points.map(({ lat, lng, id, title }) => {
                    return (
                        <Marker key={id} lat={lat} lng={lng} text={id} title={title} />
                    );
                })}
            </GoogleMapReact>
        </div>
    )
}

export default Geo
