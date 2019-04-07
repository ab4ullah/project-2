import React, { Component } from 'react';
// import css file
import './App.css';
// import List class from List file
import List from './List';
// import sweetalert library
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

class App extends Component {

  state = {
    listData: {
      note: '',
      complete: 'false'
    },
    // the array for task
    ListItem: [

    ]
  }

  // this function for take the user value and set the data to the states
  updateForm = (event) => {
    // take the user value and save it in newData varibal
    const newData = (event.target.value);
    // take a copy of the orginal object
    const OriginalState = this.state.listData;
    // assign the copy
    const copy = Object.assign({}, OriginalState);
    // take the name of input 
    const key = event.target.name;
    // assign the new data to the copy
    copy[key] = newData

    // set the data to the list data
    this.setState({
      listData: copy
    })
  }
  // this function for make a copy from array and push the new value if the input value it is not empty
  submitForm = (event) => {
    // do not refrese the page
    event.preventDefault()
    // take a copy of the array
    const copy = this.state.ListItem.slice(0)
    //in cause the use not type empty string push the data to array
    if (this.state.listData.note.trim() !== '') {
      // push the data to the array
      copy.push(this.state.listData)
      // set state empty to be ready to next vlaue
      this.setState({
        ListItem: copy,
        listData: {
          note: ''
        }
      })
    }
    //
    else {
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
  // this function for remove the all array values 
  clearAll = (event) => {
    event.preventDefault()
    this.setState({
      ListItem: []
    })
  }

  updateCompleteList = (isComplete , index) =>  {

    
    console.log(isComplete , index , "\n\n\n\n ***** ")

    console.log(this.state.ListItem )
    const copy = this.state.ListItem.slice(0)

    copy[index].complete = isComplete ; 

    this.setState({
      ListItem: copy 
    })
  }
  // this function for remove one vlaue
  removeItem = (list ) => {

  
    // use filter go throw loop on array to find the clicked vlaue to remove it
    const newListItem = this.state.ListItem.filter(item => item.note !== list);

    // update the array after the removed
    this.setState({
      ListItem: newListItem
    })

    console.log("after filtering " , this.state.ListItem)

  }


  // removeCompletedItem = (list) =>{
  //   if (this.state.completed === 'completed'){
  //     const CompeletedRemove = this.state.ListItem.filter(item => item.note !== list);
  //  this.setState({
  //    ListItem:CompeletedRemove
  //  })

  //   }
  // }

  render() {
    // use map to pass the array value to list componets also pass the remove value and id
    const NotesList = this.state.ListItem.map((list, index) => {
      return <List key={index} id={index} listitems={list} remove={this.removeItem} updateCompleteList={this.updateCompleteList} />;

    })
    // window.localStorage.setItem("ListItem", JSON.stringify(this.state.ListItem));
    // // var getdata = localStorage.getItem('ListItem');
    // // console.log(getdata);
    // // checked if the array is empry show the empty div 
    let output;
    if (this.state.ListItem.length === 0) {
      output = <div id="empty"><br /> <hr /> <br /> <hr /><h2>  You have no task to do </h2><hr /> <br /> <hr /> <br /></div>
      // else show the div table Contents
    } else {
      output = <div id="tableContents">
        <hr />
          <div className="vl"></div>
          <div className="vl2"></div>
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
        <hr />
        <button id="ClearBtn" onClick={this.clearAll} >clear list </button>
      </div>
    }


    return (
      // mainDiv is wrapper all contents and shadow the contents 
      // form use to submit data and input to update data
      // button is hidden
      // output variable from the render
      
        <div id='mainDiv'>
          <header>
            <h1><span id="firstText">My to do</span> <span id="twoText">list</span></h1>
            <form onSubmit={this.submitForm}>
              <input type='text' name='note' placeholder="what you will do next" onChange={this.updateForm} value={this.state.listData.note} />
              <button id="addbtn" type='submit'>Add</button>
            </form>
          </header>
          {output}
        </div>
      
    );
  }
}

export default App;
