import { Button } from 'antd'
import React from 'react'

const Buttons = ({type,icon,shape,loading,value,danger,label,title,disabled,...props}) => {
    const   action =()=>{
        props.onClick();
        }
  return (
    <Button 
        type={type?type:"primary"}
        icon={icon}
        shape={shape}
        loading={loading}
        onClick={action}
        disabled={disabled}
        danger={danger}
    >   
        {label}
    </Button>

  )
}

export default Buttons