const React = require('react');

class DigitalClicker extends React.Component {
  constructor(){
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      timesClicked: 0
    }
  }

  clickHandler(){
    this.setState({
      timesClicked: (this.state.timesClicked + 1)
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

module.exports = DigitalClicker;