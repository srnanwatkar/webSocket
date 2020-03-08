import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import moment from 'moment';
import {
    FEW_SECONDS_AGO, _HOURS_AGO, _MINUTES_AGO, _SECONDS_AGO, LOADING, SET_DATA, SET_DATA_KEY, TOGGLE_MODAL
} from '../constants/constants';
import {
    Sparklines, SparklinesLine, SparklinesReferenceLine
} from 'react-sparklines';
import Modal from './Modal';

const webSocketUrl = 'ws://stocks.mnet.website/';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }
        // this.handleModal = this.handleModal.bind(this);
    }

    componentWillMount() {
        this.webSocketConnection = new WebSocket(webSocketUrl);
        this.webSocketConnection.onopen = () => {
            /* On Connection Open */
            console.log('Connection Created');
        };
        this.webSocketConnection.onmessage = this.handleStockEvents.bind(this);

        /* Call Action */
        this.props.handleLoader(false);
    }

    componentDidMount() {
    }

    getTime(prevTime) {
        const timeDiff = moment().diff(prevTime, 'seconds');
        let timeText = '';

        /* Get display text to render */
        if (timeDiff < 60) {
            timeText = timeDiff === 0 ? FEW_SECONDS_AGO : timeDiff + _SECONDS_AGO;
        } else if (timeDiff > 60 && timeDiff < 3600) {
            timeText = (timeDiff % 60) + _MINUTES_AGO;
        } else {
            timeText = ((timeDiff % 60) % 60) + _HOURS_AGO;
        }

        return timeText;
    }

    getDeviationClass(prevValue, currentValue, prevClass) {
        if (prevValue - currentValue > 0) {
            return 'stock-down';
        } else if (prevValue - currentValue < 0) {
            return 'stock-up';
        } else {
            return prevClass;
        }
    }

    handleStockEvents(event) {
        console.log('event', event);
        let stockData = JSON.parse(event.data);
        let newStocks = this.state.data;
        /* Create Associative array for each stocks */
        stockData.map(item => {
            /* Check if it is a new stock */
            if (!newStocks[item[0]]) {
                newStocks[item[0]] = {
                    currentValue: Number(item[1]).toFixed(4),
                    lastUpdated: FEW_SECONDS_AGO,
                    lastUpdatedTime: moment(),
                    history: [Number(item[1]).toFixed(2)],
                    cellClass: '',
                };
            } else {
                /* Maintain history to plot graph */
                newStocks[item[0]].history.push(Number(item[1]).toFixed(2));

                /* Update current stock data */
                newStocks[item[0]] = {
                    lastUpdated: this.getTime(newStocks[item[0]].lastUpdatedTime),
                    lastUpdatedTime: moment(),
                    cellClass: this.getDeviationClass(newStocks[item[0]].currentValue, item[1], newStocks[item[0]].cellClass),
                    currentValue: Number(item[1]).toFixed(4),
                    history: newStocks[item[0]].history
                };
            }
        });

        /* Set State the current Value */
        this.setState({
            data: newStocks
        });
        this.props.setDataInStore(this.state.data);
    }

    handleModal(key) {
        this.props.handleModal(key, true);
    }

    render() {
        return (
            <Fragment>
                <div className='dashboard-container'>

                    {/* Heading */}
                    <div className='heading-container'>
                        <h2>Live Stock Rates</h2>
                    </div>

                    {/* Stocks Table data rendering  */}
                    <table>
                        <thead>
                            <tr>
                                <td className='stock-header stock-name'>Name</td>
                                <td className='stock-header stock-value'>Value</td>
                                <td className='stock-header stock-updated'>Last Updated</td>
                                <td className='stock-header stock-plot'>Plot</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(this.state.data).map((item, i) => {
                                    return <tr key={i} className='row-container' onClick={() => this.handleModal(item)} >
                                        <td>
                                            {item}
                                        </td>
                                        <td>
                                            <div className='value-container'>
                                                <span className={'caret ' + this.state.data[item].cellClass}></span>
                                                <div>{this.state.data[item].currentValue}</div>
                                            </div>
                                        </td>
                                        <td>
                                            {this.state.data[item].lastUpdated}
                                        </td>
                                        <td>
                                            <Sparklines data={this.state.data[item].history} height={40}>
                                                <SparklinesLine color="green" />
                                                <SparklinesReferenceLine type="mean" />
                                            </Sparklines>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div >
                <Modal />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading
    };
};


/**
 * Actions
 */
const mapDispatchToProps = dispatch => {
    return {
        handleLoader: (value) => {
            dispatch({
                type: LOADING,
                payload: value
            });
        },
        setDataInStore: (data) => {
            dispatch({
                type: SET_DATA,
                payload: data
            });
        },
        handleModal: (key, value) => {
            dispatch([
                {
                    type: SET_DATA_KEY,
                    payload: key
                },
                {
                    type: TOGGLE_MODAL,
                    payload: value
                }
            ]);
        },
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);