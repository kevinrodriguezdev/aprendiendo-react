import "./index.css";
import { useState } from "react";
import { Square } from "./components/Square"
import confetti from "canvas-confetti"

//Turnos
const TURNS = {
  X: "✖️",
  O: "⭕",
};

//Combinaciones ganadoras
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


function App() {
  //Estado del tablero
  const [board, setBoard] = useState(Array(9).fill(null)); // null es que no hay ganador, false empate, true ganador
  //Estado del turno
  const [turn, setTurn] = useState(TURNS.X);
  //Estado del ganador
  const [winner, setWinner] = useState(null);

  //Comprobamos el ganador
  const checkWinner = (boardToCheck) => {
    //revisamos todas las condiciones ganadoras para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] && // 0 -> x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // si no hay ganador
    return null;
  };

  //Reseteamos el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  //Comprobamos si ha terminado el juego, si no hay espacios vacios en el tablero
  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  //Actualizamos el tablero
  const updateBoard = (index) => {
    //No dejamos actualizar la posicion si ya esta ocupada o hay ganador
    if (board[index] || winner) return;
    //Copiamos el tablero para actualizarlo de la copia
    const newBoard = [...board];
    //Actualizamos el nuevo tablero con el valor del turno
    newBoard[index] = turn;
    setBoard(newBoard);
    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner);

    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac toe</h1>
      <button onClick={resetGame}>Reiniciar</button>
      <section className="game">
        {/* Rellena el tablero con nulo y le asigna el index a cada celda */}
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false ? "Empate" : "Ganador"}</h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
