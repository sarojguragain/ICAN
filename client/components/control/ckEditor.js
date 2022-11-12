import React from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import {Form} from 'antd'

const Ckeditor = ({
  required,
  name,
  message,
  label,
  value,
  placeholder,
  index,
  subIndex,
  elIndex,
  shouldUpdate,
  addonBefore,
  form,
  type,
  ...props
}) => {

    const API_URL = "http://localhost:5000";
    const UPLOAD_ENDPOINT = "api/image-upload";
    function uploadAdapter(loader) {
        return {
          upload: () => {
            return new Promise((resolve, reject) => {
              const body = new FormData();
              loader.file.then((file) => {
                body.append("image", file);

                fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
                  method: "post",
                  body: body
                  // mode: "no-cors"
                })
                  .then((res) => res.json())
                  .then((res) => {
                    resolve({
                      default: `${API_URL}/${res.filename}`
                    });
                  })
                  .catch((err) => {
                    console.log("UPLOAD ERROE",err);
                    reject(err);
                  });
              });
            });
          }
        };
      }
      function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
          return uploadAdapter(loader);
        };
      }
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
                <CKEditor
                config={{
                    extraPlugins: [uploadPlugin]
                }}
                    editor={Editor}
                    data={placeholder}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();

                        // console.log({ event, editor, data });
                    }}
                    // onBlur={(event, editor) => {
                    //     console.log('Blur.', editor);
                    // }}
                    // onFocus={(event, editor) => {
                    //     console.log('Focus.', editor);
                    // }}
                />
                </Form.Item>
            </>
    )
}

export default Ckeditor;
