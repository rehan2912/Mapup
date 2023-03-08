import React from 'react';
import { Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const NightModeToggle = () => {
  const dispatch = useDispatch();
  const nightMode = useSelector((state) => state.nightMode);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_NIGHT_MODE' });
  };

  return (
    <div style={{ margin: '16px 0' }}>
      <Switch checked={nightMode} onChange={handleToggle} />
      <span style={{ marginLeft: 8 , color:"white" }}>{nightMode ? 'Night Mode' : 'Day Mode'}</span>
    </div>
  );
};

export default NightModeToggle;