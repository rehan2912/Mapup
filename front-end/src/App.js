import React from 'react';
import { Layout } from 'antd';
import './normalize.css';
import { useSelector, useDispatch } from 'react-redux';
import OSMMap from './components/organisms/OSMMap';
import FormInput from './components/organisms/FormInput';
import RegionInfo from './components/organisms/RegionInfo';
import NightModeToggle from './components/molecules/NightModeToggle';
import './App.css';
import 'leaflet/dist/leaflet.css';
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  integrity="sha384-RB5q3xxNqJhE1+2H9Xyv/7gjkR/vJG8fn+0MDEZvBrlmJRRp6b4vk6x9X6+J0QhB"
  crossorigin=""
/>

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const { region, currency, speedUnit, distanceUnit, volumeUnit, timezones, nightMode, country_name } =
    useSelector((state) => state);

  const handleFormSubmit = async (region) => {
    const url = `https://restcountries.com/v2/alpha/${region}`;
    const response = await fetch(url);
    const data = await response.json();
    const { name, currencies, timezones } = data;
    const country_name = name;
    const currency = currencies[0].symbol;
    const speedUnit = 'kmph';
    const distanceUnit = 'kilometers';
    const volumeUnit = 'liters';
    dispatch({
      type: 'SET_REGION_INFO',
      payload: { currency, speedUnit, distanceUnit, volumeUnit, timezones, country_name },
    });
    dispatch({ type: 'SET_REGION', payload: region });
  };

  return (
    <div className={nightMode ? 'night-mode' : 'day-mode'}>
      <Layout style={{ minHeight: '100vh',height:"100%" }}>
        <Header className="header">
          <div className="logo">Map UI</div>
          <div className="header-buttons">
            <button className="dummy-button">Login</button>
            <button className="dummy-button">Profile</button>
          </div>
        </Header>
        <Layout>
          <Sider className="sidebar">
            <NightModeToggle />
            <FormInput onSubmit={handleFormSubmit} />
          </Sider>
          <Content>
            {country_name && (<OSMMap/>)}
            
            {region && (
              <RegionInfo
                currency={currency}
                speedUnit={speedUnit}
                distanceUnit={distanceUnit}
                volumeUnit={volumeUnit}
                timezones={timezones}
                country={country_name}
              />
            )}
          </Content>
        </Layout>
        
      </Layout>
      <Footer className="footer">Map UI ©2023 Created by Rehan Pathan</Footer>
    </div>
  );
};

export default App;