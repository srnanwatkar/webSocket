import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { bindActionCreators } from 'redux';

import { handleModal } from './../actions/actions'

class Modal extends Component {
    render() {
        return (
            <div className={'modal-container' + (this.props.isModalOpen ? '' : ' hidden')}>
                {
                    this.props.stockData && this.props.itemKey ?
                        <div className='modal'>
                            <div className='modal-header'>
                                <div className='header'>
                                    <h3>Stock Data</h3>
                                </div>
                                <div className='close-icon'>
                                    <span onClick={() => this.props.handleModal(false)}>x</span>
                                </div>
                            </div>
                            <div className='modal-content'>
                                <div className='details-container'>
                                    <h3>{this.props.itemKey}</h3>
                                    <div className='gradient-container'></div>
                                    <div className='value'>
                                        <span className={'caret ' + this.props.stockData[this.props.itemKey].cellClass}></span>
                                        Current Value: <span>{this.props.stockData[this.props.itemKey].currentValue}</span>
                                    </div>
                                    <div className='disparity-container'>
                                        <div>Max Stock Value: <span>{Math.max(...this.props.stockData[this.props.itemKey].history)}</span></div>
                                        <div>Min Stock Value: <span>{Math.min(...this.props.stockData[this.props.itemKey].history)}</span></div>
                                    </div>
                                </div>
                                <div className='graph-container'>
                                    <Sparklines data={this.props.stockData[this.props.itemKey].history} height={30}>
                                        <SparklinesLine style={{ fill: "none" }} />
                                        <SparklinesSpots />
                                    </Sparklines>
                                </div>
                            </div>
                        </div> : null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isModalOpen: state.stockDashboard.isModalOpen,
        stockData: state.stockDashboard.stockData,
        itemKey: state.stockDashboard.itemKey
    };
};


/**
 * Actions
 */
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        handleModal
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);