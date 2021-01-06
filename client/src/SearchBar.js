import React,{Component} from 'react';
import './SearchBar.css';
/*
const SearchBar = ({keyword,setKeyword}) => {
    
  return (
    <input className="searchBar" 
     //key="random1"
     value={keyword}
     placeholder={"Enter a username Github"}
     let onChange={(e) => setKeyword(e.target.value)}
     

    />
  );
}
*/
class SearchBar extends Component {
// const SearchBar = (value) =>{+

    // constructor(props) {
    //     super(props)
    //     this.searchValue = React.createRef()
    // }
    render(){

        return(
            <div>

                <input type="text" className="searchBar"
            placeholder ="Enter a username Github" 
            ref={this.props.searchValue}
            />
                <input type="submit"></input>
            </div>
            );
        };
    }
console.log(SearchBar)
  
export default SearchBar


//const BarStyle = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem",align :"center"};