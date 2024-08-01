import React from 'react';
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Typography,
  notification,
} from 'antd';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import TelegramLoginButton from 'telegram-login-button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom/dist';
import { save_user } from '../../../redux/actions';

const { Title, Text } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const navigate = useNavigate();

  const errorNotification = (message) => {
    api.error({
      message: 'Error',
      description: message,
      showProgress: true,
      pauseOnHover: true,
      placement: 'bottomRight',
    });
  };

  const successNotification = () => {
    api.success({
      message: 'Success',
      description: 'Logged in successfully',
      showProgress: true,
      pauseOnHover: true,
      placement: 'bottomRight',
    });
  };

  const onFinish = async (values) => {
    const { username, password } = values;
    setLoading(true);
    if (username === 'ibrohim_jalalov' && password === '12345678') {
      toast.success('Logged in successfully');
      navigate('/dashboard');
      dispatch(
        save_user({
          username,
          password,
          loggedDate: new Date().toLocaleString(),
        })
      );
      successNotification();
    } else {
      toast.error('Invalid username or password');
      errorNotification('Invalid username or password');
    }
    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  return (
    <>
      {contextHolder}
      <Form
        layout="vertical"
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title className="text-center">Login</Title>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
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
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          className="w-full"
          wrapperCol={{
            span: 24,
          }}
        >
          <Button
            className="w-full"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Login
          </Button>
        </Form.Item>
        <Divider>
          {' '}
          <span className="text-gray-500">Or</span>
        </Divider>
        <div className="flex justify-center flex-col items-center gap-[10px]">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
          <TelegramLoginButton
            botName={import.meta.env.VITE_TELEGRAM_BOT_USERNAME}
            dataOnauth={(user) => console.log(user)}
          />
        </div>
        <Text className="mt-[20px] block text-center">
          {' '}
          Don't have an account? <Link to={'/auth/register'}>Register</Link>
        </Text>
      </Form>
    </>
  );
};

export default Login;
