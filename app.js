class Counter extends React.Component {
  state = {
    result: 1,
    ratio: 2,
  };

  handleClick = () => {
    this.setState((state) => ({
      result: state.result * state.ratio,
    }));
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>
          Kalkulator mnoży przez dwa, jeśli suma jest mniejsza niż 1000. Po przekroczeniu 1000
          kalkulator mnoży przez 0.5, aż osiągnie sumę mniejszą niż jeden. Wtedy ponownie zaczyna
          mnożyć przez dwa.
        </p>
        <button onClick={this.handleClick}>{`Pomnóż przez ${this.state.ratio}`}</button>
        <h1>Wynik: {this.state.result}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.querySelector(`#root`));
