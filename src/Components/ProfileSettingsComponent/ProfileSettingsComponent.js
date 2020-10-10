import React from "react";
import {
  Form,
  Input,
  Button
} from "antd";

const ProfileSettings = () => {
    
  const [form] = Form.useForm();
    const onFinish = (data) => {
      console.log(data);
      alert("Current State is: " + JSON.stringify(data));
        
    };
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item label="Input" className="form-label" name="input">
          <Input className="form-input" />
        </Form.Item>
        <Button htmlType="submit">Button</Button>
      </Form>
    </>
  );
};

export default ProfileSettings;

