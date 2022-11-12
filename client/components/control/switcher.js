import React,{useEffect} from 'react'
import { Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { changeUserStatus, GetUsers } from '../../redux/user/action';

const Switcher = (props) => {
    const {name,value,status} = props;

    const dispatch = useDispatch();

    const onChange = (checked) => {
      };   
      const toggle = (id) => {
        var keyValue = {"id":id};
        dispatch(changeUserStatus(keyValue));
        dispatch(GetUsers());
      };
  return (
    <Switch value={value} checked ={(status===true)?true:false} onClick={()=>toggle(value)} />
  )
}

export default Switcher

