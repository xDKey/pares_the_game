export const CardListMaker = (num = 8) => {
    const cards = [];
    for (let i = 1; i <= num; i += 2) {
        const color = getRandomColor();
        for (let k = i; k <= i+1; k++) {
            cards.push({
                id: k,
                group: i,
                color,
                isFlipped: false,
                isOpened: false
            })
        }
    }
    return cards;
};

const getRandomColor = () => {
    const red = Math.floor( Math.random() * 255 );
    const green = Math.floor( Math.random() * 255 );
    const blue = Math.floor( Math.random() * 255 );
    return `rgb( ${red}, ${green}, ${blue} ) `;
}