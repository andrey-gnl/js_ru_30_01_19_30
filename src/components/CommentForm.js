import React, {Component} from 'react'

export default class CommentsForm extends Component {

	constructor() {
		super();

		this.defaults = {
			name: '',
			comment: ''
		};

		this.state = this.defaults;
	}

	handleSubmit = ev => {
		ev.preventDefault();

		this.setState(this.defaults);

	}

	handleChange = (e) => {
		//ок, но зделал бы уже const {name, value} = e.target
		const target = e.target;
		const val = e.target.value;
		const name = target.name;

		this.setState({
			[name]: val
		});
	}

	render() {
		return (
			<div>
				<h4>Add comment</h4>
				<form onSubmit={this.handleSubmit}>
					<input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange}/><br/><br/>
					<textarea name="comment" id="" cols="30" rows="10" value={this.state.comment} placeholder="Comment" onChange={this.handleChange}/><br/><br/>
					<button type="submit">Submit</button>
				</form>
			</div>

		)
	}


}
