import { CardListMaker } from '../components/CardListMaker/CardListMaker';

const initialState = {
    round: 1,
    selectedItem: null,
    score: 0,
    maxScore: 9, //количество карт + условие победы
    cards: CardListMaker(9)
};

const reducer = (state = initialState, action) => {
    if (action.type === 'FLIP') {
        const idxCard = state.cards.find(card => card.id === action.id)
        //проверка, не пытаемся ли открыть открытую карту
        if (idxCard.isFlipped || idxCard.isOpened) return state;

        let newState = { };
        let round = state.round + 1

        //если раунд нечетный (открываем первую карту в паре)
        if (state.round % 2 === 1){

            //записываем группу выбранной карты в хранилище
            newState = {round,
                selectedItem: idxCard.group,
                score: state.score,
                maxScore: state.maxScore,
                cards: state.cards.map(card => {
                return card.id === action.id ?
                    {...card, isFlipped: true} :
                    {...card, isFlipped: false}
                })} ;
        }
        //если раунд четный (открываем вторую карту в паре)
        if(state.round % 2 === 0){

            //если группа открытой карты совпадает с записанной в хранилище, то меняем флаги на true
            if(idxCard.group === state.selectedItem){
                newState = {round,
                    score: state.score + 2,
                    maxScore: state.maxScore,
                    selectedItem: state.selectedItem,
                    cards: state.cards.map(card => {
                        return (card.id === action.id || card.group === state.selectedItem) ?
                            {...card, isFlipped: true, isOpened: true } :
                            card
                    })
                }
            }
            //если группа открытой карты не совпадает с записанной в хранилище, то просто показываем её
            if(idxCard.group !== state.selectedItem){
                newState = {round,
                    score: state.score,
                    maxScore: state.maxScore,
                    selectedItem: state.selectedItem,
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