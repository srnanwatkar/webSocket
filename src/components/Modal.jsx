import React, { Component } from 'react';
import { connect } from 'react-redux';


class Modal extends Component {

    constructor(props) {
        super(props)
        this.state = this.props;
    }

    componentDidUpdate(prevProps, prevState) {
        this.setState({
            state: this.props
        });
    }

    render() {
        return (
            <div className={'modal-container' + (this.props.isModalOpen ? '' : ' hidden')}>
                <div className='modal'>
                    <div className='modal-header'>
                        asdasdasd
                    </div>
                    <div className='modal-content'>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isModalOpen: state.isModalOpen
    };
};


/**
 * Actions
 */
const mapDispatchToProps = dispatch => {
    return {
        // handleLoader: () => {
        //     dispatch({
        //         type: LOADING,
        //         payload: false
        //     });
        // },
        // setDataInStore: (data) => {
        //     dispatch({
        //         type: SET_DATA,
        //         payload: data
        //     });
        // }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);