import React from 'react';
import logo from './logo.png';
import arrow from './Arrow.png';
import './App.css';
import { useRef, useLayoutEffect } from 'react'

const isBrowser = typeof window !== `undefined`

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

const Banner = (props) => {
    return(
        <>
            <div class="banner">
                <img
                    src={logo}
                    alt="Alex Yang logo"
                    onClick={
                        function() {
                            window.location.href = 'https://theuncleofalex.github.io/about-me';
                        }
                    }
                />
                <div class="links">
                    <a href="#">Achievements</a>
                    <a href="#">About</a>
                    <a href="#" class="primary-link"><span>Contact</span></a>
                </div>
            </div>
        </>
    );
};

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
};

class Text extends React.Component {
    // eslint-disable-next-line no-useless-constructor
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
    // eslint-disable-next-line no-useless-constructor
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

const ScrollButton = (props) => {
    const isHidden = () => {return props.scrollPos < -50;};
    const className = "scroll " + (isHidden() ? "hide" : "show");
    const scrollBadge = (
        <div class={className}>
              <div className="scroll-ripple"/>
              <div class="scroll-badge">
                  <img src={arrow} alt="scroll down arrow"/>
              </div>
        </div>
    );
    return(
      <>
          {scrollBadge}
      </>
    );
};

const Footer = (props) => {
    return(
      <footer>
        <h1>Let's Get In Touch!</h1>
          <div class="contact">Contact me!</div>
      </footer>
    );
};

function App() {
    const [scrollPos, setScrollPos] = React.useState(true);
    useScrollPosition(({ prevPos, currPos }) => {
      setScrollPos(currPos.y);
    }, [scrollPos]);
    return (
    <>
        <Banner/>
        <main>
            <Images/>
            <Text/>
        </main>
        <ScrollButton scrollPos={scrollPos}/>
        <Footer/>
    </>
  );
}

export default App;
