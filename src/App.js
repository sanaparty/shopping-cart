import React, { Component } from "react";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'ash' 
    };
  this.myfunct = this.myfunct.bind(this);
  }
  myfunct() {
    if(this.state.name=='ash')
    this.state.name = 'srk'
    else
      this.state.name='ash'
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.myfunct}>Clickuuu</button>
      </div>
    );
  }
}
export default App;
