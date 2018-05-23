import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import './sider.css';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: this.props.role || 'stu',
            route: this.props.route || 'notification',
        }
    }
    render() {
        const { role, route } = this.state;
        return (
            <div>
                <div 
                    style={{
                        height: 32,
                        background: 'rgba(255,255,255,.2)',
                        margin: 16,
                    }}
                ></div>
                <Menu 
                    theme={'dark'} 
                    defaultSelectedKeys={[route]}
                >
                    <Menu.Item key={'notification'}>
                        <span>
                            <Link 
                                to={`/${role}`}
                                className='linkcolor'
                            >   
                                <Icon type={'notification'} />
                                <span>通知公告</span>
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={'profile'}>
                        <span>
                            <Link 
                                to={`/${role}/profile`}
                                className='linkcolor'
                            >
                                <Icon type={'profile'} />
                                <span>使用指南</span>
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={'appstoreo'}>
                        <span>
                        <Link 
                            to={`/${role}/appstoreo`}
                            className='linkcolor'
                        >
                            <Icon type={'appstore-o'} />
                            <span>作品展示</span>
                        </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={'filetext'}>
                        <span>
                            <Link 
                                to={`/${role}/filetext`}
                                className='linkcolor'
                            >
                                <Icon type={'file-text'} />
                                <span>获奖情况</span>
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={'smileo'}>
                        <span>
                            <Link 
                                to={`/${role}/smileo`}
                                className='linkcolor'
                            >
                                <Icon type={'smile-o'} />
                                <span>使用申请</span>
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={'calendar'}>
                        <span>
                            <Link 
                                to={`/${role}/calendar`}
                                className='linkcolor'
                            >
                                <Icon type={'calendar'} />
                                <span>教学计划</span>
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={'book'}>
                        
                        <span>
                            <Link 
                                to={`/${role}/book`}
                                className='linkcolor'
                            >
                                <Icon type={'book'} />
                                <span>教学成绩</span>
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={'laptop'}>
                        <span>
                            <Link 
                                to={`/${role}/laptop`}
                                className='linkcolor'
                            >
                                <Icon type={'laptop'} /> 
                                <span>电视资源</span>
                            </Link>
                        </span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
