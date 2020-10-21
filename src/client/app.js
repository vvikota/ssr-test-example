import React, { Component } from 'react';

class App extends Component {
  render() {
    const names = this.props.data;
    const secondPerson = names[1]

    return (
      <div>
        Hello {secondPerson}
      </div>
    );
  }
}

export default App;