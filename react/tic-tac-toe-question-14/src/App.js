import React, { Component } from "react";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: "X",
      squares: Array(9).fill(null),
      winner: null,
    };
  }

  handleClick(index) {
    if (this.state.squares[index] || this.state.winner) {
      return;
    }

    const squares = [...this.state.squares];
    squares[index] = this.state.currentPlayer;

    this.setState(
      {
        squares: squares,
        currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
      },
      () => {
        this.checkWinner();
      }
    );
  }

  checkWinner() {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      const squares = this.state.squares;

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        this.setState({
          winner: squares[a],
        });
        break;
      }
    }
  }

  renderSquare(index) {
    return (
      <button
        className="square"
        onClick={() => this.handleClick(index)}
        disabled={this.state.squares[index] || this.state.winner}
      >
        {this.state.squares[index]}
      </button>
    );
  }

  render() {
    const winner = this.state.winner ? `Winner: ${this.state.winner}` : null;

    return (
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          <div className="row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        <p>{winner}</p>
      </div>
    );
  }
}

export default App;
