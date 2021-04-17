class Counter extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <p>Kalkulator</p>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.querySelector(`#root`));
