import React from 'react'

export default class CommentsList extends React.Component {
	constructor(props) {
		super();
		//вот это прям очень плохо. Оно должно жить в render(), а не в кострукторе - оно ведь никогда не поменяется

		this.commentsExists = this.comments && this.comments.length;

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

		let comments = this.props.comments.map((comment) => {
			return (
				<li key={comment.id}>
					<h4>Author: {comment.user}</h4>
					{comment.text}
				</li>
			)
		});

		return (<ul> {comments} </ul>);
	}

	getBtnText() {
		return this.state.isShow ? 'Hide comments' : 'Show comments';
	}

	getBody() {
		const commentsList = this.props.comments;
		const commentsExists = commentsList && commentsList.length > 0;

		if(!commentsExists) return (<div style={{marginTop: '20px'}}><i>no comments</i></div>);

		return (
			<div>
				<button onClick={this.HandleClick.bind(this)}>{this.getBtnText()} ({commentsList.length})</button>
				{this.getComments()}
			</div>
		)

	}

	render() {

		return (

			<div style={{marginTop: '20px'}}>
				{this.getBody()}

			</div>
		)

	}
}
