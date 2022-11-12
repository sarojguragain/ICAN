import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Popconfirm } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteUser } from '../../redux/user/action'
import ButtonDel from '../control/button'

const PopConforms = ({title,Conform,Cancel,okText,cancelText,value,name,...props}) => {
    const dispatch = useDispatch();

    const confirm = (id) => {
        dispatch(DeleteUser(id))
      };
    
      const cancel = (e) => {
        message.error('Click on No');
      };
  return (
    <>
      <Popconfirm
              title={title}
              onConfirm={()=>Conform(value)}
              onCancel={cancel}
              okText={okText}
              cancelText={cancelText}
              value={value}
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: "red",
                  }}
                />
              }
            >
                
              <ButtonDel label="Delete" value={value}  danger="danger" icon=<DeleteOutlined /> />
            </Popconfirm>
    </>
  )
}

export default PopConforms