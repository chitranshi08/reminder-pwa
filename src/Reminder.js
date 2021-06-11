import React from 'react';
import logo from './logo.svg';
import './App.css';

class Reminder extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div class="reminder">
      <h3>{this.props.reminder.heading}</h3>
      <div>{this.props.reminder.content}</div>
      <div>{this.props.reminder.date}</div>
       <div>{this.props.reminder.time}</div>

      </div>
      )
  }
}

export default Reminder;