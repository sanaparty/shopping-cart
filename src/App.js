import React, { Component } from "react";
import TableComp from "../src/components/TableComp";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myFirstcode:[]
    };
    this.apiCall=this.apiCall.bind(this);
  }
  apiCall() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({myFirstcode:json})
    )
  this.forceUpdate();
  }

  
  render() {
    return (
      <div>
        <button onClick ={this.apiCall}>Call Api</button>
       <TableComp data={this.state.myFirstcode}/>
      </div>
    );
  }
}
export default App;
