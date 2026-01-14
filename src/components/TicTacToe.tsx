import { useState } from 'react'
import './TicTacToe.css'

type Player = 'X' | 'O' | null

const TicTacToe = () => {
    const [board, setBoard] = useState<Player[]>(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)

    const calculateWinner = (squares: Player[]): Player => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
            [0, 4, 8], [2, 4, 6] // diagonals
        ]
        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }

    const winner = calculateWinner(board)
    const isDraw = !winner && board.every(cell => cell !== null)

    const handleClick = (index: number) => {
        if (board[index] || winner) return

        const newBoard = [...board]
        newBoard[index] = isXNext ? 'X' : 'O'
        setBoard(newBoard)
        setIsXNext(!isXNext)
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setIsXNext(true)
    }

    const getStatus = () => {
        if (winner) return `${winner} wins!`
        if (isDraw) return "Draw!"
        return `${isXNext ? 'X' : 'O'}'s turn`
    }

    return (
        <div className="tictactoe">
            <div className="ttt-header">
                <span className="ttt-title">Tic Tac Toe</span>
                <button className="ttt-reset" onClick={resetGame}>↻</button>
            </div>
            <div className="ttt-board">
                {board.map((cell, i) => (
                    <button
                        key={i}
                        className={`ttt-cell ${cell ? `ttt-${cell.toLowerCase()}` : ''}`}
                        onClick={() => handleClick(i)}
                        disabled={!!cell || !!winner}
                    >
                        {cell}
                    </button>
                ))}
            </div>
            <div className="ttt-status">{getStatus()}</div>
        </div>
    )
}

export default TicTacToe
