import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css'
 
@withRouter
@connect(({ user }) => ({ ...user }))
class HeaderScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
     
    render() {
        if(this.props.location.pathname == '/login'){
            return (
                <div></div>
            )
        }
        return (
            <header className="App-header">
                <div style={{marginRight: '50px'}} onClick={()=>{
                    this.props.history.push({pathname: '/login'})
                }}>
                    {this.props.userInfo.realname}
                </div>
            </header>
        )
    }
}
export default HeaderScreen
