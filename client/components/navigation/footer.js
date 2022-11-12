import React from 'react'
import { Layout } from 'antd';
const { Footer} = Layout;

const Footers = (props) => {
  return (
    <Footer style={{textAlign: 'center', padding: '0.5em', backgroundColor: '#168dcf', height: '3.4em', color:'white'}}>Powered by PCS</Footer>
    )
}

export default Footers