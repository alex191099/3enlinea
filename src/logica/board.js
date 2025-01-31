import { COMBI } from '../constantes.js'

export const checkganador = (checkboard) => {
    for (const combinacion of COMBI) {
      const [a, b, c] = combinacion
      if(
        checkboard[a] &&
        checkboard[a] === checkboard[b] &&
        checkboard[a] === checkboard[c]
      ){
        return checkboard[a]
      }
    }
    return null
}

export const checkEmpate = (checkboard) => {
  return checkboard.every((cuadrado) => cuadrado !== null)
}