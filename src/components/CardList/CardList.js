import React from 'react';
import { connect } from 'react-redux';
import Card from "../Card/Card";

const CardList = ({ cards }) => {
    const cardList = cards.map(item => <Card
                                        key={item.id}
                                        id={item.id}
                                        isFlipped={item.isFlipped}
                                        isOpened={item.isOpened}/>)
    return (
        cardList
    )
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
    }
}

export default connect(mapStateToProps)(CardList)