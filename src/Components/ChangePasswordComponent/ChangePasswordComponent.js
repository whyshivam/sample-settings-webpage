import React from "react";
import { Form, Input, Button } from "antd";

const ChangePassword = () => {
  const [form] = Form.useForm();
  const onFinish = () => {
    console.log("Password data");
  };
  return (
    <>
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item label="Old Password" rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]} className="form-label" name="old-password">
          <Input.Password className="form-input" />
        </Form.Item>
        <Form.Item label="New Password" rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]} className="form-label" name="new-password">
          <Input.Password className="form-input" />
        </Form.Item>
        <Form.Item label="Retype Password" rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]} className="form-label" name="retype-password">
          <Input.Password className="form-input" />
        </Form.Item>
        <Button htmlType="submit">Button</Button>
      </Form>
    </>
  );
};

export default ChangePassword;
