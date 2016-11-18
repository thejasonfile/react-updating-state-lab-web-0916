const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor(){
    super();
    this.increaseBitrate = this.increaseBitrate.bind(this);
    this.lowerResolution = this.lowerResolution.bind(this);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  increaseBitrate(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    })
    
  }

  lowerResolution(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
    })
    
  }

  render(){
    return(
      <div>
        <button className='bitrate' onClick={this.increaseBitrate}>Increase Bitrate</button>
        <button className='resolution' onClick={this.lowerResolution}>Lower Resolution</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger;