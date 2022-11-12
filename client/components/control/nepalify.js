import React from 'react'
import Nepali from 'nepalify-react';
import { debounce } from "lodash";
import { Form } from 'antd';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useState } from 'react';

const NepaliInput = ({
    required,
    name,
    message,
    label,
    value,
    index,
    subIndex,
    elIndex,
    shouldUpdate,
    addonBefore,
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
    }
  };

  const onChange = (event) => {
    setValues(event.target.value);
    const keyValue = {
      field: name,
      value: event.target.value,
    };
    debouncedSave(keyValue);
  };

  console.log("NEPALI ",value);
  return (
   <>
    <Form.Item
        label={label}
        name={name}
        initialValue={value || ""}
        rules={[
          { required: required, message: message },
          {
            type: type,
          },
        ]}
      >
        <Nepali
        funcname="unicodify"
        valueChange={onChange}
        style={{backgroundColor:"white"}}
      />
      </Form.Item>
        
   </>
  )
}

export default NepaliInput