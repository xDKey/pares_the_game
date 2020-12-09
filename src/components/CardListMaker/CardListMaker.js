export const CardListMaker = (num = 8) => {
    const cards = [];
    for (let i = 1, k = 1; i <= num; i++){
        cards.push({
            id: i,
            group: k,
            isFlipped: false,
            isOpened: false
        })
        if (i % 2 === 0) ++k
    }
    return cards;
};
