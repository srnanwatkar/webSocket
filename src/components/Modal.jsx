import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

class Modal extends Component {
    render() {
        return (
            <div className={'modal-container' + (this.props.isModalOpen ? '' : ' hidden')}>
                {
                    this.props.stockData && this.props.dataKey ?
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
                                    <h3>{this.props.dataKey}</h3>
                                    <div className='gradient-container'></div>
                                    <div className='value'>
                                        <span className={'caret ' + this.props.stockData[this.props.dataKey].cellClass}></span>
                                        Current Value: <span>{this.props.stockData[this.props.dataKey].currentValue} <i>(current stock stamp)</i></span>
                                    </div>
                                    <div className='disparity-container'>
                                        <div><b>Max Stock value:</b> <span>{Math.max(...this.props.stockData[this.props.dataKey].history)}</span></div>
                                        <div><b>Min Stock value:</b> <span>{Math.min(...this.props.stockData[this.props.dataKey].history)}</span></div>
                                    </div>
                                </div>
                                {/* Graph plots */}
                                <div className='graph-container'>
                                    <Sparklines data={this.props.stockData[this.props.dataKey].history} height={30}>
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

export default Modal;
