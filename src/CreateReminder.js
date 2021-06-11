import React from 'react';
import logo from './logo.svg';
import './App.css';

class CreateReminder extends React.Component{
constructor(props){
	super(props)
	this.state={
		reminderHeading:"",
		reminderContent:"",
		reminderDate:"",
		reminderTime:"",
		dateContainerVisible:false
	}
}
handleReminderHeading=(e)=>{
this.setState({
	reminderHeading:e.target.value
})
}
handleReminderContent=(e)=>{
	this.setState({
		reminderContent:e.target.value
	})
}
handleCheckButton=()=>{
	if(this.state.reminderHeading){
	this.setState({
		dateContainerVisible:true
	})	
	}
}
handleTime=(e)=>{
	this.setState({
		reminderTime:e.target.value
	})
}
handleDate=(e)=>{
	this.setState({
		reminderDate:e.target.value
	})
}
hideDateModal=()=>{
	this.setState({
		dateContainerVisible:false
	})
}
saveReminder=()=>{
	const reminder ={
		"heading":this.state.reminderHeading,
		"content":this.state.reminderContent,
		"date":this.state.reminderDate,
		"time":this.state.reminderTime
	}
	this.props.addToReminder(reminder)
	this.props.hideAddReminder()

	
}

  render(){
    return(
    	<div>
     <div class="inputContainer"> <input placeholder="Reminder Heading" onInput={this.handleReminderHeading} type="text"/>
      <div>
      	<textarea placeholder="Reminder Text" onInput={this.handleReminderContent}></textarea>
      </div>
      </div>
      <div class="plusButton" onClick={this.handleCheckButton}>&#10003;</div>
      
     { this.state.dateContainerVisible && <div class="modalBackground">
      	<div class="dateContainer">
      	<h3>When to remind?</h3>
      	<div><input onChange={this.handleDate} type="date"/></div>
      	<div><input onChange={this.handleTime} type="time"/></div>
      	<div class="buttonContainer">
      		<button onClick={this.hideDateModal}>Cancel</button>
      		<button onClick={this.saveReminder}>Save</button>
      	</div>

      	</div>
      </div>}
      </div>
      )
  }
}

export default CreateReminder;