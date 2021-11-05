// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  
  
   
    state = {
      name: ""
    }


    handleOnChange(event) {
      this.setState({
        name: event.target.value,
      });
    }

 handleSubmit = (e) => {
 e.preventDefault()
 this.props.addBand(this.state)
 this.setState({
  name: "",
});
 }

  render() {
    return(
      <div>
       <form onSubmit={(e) => this.handleSubmit(e)}>
         <input type="text" value={this.state.name} onChange={(event) => this.handleOnChange(event)}/>
         <input type="submit" value ="submit" />
       </form>
      </div>
    )
  }
}








export default BandInput
