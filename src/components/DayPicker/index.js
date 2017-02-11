import React, {Component} from 'react'
import DayPicker, { DateUtils }  from 'react-day-picker'

export default class Picker extends Component {
	constructor() {
		super();
	}
	state = {
		from: null,
		to: null,
	}

	handleDayClick(e, day) {
		const range = DateUtils.addDayToRange(day, this.state);
		this.setState(range);
	}

	render() {
		const { from, to } = this.state;
		return (
			<div>
				{ from &&
				<p>
					FROM <strong>{ from.toISOString().substring(0, 10) }</strong> TO <strong>{to ? to.toISOString().substring(0, 10) : '...' }</strong>
				</p>
				}
				<DayPicker
					numberOfMonths={ 2 }
					selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
					onDayClick={ this.handleDayClick.bind(this) }
				/>
			</div>
		);
	}

}