import React, { Component } from 'react'
import BandInput from '../components/BandInput'

import { connect } from 'react-redux'

class BandsContainer extends Component {


  renderBands = () => this.props.bands.map((name, id) => <BandInput key={id} text={name} />)
  render() {
    return (
      <div>
        <li>
        {this.renderBands()}
        </li>
        
         {/* <BandInput addBand={this.props.addBand}/> */}

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