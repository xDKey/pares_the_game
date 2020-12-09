import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './Card.css';

const Card = ({ id, isFlipped, isOpened, flip }) => {
    const className = isOpened ? 'card flipped opened' : !isFlipped ? 'card' : 'card flipped';
    return (
        <div className={className} onClick={() => flip(id)}>
        </div>
    )
}
const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, actions)(Card);