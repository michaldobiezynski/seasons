import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spiner from './Spinner';

class App extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = { lat: null, errorMessage: '' };
  //   }

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message }),
    );
    console.log('My component was rendered to the screen');
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rerendered!');
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spiner message='Please accept location request.' />;
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
