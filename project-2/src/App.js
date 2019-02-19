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
  // take the user value and save it in newData varibal
  const newData = (event.target.value);
  // take a copy of the orginal object
  const OriginalState = this.state.listData;
  // assign the copy
  const copy = Object.assign({},OriginalState);
  // take the name of input 
  const key = event.target.name;
  // assign the new data to the copy
  copy[key] = newData
  
  // set the data to the list data
  this.setState({
    listData:copy
  })
}

submitForm = (event) =>{
  // do not refrese the page
  event.preventDefault()
  // take a copy of the array
  const copy = this.state.ListItem.slice(0)
    //in cause the use not type empty string push the data to array
    if (this.state.listData.note.trim() !== ''){
      // push the data to the array
      copy.push(this.state.listData)
      // set state empty to be ready to next vlaue
      this.setState({
        ListItem:copy,
        listData:{
        note:''
        }
      })
    }
    //
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
      output = <div id="empty"><br/> <hr/> <br/> <hr/><h2>  You have no task to do </h2><hr/> <br/> <hr/> <br/></div>
      
    } else{
    output = <div id="tableContents">
    <hr/>
    <table>
    
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
     <hr/>
    <button id="ClearBtn" onClick={this.clearAll} >clear list </button>
    </div>
    }

    
    return (
      <div id='mainDiv'>
       <header>
          <h1><span id="firstText">My to do</span> <span id="twoText">list</span></h1>
          <form onSubmit={this.submitForm}>
            <input autofocus type='text' name='note' placeholder="what you will do next" onChange={this.updateForm} value={this.state.listData.note} />
            <button id="addbtn" type = 'submit'>Add</button>
          </form>
        </header>
        {output}
        
         
      </div>
    );
  }
}

export default App;
