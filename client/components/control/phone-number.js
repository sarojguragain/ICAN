import { Input, Form } from "antd";
import React, { useState } from "react";
import { debounce } from "lodash";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const PhoneInput = ({
  required,
  name,
  message,
  label,
  value,
  form,
  type,
  ...props
}) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(value);
  const debouncedSave = useCallback(
    debounce((KeyValue) => dispatch(props.onChange(KeyValue)), 1000),
    []
  );
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
    pattern: {
      message: "phone no must be 98********",
    },
  };

  const onChange = (event) => {
    setValues(event.target.value);
    const keyValue = {
      field: name,
      value: event.target.value,
    };
    debouncedSave(keyValue);
  };
  return (
    <>
      <Form.Item
        label={label}
        name={name}
        initialValue={value || ""}
        rules={[
          { required: required, message: message },
        
          { pattern: new RegExp(/^[98][0-9]{9}$/),
            message: "phone no must be 98********",
          }
         
        ]}
      >
        <Input {...props} addonBefore="+977" onChange={onChange} />
      </Form.Item>
    </>
  );
};

export default  PhoneInput ;
