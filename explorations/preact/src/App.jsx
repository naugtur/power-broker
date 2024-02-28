import { Component, h } from 'preact';
import Domponent1 from 'domponent1';
import Domponent2 from 'domponent2';
import Domponent3 from 'domponent3';

class Misfeatures extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.base.innerHTML = 'stop me if you can';
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={'stop me if you can'}>misfeatures blocked</div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
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
      <section>
        <button onClick={this.handleButtonClick}>Rerender</button>
        <i> rerenders: {this.state.counter}</i>
        <hr></hr>
        <Domponent1 id={"1"} />
        <Domponent2 id={"2"} />
        <Domponent3 id={"3"} />
        <Misfeatures />
      </section>
    );
  }
}



export default App;