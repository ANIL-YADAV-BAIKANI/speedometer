import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  acclerate = () => {
    this.setState(prevstate => {
      if (prevstate.count < 200) {
        return {count: prevstate.count + 10}
      }
    })
  }
  break = () => {
    this.setState(prevstate => {
      if (prevstate.count > 0) {
        return {count: prevstate.count - 10}
      }
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <div className="container">
          <h1 className="heading-2">Speed is {count}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <button className="button-1" onClick={this.acclerate}>
            Accelerate
          </button>

          <button className="button-2" onClick={this.break}>
            ApplyBreak
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
