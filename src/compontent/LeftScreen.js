import React, { Component } from 'react'
import './index.css'
import { withRouter } from 'react-router-dom';
 
@withRouter
class LeftScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
     
    render() {
        console.log('aaaaaaaaaaaaaa',this.props.location.pathname);
        return (
            <div className="menuList">
                
            </div>
        )
    }
}
export default LeftScreen
