import React from 'react'

export default class CommentsList extends React.Component {
	constructor(props) {
		super();

		this.comments = props.comments.map((comment) => {
			return (
				<li key={comment.id}>
					<h3>Author: {comment.user}</h3>
					{comment.text}
				</li>
			)
		});

		this.amount = this.comments.length;

		this.state = {
			isShow: false,
			btnText: function() {
				return this.isShow ? 'Hide comments' : 'Show comments'
			}

		}
	}

	HandleClick() {
		this.setState({
			isShow: !this.state.isShow
		})
	}

	getComments() {
		if (!this.state.isShow) return null;

		return (<ul> {this.comments} </ul>);
	}

	render() {

		return (
			<div>
				<button onClick={this.HandleClick.bind(this)}>{this.state.btnText()} ({this.amount})</button>

				{this.getComments()}

			</div>
		)

	}
}
