import React, { useState, useEffect } from 'react';
import { Form, Input, Checkbox, Button, Space } from 'antd'
import {useMutation} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Request from '@src/util/request';
import './index.less';

export default function Login(){
    const [loginForm] = Form.useForm();
    const navigate = useNavigate();

    const loginAction = useMutation(data=>Request({
        url: '/api/test',
        type: 'POST',
        data
    }, res=>{
        if(res){
            if(data.remember){
                localStorage.setItem('loginData', JSON.stringify(data));
            }else{
                localStorage.removeItem('loginData');
            }
            navigate('/index');
        }
    }))
    const submitAction = (data)=>{
        loginAction.mutate(data);
    }
    useEffect(() => {
        let data = localStorage.getItem('loginData');
        if(data){
            try{
                data = JSON.parse(data);
                loginForm.setFieldsValue(data);
            }catch (e) {
                console.info('获取缓存的账号数据出错');
            }
        }
    }, [loginForm]);
    return (
        <div className="login-page">
            <div className="login-form-con">
                <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}
                      form={ loginForm }
                      onFinish={ submitAction }
                      initialValues={{}} requiredMark={false}>
                    <Form.Item label="用户名" name="userName" rules={[{ required: true, message: '请输入用户名' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入账号密码' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                        <Button className={'login-btn'} type="primary" htmlType="submit" loading={loginAction.isLoading}>登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}