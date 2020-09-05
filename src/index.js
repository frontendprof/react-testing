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

    if(this.state.errMsg && !this.state.lat && !this.state.long){
      return <div>Error: {this.state.errMsg}</div>
    }
    

    if(!this.state.errMsg && this.state.lat &&this.state.long){
      return(
         <div>
         Latitude:{this.state.lat}
         <hr/>
         Longitude:{this.state.long}
         </div>
         );  

    };

    return <div>Loading ...</div>
    
  }
}






ReactDOM.render(<App />,  document.getElementById('root'));
