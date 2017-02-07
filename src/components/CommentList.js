import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

    static defaultProps = {
        comments: []
    }

    //? если задаем дефолтное значение то .isRequired писать уже не обязательно, верно? тк ругаться все равно не будет, если не передать
	static propTypes= {
		comments: PropTypes.array
	}

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
        // console.log('---', this.props, nextProps)
    }


    componentWillUnmount() {
        console.log('---', 'unmounting')
    }



    getBody() {
        if (!this.props.isOpen) return null

        const {comments} = this.props
        if (!comments.length) return <h3>No comments yet</h3>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return <ul>{commentItems}</ul>
    }

	render() {
		const actionText = this.props.isOpen ? 'hide' : 'show'
		return (
            <div>
                <a href="#" onClick={this.props.toggleOpen}>{actionText} comments</a>
				{this.getBody()}
            </div>
		)
	}
}

export default toggleOpen(CommentList)