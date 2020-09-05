import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component{

  constructor(props){
    super(props);

    this.state={lat:null,long:null,errMsg:''};


    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat:position.coords.latitude,long:position.coords.longitude});
      },
      err=>{
        this.setState({errMsg:err.message})
      }
    );
  }

  render(){  

    return (

      <div>
      Latitude: {this.state.lat}
      <hr></hr>
      Longitude: {this.state.long}
      <hr/>
      Error:{this.state.errMsg}
      </div>
    );

  }
}






ReactDOM.render(<App />,  document.getElementById('root'));
