import { Component, createRef, h } from 'preact';

class DomDom extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.myElement = createRef();
  }

  handleChange = (event) => {
    const target = domPowers.claim(domPowers, event.target);
    // Read the color name from the text field and set it as the color of the DOM element
    const color = target.value;
    this.setColor(color);
  };

  setColor = (color) => {
    const elm = domPowers.claim(domPowers, this.myElement.current);
    if (elm) {
      elm.style.color = color;
    }
  }

  handleColor = () => {
    this.setColor(['red', 'lightblue', 'green', 'yellow', 'orange', 'purple'][Math.floor(Math.random() * 6)])
  }

  handleFetch = (e) => {
    e.target.ownerDocument.ownerDocument.defaultView.fetch('https://example.com')
  }

  render() {
    return (
      <div>
        <h1 ref={this.myElement}>Component {this.id}</h1>
        <input type="text" onChange={this.handleChange} placeholder="color" />
        <button onClick={this.handleColor}>random color</button>
        <button onClick={this.handleFetch}>attempt fetch</button>
      </div>
    );
  }
}

export default DomDom;
