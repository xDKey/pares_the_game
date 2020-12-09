import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './App.css';
import CardList from "../CardList/CardList";

const App = ({ score, maxScore, reset }) => {
    if (score >= maxScore) {
        setTimeout(() => alert('Congratulation! You win!'), 2000);
        setTimeout(reset, 5000);
    }
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

export default connect(mapStateToProps, actions)(App);
