import React,{ Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getAllPlanets } from '../actions/action_planets';
import { logout } from '../actions/action_login';
import SearchBar from './search_bar';


class SearchPlanet extends Component{
  constructor(props){
    super(props);
    this.state= {
      showPlanet:{}
     }
  }
  componentDidMount(){
    //call action creator to fetch the planets
    this.props.getAllPlanets();
  }
  fetchDet(planet){
    let newPlanets=planet;
    newPlanets.showsts=true;
    this.setState({ showPlanet:newPlanets });
  }
  renderPlanets(){
    if(Object.keys(this.props.allPlanets).length==0){
      return <div> <h4>Loading...</h4> </div>
    }

    const style={'display':this.state.showResults?'block':'none'}
    return _.map(this.props.allPlanets,(planet)=>{
      return(
          <li className="list-group-item" key ={planet.name}
          onClick={this.fetchDet.bind(this,planet)}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3>{ planet.name }</h3>
                </div>
              </div>
              </div>
                {((planet.name==this.state.showPlanet.name)&&this.state.showPlanet.showsts)?
                  <div className="planet-detail"><h5>Population:{planet.population}</h5>
                  <h5>Diameter:{planet.diameter}</h5>
                  <h5>Surface Water:{planet.surface_water}</h5>
                  </div>:null}


          </li>
      )
    })
  }
  logOut(name){
      this.props.logout(name);
      this.props.history.push("/");

  }
  render(){
    const { allPlanets,userDetail }= this.props;
    const name=userDetail.userData.length>0?userDetail.userData[0].name:'';

    return(
      <div>
        <div className="container-fluid page-header">
          <div className="row">
                <div className="col">
                  <h3 className="text-white">Welcome {name} </h3>
                </div>
                <div className="col pull-right">
                    <button  onClick={this.logOut.bind(this,name)}>
                      <i className="fa fa-sign-out"></i>
                    </button>
                </div>
            </div>
        </div>
        <SearchBar />
        <div className="container planet-list">
          <ul className="list-group">
            {this.renderPlanets()}
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    allPlanets:state.allPlanets,
    userDetail:state.userData
  }
}
export default connect(mapStateToProps,{logout,getAllPlanets})(SearchPlanet);
