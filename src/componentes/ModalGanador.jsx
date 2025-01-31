import { Cuadrado } from "./Cuadrado"


export function ModalGanador ({ganador, reset}) {
    
    if (ganador === null) return null

    const txt = ganador === false ? 'Empate' : 'Ganó: ' 

    return (
        <section className="winner">
            <div className="test">
                <h2>{txt}</h2>
                <h1>{ganador && <Cuadrado>{ganador}</Cuadrado>}</h1>
                <p></p>
                <button onClick={reset}>Reset</button>
            </div>
        </section>
    )
}