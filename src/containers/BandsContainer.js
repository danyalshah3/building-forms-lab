import React, { Component } from 'react'
import BandInput from '../components/BandInput'

import { connect } from 'react-redux'

class BandsContainer extends Component {

  componentDidMount(){
    console.log(this.props.bands)
  }
   renderBands = () => this.props.bands.map((band) => <li key={band.id} >{band.name}</li>)
  render() {
    return (
      <div>
        <ul>
        {this.renderBands()}
        </ul>
        
         <BandInput addBand={this.props.addBand}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", payload: name })
})

 export default  connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

// connect(mapStateToProps, mapDispatchToProps)