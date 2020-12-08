const initialState = {
    cards: [
        {id: 1, isFlipped: false},
        {id: 2, isFlipped: false},
        {id: 3, isFlipped: false},
        {id: 4, isFlipped: false},
    ]
};
const reducer = (state = initialState, action) => {
    if (action.type === 'FLIP') {
        console.log(action.id);
        return state;
    }
    return state;
}

export default reducer;