import React, { Component } from 'react';
import './App.css';


class List extends Component {
  // completed state that used in checked function
  state = {
    completed: 'false'
  }
  // checked function to check if the user click on text change toogle ( set false or completed value )
  checked = () => {
    // if (this.state.completed === 'false') {
    //   this.setState({ completed: 'completed' })
    // } else {
    //   this.setState({ completed: 'false' })
    // }

    if (this.props.listitems.complete === 'false') {
      this.props.updateCompleteList( 'completed' , this.props.id  )
      this.setState({ completed: 'completed' })

    } else {

      this.props.updateCompleteList( 'false' , this.props.id  )
      this.setState({ completed: 'false' })
    }


  }

  render() {
    return (

      // ruturn as row with three columns
      <tr>
        {/* ruturn id that pass from the map and put it on the cell and apply the style if the user click on the second cell */}
        <td className={this.props.listitems.complete}>{this.props.id + 1}</td>
        {/* ruturn the array vlaue (note) that pass from the map and put it on the cell and apply the style if the user click on the text */}
        <td onClick={this.checked}> <span className={this.props.listitems.complete}>{this.props.listitems.note}</span>  </td>
        {/* if the user click on X you will use the remove functio (this function is in app.js and we pass the note as parmeter) */}
        <td><span role="img" aria-label="delete" onClick={() => this.props.remove(this.props.listitems.note )} >❌</span></td>
      </tr>
    );
  }
}

export default List;
