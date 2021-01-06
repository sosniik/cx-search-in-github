import React,{ Component } from "react";
import './User.css'
import './App.js'

class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
          user: null
        }
    }
    
    getUser() {
        fetch('http://localhost:4242/users/pu-erh').then(response => {
            response.json().then(data => {
                    this.setState({user : data});
            })
    })
    }

    componentDidMount() {
        this.getUser()
    }
    
    
    render(){
        const user = this.state.user
        // const login = this.state.user
    return (
        <div className="divUser" >
            User : 
            <p >
                {JSON.stringify(user)}
            </p>
        </div> 
  );
}
}
export default User;