import React, { useState } from 'react';
import { Select, Button } from 'antd';

const { Option } = Select;

const FormInput = ({ onSubmit }) => {
  const [region, setRegion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(region);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Select value={region} onChange={setRegion} style={{ width: '100%' }}>
        <Option value="us">United States</Option>
        <Option value="in">India</Option>
        <Option value="gb">United Kingdom</Option>
      </Select>
      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Load
      </Button>
    </form>
  );
};

export default FormInput;