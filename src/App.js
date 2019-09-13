import React, { Component } from "react";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'' ,
      num:1
    };
  this.myfunct = this.myfunct.bind(this);
  this.mysanka = this.mysanka.bind(this);
  this.myfunct3 = this.myfunct3.bind(this);
  }
  myfunct() {
    this.state.name='sru'
    this.state.num+=1;
    this.forceUpdate();
   }

   mysanka() {
    this.state.name='ash'
    this.state.num+=1;
     this.forceUpdate();
  }

   myfunct3() {
    this.state.name='sne'  
    this.state.num+=1;
    this.forceUpdate();
  }
  
    
  
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.num}</p>
        <button onClick={this.myfunct}>Clickuuu</button>
        <button onClick={this.mysanka}>Clickuuu me twice</button>
        <button onClick={this.myfunct3}>Clickuuu me thrice</button>
      </div>
    );
  }
}
export default App;
