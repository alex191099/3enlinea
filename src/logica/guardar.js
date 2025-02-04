//guardar
export const guardar_local = ({tablero, turno}) => {
    window.localStorage.setItem('tablero', JSON.stringify(tablero))
    window.localStorage.setItem('turno', turno)
}

//resetear
export const resetear_local = () => {
    window.localStorage.removeItem('tablero')
    window.localStorage.removeItem('turno')
}