import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.css'; 
import axios from 'axios';
import "./Form.css"

const SignInForm = () => {
  const onFinish = async (values) => {
    console.log( values);
    // const url = JSON.stringify(values);
    // console.log(url);
    await axios.post("https://reqres.in/api/login", values)
      .then((res) => {
         console.log(res);
      })
    .catch((err) => {       
        console.log(err);
        });
     
    };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        email: " ",
        password:" "
      }}
    //   onSubmit={onSubmit}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
       label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email !',
          },
        ]}
      >
        <Input placeholder="Email Address*" style={{width:"80%"}}/>
      </Form.Item>

      <Form.Item
      
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder="Password*"style={{width:"80%"}}/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" style={{width:"80%",backgroundColor:"black",color:"white"}} >
          Log IN
        </Button>
      </Form.Item>

      <div class="box">
             <Form.Item
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <span>

        Forgot Password ?
        </span>
      </Form.Item>
      </div>

      
    </Form>
  );
};

export default SignInForm;