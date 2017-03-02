import React, { Component, PropTypes } from 'react'
import CommentsPaginationList from '../components/CommentsPaginationList'

class CommentsPage extends Component {
	static propTypes = {

	};

	render() {
		// debugger;
		console.warn('this.props.params.page',this.props.params.page);
		return <CommentsPaginationList page={this.props.params.page} key={this.props.params.page}/>
	}
}

export default CommentsPage