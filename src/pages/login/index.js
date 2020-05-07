import React, { Component } from 'react'
import { Tabs,Form, Input, Button,Icon } from 'antd';
import { connect } from 'react-redux';
import request from '../../service/request';
import './index.css'
const { TabPane } = Tabs;
 
const layout = {
    wrapperCol: { span: 24 },
  };
@Form.create()
@connect(({ user }) => ({ ...user }))
class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgBase: '',
            checkKey: ''
        };
    }

    componentDidMount(){
        request({
            url: '/sys/getCheckCode',
            method: 'get'
        }).then((reponse)=>{
            if(reponse.code == 200){
               if(reponse.result && reponse.result.key){
                   this.setState({
                    checkKey: reponse.result.key
                   })
                   let url = `/sys/randomImage/${reponse.result.key}`
                    request({
                        url: url,
                        method: 'get',
                    }).then((rep)=>{
                        if(rep.code == 200){
                            this.setState({
                                imgBase: rep.result
                            })
                        }
                    }).catch((err)=>{
                        console.log('get img error',err);
                    })
               }
            }
        }).catch((err)=>{
            console.log('get key error',err);
        })
    }

    tabChange = (key)=>{
        
    }

    forgetPassword = ()=>{

    }

    login = ()=>{
        this.props.form.validateFields((err, values) => {
            if (err) return;
            let obj = {
                captcha: values.imgCode,
                checkKey:this.state.checkKey,
                password: values.password,
                username: values.username,
            }
            this.props.dispatch({
                type:'user/login',
                payload: obj,
                callback:()=>{
                    this.props.history.push({pathname: '/userinfo'})
                }
            })
        });
    }

    passwordRender(){

        const { getFieldDecorator } = this.props.form;
        return (
            <Form
            {...layout}
            name="forms"
            style={{width: '300px',marginTop: '50px'}}
            >
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: '请输入账号',
                            }
                        ]
                    })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入账号" />
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: '请输入密码',
                            }
                        ]
                    })(
                    
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="请输入密码"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('imgCode', {
                        rules: [
                            {
                                required: true,
                                message: '请输入验证码',
                            }
                        ]
                    })(
                        <div className="imgCode">
                            <Input
                                prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入验证码"
                                style={{marginRight: '20px'}}
                            />
                            <img alt="img" src={this.state.imgBase}></img>
                        </div>
                    )}
                </Form.Item>
                {/* <div className="forgetPassword">
                    <a onClick={this.forgetPassword}>忘记密码</a>
                </div> */}
                <Form.Item >
                    <Button type="primary" onClick={this.login} style={{width: '300px'}} htmlType="submit">
                    登录
                    </Button>
                </Form.Item>
            </Form>
        )
    }
     
    render() {
        return (
            <div className="login_container">
                <div className="login_wrap">
                    <div style={{backgroundColor: 'blue', width: '500px'}}></div>
                    <div style={{ flex: 1}} className='login_form'>
                        <div style={{marginTop: '30px', fontSize: '18px'}}>用户登录</div>
                         {this.passwordRender()}
                        {/* <Tabs defaultActiveKey="1" onChange={this.tabChange}>
                            <TabPane tab="密码登录" key="1">
                                {this.passwordRender()}
                            </TabPane>
                            <TabPane tab="验证码登录" disabled  key="2">
                            验证码登录
                            </TabPane>
                        </Tabs> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginScreen
