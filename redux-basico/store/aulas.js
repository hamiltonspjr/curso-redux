const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aulas/RESETAR_CURSO';

export const completarAula = (idAula) => ({
    type: COMPLETAR_AULA,
    payload: idAula
})

export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });

const aulas = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];


const reducer = (state = aulas, action) => {
    switch(action.type) {
        case COMPLETAR_AULA:
            return state.map(aula => aula.id === action.payload ? {
                ...aula,
                completa: true
            } : aula)
        case COMPLETAR_CURSO: 
        // solução errada pois não modifica o estado e sim retorna um novo array
            // return state.map(aula => ({
            //     ...aula,
            //     completa: true
            // }))
            state.forEach((aula) => aula.completa = true);

        case RESETAR_CURSO:
           state.forEach((aula) => aula.completa = false);
        default: 
            return state;
    }
}

export default reducer;