import React, { useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Photo from './regentPark.jpg';
import markerPark from './markerPark.png';
import './App.css';

function App() {
  const position = [51.505, -0.09]
  const regentPark = [51.5305, -0.1465]

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
  }, []);

  const customMarker = L.icon({
    iconUrl: markerPark,
    iconSize: [38, 38]
  })

  return (
    <div className="App">
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGlyYXVkLWNvZWwiLCJhIjoiY2szem5od2Z4MGFrOTNnbW1ka3MwZWVlMSJ9.qKdr77MJ0XXL-t6Ii6yH8A"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
        <Marker position={regentPark} icon={customMarker}>
          <Popup>
            <h1>The Regent's Park</h1>
            <img src={Photo} alt="photo du parc"></img><br />
            <i>Ouvert du lundi au vendredi de 9h00 à 12h00</i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Maecenas in elit rhoncus quam convallis finibus elementum ac enim.</strong>
              Sed augue nibh, mollis mollis hendrerit et, mattis sed elit. Integer semper euismod egestas.
              Morbi nec nibh molestie metus efficitur lobortis non non tortor. Nam malesuada laoreet eros, in condimentum velit fringilla et. Quisque sapien elit, lobortis et arcu sed, elementum lobortis erat.
              Vestibulum luctus erat id massa tristique, et porta tellus imperdiet.
            </p>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}

export default App;
