import '../../App.css';
import {GoogleMap, withScriptjs, withGoogleMap,Marker} from 'react-google-maps';
import React from 'react';


class GMap extends React.Component {
  render () {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap defaultZoom={15} defaultCenter={{lat:28.73643, lng:77.24744}}>
        <Marker position={{lat:28.73643, lng:77.24744}} />
      </GoogleMap>
    ));
    return(
        <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCFN_rjtevKvb8np9Hyu_oFfdGvT9aahZE&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    )
  }
}

export default GMap;


// export function initMap() {
//     let obj={
//         center:{lat:'28.7041° N', lng:'77.1025° E'},
//         zoom:30
//     }
//   map = new google.maps.Map(document.getElementById("map"), obj);
// }


//key
//AIzaSyCFN_rjtevKvb8np9Hyu_oFfdGvT9aahZE