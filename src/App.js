import './App.css';
import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    text: '',
    textlength: 0

  }
  textChangeListener = (event) => {
    let textLen = event.target.value.length;
    //console.log('textLen ='+textLen);
    this.setState({
      text: event.target.value,
      textlength: textLen
    })
  // cannot use in react -  Line 19:4:  
  // Do not mutate state directly. 
  // Use setState()  react/no-direct-mutation-state  
  //  this.state.text = event.target.value;
  //  this.state.textlength = textLen;
  }

  deleteCharHandler = (charIndex) => {
    console.log('charIndex '+charIndex)
    const charArray2 = [...this.state.text];
    charArray2.splice(charIndex, 1);
    console.log('charArray2 '+charArray2)
    const textModified = charArray2.join('');
    this.setState({text: textModified, textlength: textModified.length});
    
  }

  render() {
    const charArray = this.state.text.split('');
    var charList = (
      <div><ol>{
        charArray.map((ch1, index) => <CharComponent 
        click={() => this.deleteCharHandler(index)} charEach={ch1} />)
      }
      </ol>
      </div>

    )
    return (
      <div className="App" >
        <input type="text" onChange={this.textChangeListener} />
        <p> text length is {this.state.textlength}</p>
        <p> {this.state.text}</p>
        <ValidationComponent textLength={this.state.textlength}/>
        {charList}
      </div>

    );
  }

}


export default App;
