import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
const Contact = () => {

    const [isLoading, setIsLoading] = useState(false)

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <Form
                initialValues={{ remember: false }}
                onFinish={onFinish}
                size="large"
                className='dark'
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Name!' }]}
                >
                    <Input placeholder="Your Name" style={{ background: 'transparent', color: 'white' }} />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input 
                        type="email"
                        placeholder="Your Email" style={{ background: 'transparent', color: 'white' }}
                    />
                </Form.Item>
                <Form.Item name={['user', 'introduction']}  >
                    <Input.TextArea placeholder="Your Website Requirements" rows={6} style={{ background: 'transparent', color: 'white' }} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Contact