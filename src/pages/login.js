import React, { Component } from 'react';
import { Form, Card, Icon, Input, Button, Radio } from 'antd';

import './login.css';

const { Item: FormItem } = Form;
const { Group: RadioGroup } = Radio;

export default Form.create({})(
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                radioVal: 'stu',
            }
        }
        //请合并handleSubmit和handleLogin
        handleSubmit = () => {}
        handleRadioChange = e => {
            this.setState({
                radioVal: e.target.value,
            })
        }
        handleLogin = () => {
            const { loginCallback } = this.props;
            const {radioVal } = this.state;
            loginCallback(true, radioVal);
        }
        render() {
            const { getFieldDecorator } = this.props.form;
            const { radioVal } = this.state;
            return (
                <div style={{
                    backgroundImage: 'url("http://pic.qiantucdn.com/58pic/18/07/20/93758PIC4zg_1024.png")',
                    boxShadow: '10px 10px 40px #cccccc',
                    height: window.innerHeight,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Card
                        title="登录"
                        style={{
                            width: 360,
                            height: 373
                        }}
                    >
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <RadioGroup onChange={this.handleRadioChange} value={radioVal}>
                                    <Radio value='stu'>学生</Radio>
                                    <Radio value='teach'>教师</Radio>
                                    <Radio value='admin'>管理员</Radio>
                                </RadioGroup>
                            )}
                            <Button type="primary" className="login-form-button" onClick={this.handleLogin}>
                                登录
                            </Button>
                            {
                                radioVal === 'stu' ? <span>或者 <a href="">现在注册！</a></span> : null 
                            }
                            </FormItem>
                        </Form>
                    </Card>
                </div>
                
            );
        }
    }
) 
