import React, {Component} from 'react'
import CommentsList from './CommentsList'

export default class Article extends Component {
    state = {
        isOpen: false
    }
/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }
*/

    getBody() {
        if (!this.state.isOpen) return null

        return (
            <section>
                {this.props.article.text}

                {this.getComments()}
            </section>
        )
    }

    getComments() {
    //Я б эту проверку спрятал в CommentList
        let commentsExists = this.props.article.comments && this.props.article.comments.length > 0;

        if (commentsExists) return <CommentsList comments={this.props.article.comments} />

        return (<div style={{marginTop: '20px'}}><i>no comments</i></div>)

	}

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

	render() {
		const {article} = this.props
		console.log('---', 123)
		return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
				{this.getBody()}
            </div>
		)
	}
}
