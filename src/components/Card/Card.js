import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './Card.css';

const Card = ({ id, color, isFlipped, isOpened, flip }) => {
    const className = isOpened ? 'card opened' : 'card';
    const styles = {
        backgroundColor: isFlipped ? color : null,
    }
    return (
        <div className={className} style={styles} onClick={() => flip(id)}>
        </div>
    )
}
const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, actions)(Card);