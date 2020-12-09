import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from "../CardList/CardList";

const App = ({ score, maxScore }) => {
    if (score >= maxScore) setTimeout(() => alert('Congratulation! You win!'), 1000)
    return (
        <div className="game-field">
            <CardList />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        score: state.score,
        maxScore: state.maxScore
    }
}

export default connect(mapStateToProps)(App);
