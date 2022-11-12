import { Input, Form } from "antd";
import React, { useState,useEffect } from "react";
import { debounce } from "lodash";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const PasswordInput = ({
  required,
  name,
  message,
  label,
  value,
  addonBefore,
  form,
  type,
  ...props
}) => {
  const dispatch = useDispatch();
  const [val, setVal] = useState(value || '');
  const debouncedSave = useCallback(
    debounce((KeyValue) => dispatch(props.onChange(KeyValue)), 1000),
    []
  );
  console.log("VALUE",value)
  console.log("VAL",val)
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    }
  };
  

  const onChange = (event) => {
    setVal(event.target.value);
    const keyValue = {
      field: name,
      value: event.target.value,
    };
    debouncedSave(keyValue);
  };
  useEffect(() => {
    setVal(value)
    // form.setFieldsValue(value||'')
}, [value]);
  return (
    <>
     <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
    </>
  );
};

export default PasswordInput;
