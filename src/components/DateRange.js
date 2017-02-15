import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {filterByDate} from '../AC'


import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    handleDayClick = (e, day) => {
        // this.setState(DateUtils.addDayToRange(day, this.state))

        const {from,to} = this.props;

        this.props.filterByDate(DateUtils.addDayToRange(day, {from, to}))
    }

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(null, {filterByDate} )(DateRange)