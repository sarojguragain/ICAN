import { Select } from 'antd';
import React from 'react';
const { Option } = Select;
const Selection = ({data}) => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
      console.log("SELECTION ROLEs",data)
  return (
    <>
    <Select
      defaultValue="lucy"
      
      onChange={handleChange}
    >
       {data.map(x => (
         <Option value={x.id}>{x.name}</Option>
       ))}
     
      
    </Select>
    </>
  )
}

export default Selection