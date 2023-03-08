import React from 'react';
import { Card } from 'antd';

const RegionInfo = ({ currency, speedUnit, distanceUnit, volumeUnit, timezones , country }) => {
  return (
    <Card title="Region Info">
      <p>Country Name: {country}</p>
      <p>Currency: {currency}</p>
      <p>Speed Unit: {speedUnit}</p>
      <p>Distance Unit: {distanceUnit}</p>
      <p>Volume Unit: {volumeUnit}</p>
      <p>Timezones: {timezones.join(', ')}</p>
    </Card>
  );
};

export default RegionInfo;