const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  increaseCount() {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    return (
      <div style={styles}>
        <div>
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}


ReactDOM.render(
    // <h1>Hello React</h1>,  // элемент, который мы хотим создать
    <App />,
    document.getElementById("root")    // где мы этот элемент хотим создать
)