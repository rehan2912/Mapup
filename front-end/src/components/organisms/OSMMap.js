import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';

const OSMMap = () => {
  const [center, setCenter] = useState([0, 0]);
  const [loading, setLoading] = useState(false);
  const { country_name } = useSelector((state) => state);

  useEffect(() => {
    if (country_name) {
      setLoading(true);
      console.log(country_name);
      switch (country_name) {
        case 'India':
          setCenter([20.5937, 78.9629]);
          setLoading(false);
          break;
        case 'United States of America':
          setCenter([44.9667, 103.7717]);
          setLoading(false);
          break;
        case 'United Kingdom of Great Britain and Northern Ireland':
          setCenter([54.7024, 3.2766]);
          setLoading(false);
          break;
        default:
          setLoading(false);
          break;
      }
    }
  }, [country_name]);

  // Remove the second useEffect hook that sets loading to false

  return (
    <div className='map-container'>
      {country_name=="null" && <MapContainer center={[0, 0]} zoom={4}>
        {console.log(center)}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>}
      {country_name=="India" && <MapContainer center={[20.5937, 78.9629]} zoom={4}>
        {console.log(center)}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>}
      {country_name=="United States of America" && <MapContainer center={[40.730610, -73.935242]} zoom={4}>
        {console.log(center)}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>}
      {country_name=="United Kingdom of Great Britain and Northern Ireland" && <MapContainer center={[54.7024, 3.2766]} zoom={4}>
        {console.log(center)}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>}
    </div>
  );
};

export default OSMMap;
