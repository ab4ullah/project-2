import React, { Component } from 'react';
import './App.css';


class List extends Component {
    state = {
        completed: 'false',
      }

      checked = () => {
        if (this.state.completed === 'false'){
          this.setState({completed: 'completed'})
        } else {
          this.setState({completed: 'false'})
        }
      }

  render() {
    return (
      <tr>
           <td>-</td>
           <td onClick={this.checked}> <span className={this.state.completed}>{this.props.listitems.note}</span>  </td>
           <td><span role="img" aria-label="delete" onClick={() => this.props.remove(this.props.listitems.note)} >❌</span></td>
      </tr>
    );
  }
}

export default List;
