import { Input, Form } from "antd";
import React, { useState,useEffect } from "react";
import { debounce } from "lodash";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const ConformPasswordInput = ({
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
    form.setFieldsValue(value)
}, [value]);
  return (
    <>
     <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Conform Password" />
              </Form.Item>

    </>
  );
};

export default ConformPasswordInput;
