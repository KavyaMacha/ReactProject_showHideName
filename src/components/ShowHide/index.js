import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameVisible: false,
    isLastNameVisible: false,
  }

  toggleFirstName = () => {
    this.setState(prevState => ({
      isFirstNameVisible: !prevState.isFirstNameVisible,
    }))
  }

  toggleLastName = () => {
    this.setState(prevState => ({
      isLastNameVisible: !prevState.isLastNameVisible,
    }))
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state

    return (
      <div className="show-hide-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button
            className="toggle-button"
            onClick={this.toggleFirstName}
            type="button"
          >
            Show/Hide Firstname
          </button>
          {isFirstNameVisible && <p className="name">Joe</p>}
        </div>
        <div className="button-container">
          <button
            className="toggle-button"
            onClick={this.toggleLastName}
            type="button"
          >
            Show/Hide Lastname
          </button>
          {isLastNameVisible && <p className="name">Jonas</p>}
        </div>
      </div>
    )
  }
}

export default ShowHide
