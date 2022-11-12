import { Select,Form } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getRoles } from "../../redux/user/action";

const RolePicker = ({name, label, required,values,...props}) => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    const keyValue={
      field :"RoleId",
      value:value
    }
   dispatch(props.onChange(keyValue));
  };
  const roles = useSelector((state) => state.UserList.Roles);
  useEffect(() => {
    dispatch(getRoles());
  }, []);
  return (
    <>
      <Form.Item name={name} label ={label} initialValue={values||''}>
        <Select onChange={handleChange}>
          {!!roles &&
            roles.map((option, i) => {
              return (
                <Select.Option key={i} value={option.id}>
                  {option.role}
                </Select.Option>
              );
            })}
        </Select>
      </Form.Item>
    </>
  );
};

export default RolePicker;
