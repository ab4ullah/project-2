import React, { Component } from 'react';
import './App.css';
import List from './List';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


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
  
    if (this.state.listData.note.trim() !== ''){
      copy.push(this.state.listData)
      
      this.setState({
        ListItem:copy,
        listData:{
        note:''
        }
      })
    }
    else{
      const MySwal = withReactContent(Swal)
      MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        onOpen: () => {
          // `MySwal` is a subclass of `Swal`
          //   with all the same instance & static methods
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire(<p>Type what you want to do</p>)
      })
      
    }
    
 }

 clearAll = (event) => {
  event.preventDefault()
  this.setState({
    ListItem:[]
  })
}



removeItem = (list) => {
  
 const newListItem = this.state.ListItem.filter(item => item.note !== list);
 this.setState({
   ListItem:newListItem
 })
}


removeCompletedItem = (list) =>{
  if (this.state.completed === 'completed'){
    const CompeletedRemove = this.state.ListItem.filter(item => item.note !== list);
 this.setState({
   ListItem:CompeletedRemove
 })

  }
}

  render() {
    const NotesList = this.state.ListItem.map((list,index) => {
      return <List key={index} id={index} listitems={list} remove= {this.removeItem} />;
      
    })

    let output;
    if(this.state.ListItem.length === 0){
      output = <h2> list empty </h2>
    } else{
    output = <div><table border="1">
    <thead>
      <tr>
        <th >#</th>
        <th >Task</th>
        <th >Remove</th>
      </tr>
    </thead>
    <tbody>
   
 {NotesList}
 </tbody>
 
 </table>
    <button onClick={this.clearAll} >clear the list</button>
    </div>
    }

    
    return (
      <div id='mainDiv'>
        <h1><span id="firstText">My to do</span> <span id="twoText">list</span></h1>
        <form onSubmit={this.submitForm}>
          <input type='text' name='note' placeholder="what you will do next" onChange={this.updateForm} value={this.state.listData.note} />
          <button type = 'submit'>Add</button>
        </form>
        
        {output}
        
         
      </div>
    );
  }
}

export default App;
