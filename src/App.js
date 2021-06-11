import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateReminder from "./CreateReminder"
import Reminder from "./Reminder"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      createReminderVisible:false,
      reminders:JSON.parse(window.localStorage.getItem("reminders")) || []
    }
  }
  handleAddReminder=()=>{
    this.setState({
      createReminderVisible:true
    })
  }
  addToReminder=(reminder)=>{
    let reminders = this.state.reminders
    reminders.push(reminder)
    this.setState({
      reminders:reminders
    })
    window.localStorage.setItem("reminders",JSON.stringify(reminders))
  }
  hideAddReminder=()=>{
    this.setState({
      createReminderVisible:false
    })

  }
  render(){
    return(
      <div>
      <div class="reminderContainer">{this.state.reminders.map((reminder)=>(<Reminder reminder={reminder}/>))}</div>
     { this.state.createReminderVisible && <CreateReminder addToReminder={this.addToReminder} hideAddReminder={this.hideAddReminder}/>}
      {!this.state.createReminderVisible && <div class="plusButton" onClick={this.handleAddReminder}>+</div>}

      </div>
      )
  }
}

export default App;
