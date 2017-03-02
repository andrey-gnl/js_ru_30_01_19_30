import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import Loader from './Loader'
import {loadComments} from '../AC'
import {connect} from 'react-redux'

class CommentsPaginationList extends Component {

	componentWillMount() {
		const {comments, page, loadComments, isLoading } = this.props

		if(!comments.get(page)) {
			loadComments(page);
		}

	}

	render() {
		return (
			<div>
				{this.getBody()}
			</div>
		)
	}

	getBody() {
		
		const {comments, page, loadComments, isLoading } = this.props

		if(!comments.get(page)) {
			return <Loader />
		}

		const normComments = comments.get(page).valueSeq().toArray();

		const commentItems = normComments.map(el => {
			return <li key={el.id}><Comment id={el.id} commentList={comments.get(page)}/></li>
		});

		return <div>
			<ul>{commentItems}</ul>
		</div>

	}

}

export default connect((state,props) => {
	return {
		comments: state.commentsPagination.entities,
		isLoading: state.commentsPagination.isLoading
	}
}, {loadComments})(CommentsPaginationList)