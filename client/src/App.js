import logo from './logo_git.png';
import TopNav from './TopNav.js'
import React,{ Component } from "react";
import './App.css'
import SearchBar from './SearchBar.js'
import User from './User.js'

class App extends Component {

    constructor(props) {
        super(props)
        this.searchValue = React.createRef()
    }

    render(){
    return (
        <div className="App">
            <header>
            <TopNav />
            </header>
            <img src = {logo} className="gitlogo" alt='logo'/> 
            <SearchBar searchValue={this.SearchValue}/>
            <button variant="secondary" size="lg" active> Search</button>
            <User searchValue={this.SearchValue}/>
        </div> 
  );
}
}
export default App;