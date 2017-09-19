import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        if(!this.props.user){
            return(
                <div>Loading...</div>
            );
        }
        return(
            <div>
                <img src={this.props.user.thumbnail} />
            <h1>First:{this.props.user.first}</h1>
            <h2>Des:{this.props.user.description}</h2>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        user:state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);