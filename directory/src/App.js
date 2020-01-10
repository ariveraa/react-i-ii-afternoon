import React, {Component} from 'react';
import './App.css';
import data from './data'
import Person from './Components/Person'
import Buttons from './Components/Buttons'

class App extends Component {
  constructor(){
    super()
    this.state = {
      directory : [...data],
      index:0, 
     
    }
    this.nextPerson = this.nextPerson.bind(this)
    this.previousPerson = this.previousPerson.bind(this)
  }

nextPerson(){
  this.setState({index: this.state.index + 1})
}

previousPerson(){
  this.setState({index:this.state.index - 1 })
}


  render(){
    return (
   
      <div className="App">
        <header>
          <h1 className = 'home'>Home</h1>
        </header>
        <div>
        <Person person = {this.state.directory[this.state.index]} index = {this.state.index}/>
        <Buttons nextFn = {this.nextPerson} previousFn = {this.previousPerson} index = {this.state.index}/>
        </div>
      </div>
    );
  }
  
}

export default App;
