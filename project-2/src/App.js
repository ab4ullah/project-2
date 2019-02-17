import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  state = {
    listData:{
      note:''
     },
  ListItem:[
   
  ]
}
updateForm = (event) =>{
  // get the value the user typed
  const newData = (event.target.value);
  // get the orginal state
  const OriginalState = this.state.listData;
  // make a copy of orginal state
  this.setState(OriginalState)
  // make the copy with the data the user typed
  const copy = Object.assign({},OriginalState);
  const key = event.target.name;
  copy[key] = newData
  
  // update the states with the new copy
  this.setState({
    listData:copy
  })
}

submitForm = (event) =>{
  event.preventDefault()
  console.log(this.state.listData);
  const copy = this.state.ListItem.slice(0)
  
    if (this.state.listData.note !== ''){
      copy.push(this.state.listData)
      
      this.setState({
        ListItem:copy,
        listData:{
        note:''
        }
      })
    }
    else{
      console.log("type someting");
    }
    
 }
 
  render() {
    const NotesList = this.state.ListItem.map((list) => {
      return <List listi={list}/>;
    })
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type='text' name='note' placeholder="what you will do next" onChange={this.updateForm} value={this.state.listData.note} />
          <button type = 'submit'>save Note</button>
        </form>
       {NotesList}
      </div>
    );
  }
}

export default App;
