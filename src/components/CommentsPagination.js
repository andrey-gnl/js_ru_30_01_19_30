import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
import Comment from './Comment'
import Loader from './Loader'
import {COMMENTS_PER_PAGE} from '../constants'
import {getCommentsTotal} from '../AC'
import {connect} from 'react-redux'

class CommentsPagination extends Component {

	componentDidMount() {

		if(!this.props.total) this.props.getCommentsTotal();

	}

	render() {
		const {total = 0} = this.props

		return (
			<ul>
				{ this.getList(total)}
			</ul>
		)
	}

	getList(total) {
		let arr = [];
		for (let i = 0; i < Math.ceil(total / COMMENTS_PER_PAGE); i++) {
			arr.push(i)
		}

		return arr.map(i => {
			let link = `/comments/${i}`;

			return <li key={i}><Link to={link}>{i+1}</Link></li>
		})
	}

}

export default connect((state) => {
	console.log(state.commentsPagination);
	return {total: state.commentsPagination.total}
}, {getCommentsTotal})(CommentsPagination)