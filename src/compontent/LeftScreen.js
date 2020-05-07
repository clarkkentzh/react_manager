import React, { Component } from 'react'
import './index.css'
import { withRouter } from 'react-router-dom';
import { Menu,Icon } from 'antd';
const { SubMenu } = Menu;

@withRouter
class LeftScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectKeys: []
        };
    }

    componentDidMount(){
        if(this.props.location.pathname != '/login' && this.props.location.pathname != '/'){
            this.getPathNameKey(this.props.location.pathname)
        }
    }

    getPathNameKey(routes){
        let keys = ['1'];
        if(routes == '/intelligent'){
            keys = ['3'];
        }else if(routes == '/speech'){
            keys = ['4'];
        }else if(routes == '/business'){
            keys = ['6'];
        }
        this.setState({
            selectKeys: keys
        })
    }

    selectMenu = ({item,key})=>{
        let goRoute = '/';
        this.setState({
            selectKeys: [key]
        })
        switch (key) {
            case '1':
                goRoute = '/userinfo';
                break;
            case '2':
                goRoute = '/userinfo';
                break;
            case '3':
                goRoute = '/intelligent';
                break;
            case '4':
                goRoute = '/speech';
                break;
            case '5':
                goRoute = '/userinfo';
                break;
            case '6':
                goRoute = '/business';
                break;
            default:
                break;
        }
        this.props.history.push({pathname: goRoute})
    }
     
    render() {
        if(this.props.location.pathname == '/login'){
            return (
                <div></div>
            )
        }
        return (
            <div className="menuList">
                <Menu
                mode="inline"
                theme="dark"
                selectedKeys={this.state.selectKeys}
                onSelect={this.selectMenu}
                style={{width: '200px',backgroundColor: '#3F6AD2', color: '#fff', marginTop: '160px'}}
                >
                    <Menu.Item key="1">
                        <Icon type="appstore"/>
                        <span>基础信息</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="profile"/>
                        <span>问答库管理</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="read"/>
                        <span>智能学习</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="audio"/>
                        <span>语音报表</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="pie-chart" />
                        <span>统计分析</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon type="dashboard"  style={{color: '#fff'}}/>
                        <span>业务预约</span>
                    </Menu.Item>
                    {/* <SubMenu
                     style={{textAlign:"left",backgroundColor: '#3F6AD2'}}
                        key="sub1"
                        title={
                        <span>
                            <Icon type="mail" />
                            <span style={{color: '#fff'}}>Navigation One</span>
                        </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu> */}
                </Menu>
            </div>
        )
    }
}
export default LeftScreen
