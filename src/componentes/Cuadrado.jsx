export const Cuadrado = ({children, isSelected, actualizartablero, index }) => {
  //Propiedades
  const clase = `square ${isSelected ? 'is-selected' : ''}`

  const click = () => {
    actualizartablero(index)

  }
  //retorno
  return (
    <div onClick={click} className={clase}>
      {children}
    </div>
  )
}