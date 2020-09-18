import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login'
import Home from './Home/Home';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      activeRout:0
    }
  }
  changeRout(rout){
    this.setState({activeRout:rout});
  }
  render(){
    let {activeRout}=this.state;

  return (
    <div className="App">
     
     {activeRout===0 && <Login onRouteChange={this.changeRout.bind(this)}></Login>}
        
     {activeRout===2 && <Home></Home>}
     
      
    </div>
  );
}
}

export default App;
