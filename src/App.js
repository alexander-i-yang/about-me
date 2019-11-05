import React from 'react';
import logo from './logo.png';
import './App.css';

const Banner = (props) => {
    return(
        <>
            <div class="banner">
                <img src={logo}/>
            </div>
        </>
    );
}

let images = ["myself", "Hangouts", "scio", "robotics"];

class Name extends React.Component {
  constructor(props) {super(props);}

  render() {
    return (
        <div class="my-name">
          {this.props.name}
        </div>
    )
  }
}

const Description = (props) => {
    return(
        <div class="description">
            {props.text}
        </div>
    );
}

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="text-con">
            <div class="text">
                <header class="main-header">
                    I'm<Name name="Alex Yang"/>
                </header>
                <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nulla massa. Maecenas finibus vehicula aliquet."/>
            </div>
        </div>
    )
  }
}

class Images extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let imageCards = images.map(imageName => {
          return(
              <div className="pseudo-img" id={imageName}>
                  {imageName}
              </div>
          )
      });

      return (
        <div class="images">
            {imageCards}
        </div>
    )
  }
}

// function ScrollButton = (props) => {
//     return(
//       <a href="#section02"></a>
//     );
// }

const Footer = (props) => {
    return(
      <footer>
        <h1>Let's Get In Touch!</h1>
          <div class="contact">Contact me!</div>
      </footer>
    );
}

function App() {
  return (
    <>
        <Banner/>
        <main>
            <Images/>
            <Text/>
            {/*<ScrollButton/>*/}
        </main>
        <Footer/>
    </>
  );
}

export default App;
