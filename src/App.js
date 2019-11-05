import React from 'react';
//import niagra from './niagra.jpg';
import './App.css';

class Name extends React.Component {
  constructor(props) {super(props);}

  render() {
    return (
        <span class="my-name">
          {this.props.name}
        </span>
    )
  }
}

class Left extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="left">
          <header class="main-header">
            I'm <Name name="Alex Yang"/>
          </header>
        </div>
    )
  }
}

class Right extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="right">
            <div class="pseudo-img">Myself</div>
        </div>
    )
  }
}


function App() {
  return (
    <main>
      <Left/>
      <Right/>
    </main>
  );
}

export default App;
