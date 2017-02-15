import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
import {filterSelect} from '../AC'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Select options = {this.props.options} onChange={this.handleSelectChange} value={this.props.selection} multi/>
		)
	}

	handleSelectChange = selection => {
		// this.setState({ selection })
		this.props.filterSelect(selection)

	}
}

export default connect(null, {filterSelect} )(SelectFilter)