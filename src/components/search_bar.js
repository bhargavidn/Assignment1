import React,{ Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getAllPlanets } from '../actions/action_planets';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state= { term:'' }
    this.onInputChange=_.debounce(this.onInputChange,1000);
  }
  onInputChange(searchTerm){
   this.setState({ term:searchTerm });
   this.props.getAllPlanets(this.state.term);
  }
  onSubmit(){
    event.preventDefault();
     this.props.getAllPlanets(this.refs.searchinp.value);
  }
  render(){
     return(
         <div className="search-Bar">
           <nav className="navbar navbar-light bg-faded">
               <form className="form-inline">
                     <input className="form-control mr-sm-2" type="text"
                     placeholder="Enter the planet"
                     onChange={event => this.onInputChange(event.target.value)} ref="searchinp"/>
                     
              </form>
            </nav>
        </div>
     )
  }
}
export default connect(null,{getAllPlanets})(SearchBar);
