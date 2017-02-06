import React from 'react'

export default class CommentsList extends React.Component {
	constructor(props) {
		super();
		//вот это прям очень плохо. Оно должно жить в render(), а не в кострукторе - оно ведь никогда не поменяется
		this.comments = props.comments.map((comment) => {
			return (
				<li key={comment.id}>
					<h4>Author: {comment.user}</h4>
					{comment.text}
				</li>
			)
		});

		this.amount = this.comments.length;

		this.state = {
			isShow: false
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

	getBtnText() {
		return this.state.isShow ? 'Hide comments' : 'Show comments';
	}

	render() {

		const comments = this.getComments();

		return (
			<div style={{marginTop: '20px'}}>
				<button onClick={this.HandleClick.bind(this)}>{this.getBtnText()} ({this.amount})</button>
				{comments}
			</div>
		)

	}
}
