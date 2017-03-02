import React, { Component, PropTypes } from 'react'
import CommentsPagination from '../components/CommentsPagination'

class CommentsPage extends Component {
	static propTypes = {

	};

	render() {
		return <div>
				<CommentsPagination />
				{this.props.children}
			</div>
	}
}

export default CommentsPage