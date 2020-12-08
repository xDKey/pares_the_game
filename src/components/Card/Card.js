import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './Card.css';

const Card = ({ id, flip }) => {
    return (
        <div className='card' onClick={() => flip(id)}>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        check: state,
    }
}

export default connect(mapStateToProps, actions)(Card);