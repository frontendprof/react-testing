import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";




class App extends React.Component{

  
  state={lat:null,long:null,errMsg:''};


  componentDidMount(){

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat:position.coords.latitude,long:position.coords.longitude}),
      err=>this.setState({errMsg:err.message})
      
    );
  }

 

  renderContent(){

    if(this.state.errMsg && !this.state.lat && !this.state.long){
      return <div>Error: {this.state.errMsg}</div>
    }
    

    if(!this.state.errMsg && this.state.lat &&this.state.long){
      return <SeasonDisplay lat={this.state.lat} long={this.state.long} />           

    };

    return <Spinner msg={"Please accept location request"}/>;

  }

  render(){  

    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    )    
    
  }
}






ReactDOM.render(<App />,  document.getElementById('root'));
