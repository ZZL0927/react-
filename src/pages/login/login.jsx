import React from 'react'
import { Form, Input, Button, Icon } from 'antd';
import './login.css'
import logo from './images/logo.png'
// 登录的路由组件
export default function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='login'>
            <header className='login-header'>
                <img src={logo} alt="logo" />
                <h2>React项目：后台管理系统</h2>
            </header>
            <section className='login-content'>
                <h2>用户登录</h2>
                <Form 
                    className='login-form'
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                    name="username"
                    rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                        {
                            max:12,
                            message:'用户名必须小于等于12位'
                        },
                        {
                            min:4,
                            message:'用户名必须大于等于4位'
                        },
                        {
                            pattern:/^\w+$/,
                            message:'用户名必须是字母、数字、下划线组成'
                        }
                      ]}
                    >
                        <Input placeholder='Username' />
                    </Form.Item>

                    <Form.Item
                    name="password"
                    rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                    >
                        <Input.Password placeholder='Password' />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className='login-form-button'>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}
