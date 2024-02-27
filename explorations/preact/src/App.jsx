import { Component, createRef, h } from 'preact';
import { claim } from '../../../index.js';
import Domponent1 from 'domponent1';
import Domponent2 from 'domponent2';
import Domponent3 from 'domponent3';
class Color extends Component {
  constructor(props) {
    super(props);
    // Create a ref to store the DOM element
    console.log('calling createRef')
    this.myElement = createRef();
  }

  handleChange = (event) => {
    const target = claim(domPowers, event.target);
    // Read the color name from the text field and set it as the color of the DOM element
    const color = target.value;
    const elm = claim(domPowers, this.myElement.current);
    if (elm) {
      elm.style.color = color;
    }
  };

  handleBlur = (event) => {
    // Optionally, you can have specific logic for onBlur or reuse handleChange
    this.handleChange(event);
  };

  render() {
    return (
      <div>
        <h1 ref={this.myElement}>Change My Color</h1>
        <input type="text" onChange={this.handleChange} onBlur={this.handleBlur} placeholder="Enter a color" />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    // Create a ref to store the DOM element
    this.state = {
      counter: 0
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <div>
        <Color />
        <hr></hr>
        <Domponent1 id={"1"} />
        <hr></hr>
        <Domponent2 id={"2"} />
        <hr></hr>
        <Domponent3 id={"3"} />
        <hr></hr>
        <button onClick={this.handleButtonClick}>Rerender</button>
        <i>rerenders: {this.state.counter}</i>
      </div>
    );
  }
}



export default App;