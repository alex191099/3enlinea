import { useState } from 'react'
import confetti from "canvas-confetti"
import './App.css'
import { TURNOS } from './constantes.js'
import { Cuadrado } from'./componentes/Cuadrado.jsx'
import { checkganador, checkEmpate } from './logica/board.js'
import { ModalGanador } from './componentes/ModalGanador.jsx'
import { guardar_local, resetear_local } from './logica/guardar.js'

function App() {

  const [board, setBoard] = useState(() => {
      const board_guardado = window.localStorage.getItem('tablero')
      if(board_guardado) return JSON.parse(board_guardado)
      return Array(9).fill(null)
    }
  )

  const [turno, setTurno] = useState(() => {
      const turno_guardado = window.localStorage.getItem('turno')
      return turno_guardado ?? TURNOS.X
    }
  )
    
  const [ganador, setGanador] = useState(null)
  //función actualizar tablero
  const actualizartablero = (index) => {
    if (board[index] || ganador ) return
    const newboard = [...board]
    newboard[index] = turno
    setBoard(newboard)

    const newTurn = turno === TURNOS.X ? TURNOS.O : TURNOS.X
    setTurno(newTurn)

    guardar_local({
      tablero: newboard,
      turno: newTurn
    })

    const newganador = checkganador(newboard)
    if(newganador){
      confetti()
      setGanador(newganador)
      //alert('miau miau miau miau')
    }else if(checkEmpate(newboard)){
      setGanador(false)
    }

  }

  const resetear = () => {
    setBoard(Array(9).fill(null))
    setTurno(TURNOS.X)
    setGanador(null)
    resetear_local()
  }

  return (
    <main className='board'>
      <h1>3 en raya</h1>
      <button onClick={resetear}>Reset</button>
      {/* ANt no aprende lo suficiente, se distrae haciendo crucigramas. Espero que su trabajo de fin de grado sea de mi agrado porque yo soy parte del profesorado que corrige ese trabajo. */}
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Cuadrado
                index={index}
                actualizartablero={actualizartablero}
              >
                {board[index]}
              </Cuadrado>
            )
          })
        }
      </section>
      <section className="turn">
        <Cuadrado isSelected={turno === TURNOS.X}>
          {TURNOS.X}
        </Cuadrado>
        <Cuadrado isSelected={turno === TURNOS.O}>
          {TURNOS.O}
        </Cuadrado>
      </section>
      <ModalGanador ganador={ganador} reset={resetear}></ModalGanador>
    </main>
  )
}

export default App
