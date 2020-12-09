const initialState = {
    round: 1,
    firstElement: null,
    secondElement: null,
    cards: [
        {id: 1, group: 1, isFlipped: false, isOpened: false},
        {id: 2, group: 1, isFlipped: false, isOpened: false},
        {id: 3, group: 2, isFlipped: false, isOpened: false},
        {id: 4, group: 2, isFlipped: false, isOpened: false},
    ]
};
const reducer = (state = initialState, action) => {
    if (action.type === 'FLIP') {
        const idxCard = state.cards.find(card => card.id === action.id)

        //проверка, не пытаемся ли открыть открытую карту
        if (idxCard.isFlipped || idxCard.isOpened) return state;

        let newState = { };
        let round = state.round + 1

        //если раунт нечетный (открываем первую карту в паре)
        if (state.round % 2 === 1){

            //записываем группу выбранной карты в хранилище
            newState = {round,
                firstElement: idxCard.group,
                secondElement: null,
                cards: state.cards.map(card => {
                return card.id === action.id ?
                    {...card, isFlipped: true} :
                    {...card, isFlipped: false}
                })} ;
        }

        if(state.round % 2 === 0){

            if(idxCard.group === state.firstElement){
                newState = {round,
                    firstElement: state.firstElement,
                    secondElement: idxCard.group,
                    cards: state.cards.map(card => {
                        return (card.id === action.id || card.group === state.firstElement) ?
                            {...card, isFlipped: true, isOpened: true } :
                            card
                    })
                }
            }

            if(idxCard.group !== state.firstElement){
                newState = {round,
                    firstElement: state.firstElement,
                    secondElement: idxCard.group,
                    cards: state.cards.map(card => {
                        return card.id === action.id ?
                            {...card, isFlipped: true} :
                            card
                    })
                }
            }
        }

        return newState;
    }
    return state;
}

export default reducer;