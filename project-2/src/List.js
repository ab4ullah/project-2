import React, { Component } from 'react';
import './App.css';


class List extends Component {
    state = {
        completed: 'false'
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
        <div>
         <ul>
           <li onClick={this.checked}  > <span className={this.state.completed}>{this.props.listi.note}</span>  <span onClick={() => this.props.remove(this.props.listi.note)} >✘</span></li>
         </ul>
        </div>
    );
  }
}

export default List;
