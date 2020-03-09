import React, { Component } from 'react';
import { connect } from "react-redux";

import { RingLoader } from 'react-spinners';

class Loader extends Component {
    render() {
        return (
            this.props.isLoading ? <div className='loader-overlay'>
                <RingLoader
                    size={70}
                    color={"#123abc"}
                    loading={this.props.isLoading}
                />
            </div> : null
        );
    }
}


const mapStateToProps = state => {
    return {
        isLoading: state.stockDashboard.isLoading
    };
};


export default connect(mapStateToProps)(Loader);
